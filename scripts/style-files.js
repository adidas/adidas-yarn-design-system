const fs = require('fs');
const lessToJs = require('less-vars-to-js');

function readStyleVariables(path) {
  const less = fs.readFileSync(path, { encoding: 'utf8' });

  return lessToJs(less, {
    resolveVariables: true,
    stripPrefix: true
  });
}

module.exports = {
  readStyleVariables
};
