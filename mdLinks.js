const { validatePath } = require('./paths');
const { readFiles } = require('./readArrays');
const { request } = require('./request');
const { getmdPath } = require('./recursividad');
const { stats } = require('./stats');

const mdLinks = (ruta, options) => new Promise((resolve, reject) => {
  const rutaValida = validatePath(ruta);
  const mdArray = getmdPath(rutaValida);
  if (options.validate === true) {
    readFiles(mdArray).then((rest) => request(rest.flat())
      .then((respuesta) => resolve(respuesta)).catch((error) => reject(error)));
  } else if (options.stats) resolve(stats(ruta));

  else {
    readFiles(mdArray).then((rest) => resolve(rest.flat())).catch((error) => reject(error));
  }
});

module.exports = {
  mdLinks,
};
