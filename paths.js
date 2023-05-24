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

const statusDirectory = (ruta) => new Promise((resolve, reject) => {
  fs.stat(ruta, (err, stats) => {
    if (err) {
      reject(console.log('Error'));
    }
    resolve(stats.isDirectory());
  });
});

const statusFile = (ruta) => new Promise((resolve, reject) => {
  fs.stat(ruta, (err, stats) => {
    if (err) {
      reject(console.log('Error'));
    }
    resolve(stats.isFile());
  });
});

/* statusFile('./src/documentos').then((ruta) => {
  console.log(ruta);
}).catch((err) => {
  console.log(err);
}); */

module.exports = {
  validatePath, statusDirectory, statusFile,
};
