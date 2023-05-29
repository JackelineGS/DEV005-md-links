const fs = require('fs');
const path = require('path');
const { validatePath, statusDirectory, statusFile } = require('./paths');
const { readFile } = require('./readArrays');

const mdLinks = (ruta) => new Promise((resolve, reject) => {
  const validar = validatePath(ruta);
  if (statusFile(validar) && path.extname(ruta) === '.md') {
    readFile(ruta).then((result) => {
      const contenido = result;
      console.log(contenido);
      const expresions = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
      const pathsMd = contenido.match(expresions);
      console.log(pathsMd);
    });
  } else if (statusDirectory(validar)) {
    const directory = fs.readdirSync(ruta);
    const directoryPromises = directory.map((element) => {
      const links = path.resolve(path.join(ruta, element));
      return mdLinks(links);
      // arraysRutas = arraysRutas.concat(links);
    });
    Promise.all(directoryPromises).then((values) => {
      resolve(values);
    });
  }
});

// console.log(mdLinks('./src'));
mdLinks('./src').then((result) => {
  console.log(result);
});

module.exports = {
  mdLinks,
};
