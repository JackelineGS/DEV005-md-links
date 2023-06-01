const fs = require('fs');
const path = require('path');
const { validatePath, statusDirectory, statusFile } = require('./paths');
const { getObject } = require('./extraer');

const mdLinks = (ruta, options) => new Promise((resolve, reject) => {
  const array = validatePath(ruta);
  if (statusFile(array) && path.extname(array) === '.md') {
    getObject(array);
  } else if (statusDirectory(array)) {
    const directory = fs.readdirSync(ruta);
    const directoryPromises = directory.map((element) => {
      const links = path.resolve(path.join(ruta, element));
      return mdLinks(links);
    });
    Promise.all(directoryPromises).then((values) => {
      resolve(values);
    });
  }
});

mdLinks('./src', { validate: false }).then((result) => {
  console.log(result);
});

module.exports = {
  mdLinks,
};
