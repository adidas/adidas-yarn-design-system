const path = require('path');
const fs = require('fs');

const MARKDOWN_EXT = '.md';

/**
 * Reads the existing markdown files inside a folder and its subfolders and create an object
 * with the same structure as the folder structure which values are the markdown file as string.
 * @param {string} basePath - Folder to start searching.
 * @returns {Object} markdown - Object with the files content.
 */
function readMarkdownFiles(basePath) {
  const files = fs.readdirSync(basePath);

  return files.reduce((markdown, file) => {
    const filePath = path.normalize(path.join(basePath, file));
    const stats = fs.statSync(filePath);

    if (stats.isFile() && path.extname(file) === MARKDOWN_EXT) {
      const lang = path.basename(file, MARKDOWN_EXT);

      markdown[lang] = fs.readFileSync(filePath, { encoding: 'utf8' }).toString();
    } else if (stats.isDirectory()) {
      markdown[file] = readMarkdownFiles(filePath);
    }

    return markdown;
  }, {});
}

module.exports = {
  readMarkdownFiles
};
