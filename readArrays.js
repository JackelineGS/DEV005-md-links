const fs = require('fs');
const { getLinks } = require('./links');

const readFile = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      reject();
    }
    resolve(getLinks(data, file));
  });
});

const readFiles = (array) => {
  const arrPromesas = array.map((elem) => readFile(elem));
  return Promise.all(arrPromesas);
};

// const arraysEjem = ['./src/documento.md', './src/documentos/archivo.md', './src/Ejemplos/README.md'];
// readFiles(arraysEjem).then((result) => console.log(result));

module.exports = {
  readFiles, readFile,
};
