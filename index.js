const { validatePath } = require('./paths');
const { readFiles } = require('./readArrays');
const { request } = require('./request');
const { getmdPath } = require('./recursividad');

const mdLinks = (ruta, options) => new Promise((resolve, reject) => {
  const rutaValida = validatePath(ruta);
  const mdArray = getmdPath(rutaValida);
  if (options.validate === true) {
    readFiles(mdArray).then((rest) => request(rest.flat())
      .then((respuesta) => resolve(respuesta)));
  } else {
    readFiles(mdArray).then((rest) => resolve(rest.flat()));
  }
});

/// mdLinks('./src', { validate: true }).then((result) => console.log(result));

module.exports = {
  mdLinks,
};
