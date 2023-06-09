const fs = require('fs');
const { getLinks } = require('./links');

const readFile = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(getLinks(data, file));
  });
});

const readFiles = (array) => {
  const arrPromesas = array.map((elem) => readFile(elem));
  return Promise.all(arrPromesas);
};

module.exports = {
  readFiles, readFile,
};
