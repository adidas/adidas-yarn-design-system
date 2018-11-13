const path = require('path');
const fs = require('fs');

const COMPONENT_EXT = '.vue';

/**
 * Reads the existing component files inside a folder and returns the list of names.
 * @param {string} basePath - Folder to search.
 * @returns {string[]} List of names.
 */
function readComponents(basePath) {
  const files = fs.readdirSync(basePath);

  return files.reduce((components, file) => {
    const filePath = path.normalize(path.join(basePath, file));
    const stats = fs.statSync(filePath);
    let component;

    if (stats.isFile() && path.extname(file) === COMPONENT_EXT) {
      component = path.basename(file, COMPONENT_EXT);
    }

    return component ? components.concat(component) : components;
  }, []);
}

module.exports = {
  readComponents
};
