const path = require('path');
const fs = require('fs');

const validatePath = (route) => {
  if (fs.existsSync(route)) {
    if (path.isAbsolute(route)) {
      return route;
    } else {
      return path.resolve(route);
    }
  } else {
    return 'La ruta no existe';
  }
};
// console.log(validatePath('./src/documentos/archivo.md'));
const statusDirectory = (ruta) => {
  const stats = fs.statSync(ruta);
  return stats.isDirectory();
};

// console.log(statusDirectory('./src/documentos'));

/* const statusFile = (ruta) => {
  fs.stat(ruta, (err, stats) => {
    if (!err) {
      console.log(stats.isFile());
    }
  });
}; */

const statusFile = (ruta) => {
  const stats = fs.statSync(ruta);
  return stats.isFile();
};

// console.log(statusFile('./src/documentos/archivo.md'));

/* statusFile('./src/documentos').then((ruta) => {
  console.log(ruta);
}).catch((err) => {
  console.log(err);
}); */

module.exports = {
  validatePath, statusDirectory, statusFile,
};
