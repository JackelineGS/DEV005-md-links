// const fs = require('fs');
const path = require('path');
const { validatePath, statusDirectory, statusFile } = require('./paths');
const { readFile } = require('./javaScript');

const mdLinks = (ruta) => {
  if (statusFile(validatePath(ruta)) && path.extname(ruta) === '.md') {
    readFile(ruta).then((archivo) => console.log(archivo));
  } else if (statusDirectory(validatePath(ruta))) {
    return 'Recorrer carpeta';
  }
};

console.log(mdLinks('./src/documentos'));

module.exports = {
  mdLinks,
};
