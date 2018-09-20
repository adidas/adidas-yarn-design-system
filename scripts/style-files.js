const fs = require('fs');
const lessToJs = require('less-vars-to-js');

module.exports = function(path) {
  const less = fs.readFileSync(path, { encoding: 'utf8' });

  return lessToJs(less, {
    resolveVariables: true,
    stripPrefix: true
  });
};
