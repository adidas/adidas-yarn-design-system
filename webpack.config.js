const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

const cwd = process.cwd();
const production = process.env.NODE_ENV === 'production';
const library = process.env.LIBRARY_NAME || 'yarn';
const assets = 'assets';
const entry = {
  js: {
    filename: {
      in: 'index',
      out: `${ library }`
    },
    extension: {
      in: 'js',
      out: 'js'
    }
  },
  css: {
    filename: {
      in: `${ library }`,
      out: `${ library }`
    },
    extension: {
      in: 'less',
      out: 'css'
    }
  },
  icon: {
    filename: {
      in: `${ library }-icon`,
      out: `${ library }-icon`
    },
    extension: {
      in: 'less',
      out: 'css'
    }
  },
  logo: {
    filename: {
      in: `${ library }-logo`,
      out: `${ library }-logo`
    },
    extension: {
      in: 'less',
      out: 'css'
    }
  }
};

/**
 * Returns the current date in English string format.
 * @returns {string} Release date.
 */
function getReleaseDate() {
  return (new Date()).toLocaleDateString('en-en', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Returns the current year.
 * @returns {string} Current year.
 */
function getYear() {
  return (new Date()).toLocaleDateString('en-en', { year: 'numeric' });
}

module.exports = {
  entry: Object.keys(entry).reduce((result, key) => {
    const filename = entry[key].filename.in;
    const extension = entry[key].extension.in;

    result[filename] = `./src/${ extension }/${ filename }.${ extension }`;

    return result;
  }, {}),
  output: {
    filename: '[name].js',
    path: path.resolve(cwd, './dist'),
    library,
    libraryTarget: 'umd'
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'less-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }, {
        test: /\.(eot|svg|ttf|woff(2)?)$/,
        loader: `file-loader?name=${ assets }/[name].[ext]`
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.BannerPlugin({
      banner: `
${ pkg.name } v${ pkg.version }
Copyright adidas ${ getYear() }
Release date: ${ getReleaseDate() }
      `.trim()
    }),
    ...Object.keys(entry).map((key) => new webpack.optimize.CommonsChunkPlugin({
      name: entry[key].filename.in,
      filename: `${ entry[key].filename.out }.${ entry[key].extension.out }`,
      chunks: [ entry[key].filename.in ]
    }))
  ],
  devtool: production ? 'source-map' : 'inline-source-map'
};
