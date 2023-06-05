const fs = require('fs');
const path = require('path');
const { statusDirectory, statusFile } = require('./paths');

const getmdPath = (ruta) => {
  let newArray = [];
  if (statusFile(ruta) && path.extname(ruta) === '.md') {
    newArray.push(ruta);
  } else if (statusDirectory(ruta)) {
    const directory = fs.readdirSync(ruta);
    directory.forEach((element) => {
      const newPath = path.resolve(path.join(ruta, element));
      if (statusFile(newPath) && path.extname(newPath) === '.md') {
        newArray.push(newPath);
      } else if (statusDirectory(newPath)) {
        newArray = newArray.concat(getmdPath(newPath));
      }
    });
  }
  return newArray;
};

// getmdPath('./src');
// console.log(getmdPath('./src'));

module.exports = {
  getmdPath,
};
