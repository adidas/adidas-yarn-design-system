const path = require('path');
const url = require('url');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const readMarkdownFiles = require('./scripts/markdown-files.js');
const readStyleVariables = require('./scripts/style-files.js');

const { HOSTNAME = '/_nuxt/', BASE = '' } = process.env;
const _BASE = BASE ? `/${ path.basename(BASE) }/` : '';
const globalRoutes = [];

module.exports = {
  srcDir: './example',
  build: {
    vendor: [ 'choicesjs-stencil' ],
    plugins: [ new CopyWebpackPlugin([{ from: './node_modules/choicesjs-stencil/dist', to: './' }]) ],
    publicPath: url.resolve(HOSTNAME, _BASE)
  },
  head: {
    title: 'adidas YARN Design System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    bodyAttrs: {
      class: 'yarn'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: path.join(_BASE, '/favicon.ico')
      }
    ]
  },
  css: [
    './dist/yarn-logo.css',
    './dist/yarn-icon.css',
    './dist/yarn.css',
    '~/styles/style.less'
  ],
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vendor.js',
    '~/plugins/window.js'
  ],
  router: {
    base: _BASE,
    linkExactActiveClass: 'active',
    extendRoutes(routes) {
      routes.forEach((route) => {
        let meta;

        try {
          meta = require(route.component.replace(/\.vue$/, '.meta.json'));
        } catch (e) {
          meta = {};
        }

        globalRoutes.push({
          ...route,
          meta
        });
      });
    }
  },
  generate: {
    dir: './docs'
  },
  env: {
    markdown: readMarkdownFiles('example/locales'),
    routes: globalRoutes,
    style: {
      variable: readStyleVariables('src/less/variables/variables.less'),
      color: readStyleVariables('src/less/variables/colors.less'),
      typography: readStyleVariables('src/less/variables/typography.less')
    }
  }
};
