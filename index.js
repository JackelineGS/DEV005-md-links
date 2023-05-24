// const fs = require('fs');
const path = require('path');
const funciones = require('./paths');

const mdLinks = (ruta) => {
  if (funciones.statusFile(funciones.validatePath(ruta))
    .then((archivo) => archivo)
    .catch((err) => {
      console.log(err);
    })) {
    if (path.extname(ruta) === '.md') {
      console.log('Extraer los links de este archivo');
    }
  } else if (funciones.statusDirectory(funciones.validatePath(ruta))
    .then((archivo) => archivo)
    .catch((err) => {
      console.log(err);
    })) {
    return 'Recorrer carpeta';
  }
};

console.log(mdLinks('./src/documentos'));

module.exports = {
  mdLinks,
};
