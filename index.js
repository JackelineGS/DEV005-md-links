const { validatePath } = require('./paths');
const { readFiles } = require('./readArrays');
const { request } = require('./requestHttp');
const { getmdPath } = require('./recursividad');

const mdLinks = (ruta, options) => new Promise((resolve, reject) => {
  const rutaValida = validatePath(ruta);
  const mdArray = getmdPath(rutaValida);
  if (options.validate === true) {
    // eslint-disable-next-line max-len
    readFiles(mdArray).then((rest) => request(rest).then((respuesta) => resolve(respuesta)));
  } else {
    readFiles(mdArray).then((rest) => resolve(rest.flat()));
  }
});

mdLinks('./src', { validate: true }).then((result) => {
  console.log(result);
});

module.exports = {
  mdLinks,
};
