// const fs = require('fs');
const path = require('path');
const { validatePath, statusDirectory, statusFile } = require('./paths');

const mdLinks = (ruta) => {
  if (statusFile(validatePath(ruta))
    .then((archivo) => archivo)
    .catch((err) => {
      console.log(err);
    })) {
    if (path.extname(ruta) === '.md') {
      console.log('Extraer los links de este archivo');
    }
  } else if (statusDirectory(validatePath(ruta))
    .then((archivo) => archivo)
    .catch((err) => {
      console.log(err);
    })) {
    return 'Recorrer carpeta';
  }
};

// console.log(mdLinks('./src/documentos'));

module.exports = {
  mdLinks,
};
