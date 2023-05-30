const fs = require('fs');
const path = require('path');
const { validatePath, statusDirectory, statusFile } = require('./paths');
const { readFile } = require('./readArrays');

const mdLinks = (ruta, options) => new Promise((resolve, reject) => {
  const validar = validatePath(ruta);
  if (statusFile(validar) && path.extname(ruta) === '.md') {
    readFile(ruta).then((result) => {
      const contenido = result;
      const expresions = /(?<text>.*?)\s+(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
      const pathsMd = contenido.match(expresions);
      console.log(pathsMd);
      const pathResult = pathsMd.map((element) => path.parse(element));
      console.log(pathResult);
      if (options.validate === false) {
        const validateFalse = {
          href: 'link',
          text: 'Texto que aparece dentro del link (<a>)',
          file: 'Ruta del archivo donde se encontro el link',
        };
        console.log (validateFalse);
      } else {
        const validateTrue = {
          href: 'link',
          text: 'Texto que aparece dentro del link (<a>)',
          file: 'Ruta del archivo donde se encontro el link',
          status: 'Código de respuesta HTTP',
          ok: 'Mensaje fail en caso de fallo u Ok en caso de éxito',
        };
        console.log(validateTrue);
      }
    });
  } else if (statusDirectory(validar)) {
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
mdLinks('./src', { validate: true }).then((result) => {
  console.log(result);
});

module.exports = {
  mdLinks,
};
