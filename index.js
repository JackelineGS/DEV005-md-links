const fs = require('fs');
const path = require('path');
const { validatePath, statusDirectory, statusFile } = require('./paths');
const { readFile } = require('./readArrays');

const mdLinks = (ruta, options) => new Promise((resolve, reject) => {
  const file = validatePath(ruta);
  if (statusFile(file) && path.extname(ruta) === '.md') {
    readFile(ruta).then((result) => {
      const contenido = result;
      const expresionHref = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
      const expresionText = /\b\w+\b/ig;
      const href = contenido.match(expresionHref);
      const text = contenido.match(expresionText);
      // const validate = pathsMd.map((element) => element.split('(),[]'));
      // const pathResult = pathsMd.map((element) => path.parse(element));
      const objeto = { href, text, file };
      // if (options.validate === false) {
      if (options === false) {
        console.log(objeto);
      } else {
        const validateTrue = {
          href: 'link',
          text: 'Texto que aparece dentro del link (<a>)',
          file: 'Ruta del archivo donde se encontro el link',
        };
        console.log(validateTrue);
      }
    });
  } else if (statusDirectory(file)) {
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
mdLinks('./src', { validate: false }).then((result) => {
  console.log(result);
});

module.exports = {
  mdLinks,
};
