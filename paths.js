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

const statusDirectory = (ruta) => {
  const stats = fs.statSync(ruta);
  return stats.isDirectory();
};

const statusFile = (ruta) => {
  const stats = fs.statSync(ruta);
  return stats.isFile();
};

module.exports = {
  validatePath, statusDirectory, statusFile,
};
