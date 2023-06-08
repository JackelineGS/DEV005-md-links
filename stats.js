const { validatePath } = require('./paths');
const { readFiles } = require('./readArrays');
const { getmdPath } = require('./recursividad');
const { request } = require('./request');

const readLinks = (ruta) => new Promise((resolve, reject) => {
  const totalmdArray = getmdPath(validatePath(ruta));
  readFiles(totalmdArray).then((rest) => request(rest.flat())
    .then((respuesta) => resolve(respuesta)));
});
// stats : Total, Unique
const stats = (ruta) => new Promise((resolve, reject) => {
  readLinks(ruta).then((result) => {
    const allHref = result.map((element) => element.href);
    const enlacesUnicos = new Set(allHref);
    const hrefSize = enlacesUnicos.size;
    const totalhref = allHref.length;
    const statistics = { Total: totalhref, Unique: hrefSize };
    resolve(statistics);
  });
});

// validate stats: Total, Unique, Broken
const validateStats = (ruta) => new Promise((resolve, reject) => {
  readLinks(ruta).then((result) => {
    let contador = 0;
    result.map((element) => {
      if (!element.status === 200 || element.status === 404) {
        // eslint-disable-next-line no-plusplus
        contador++;
      }
      return contador;
    });
    const allHref = result.map((element) => element.href);
    const enlacesUnicos = new Set(allHref);
    const hrefSize = enlacesUnicos.size;
    const totalhref = allHref.length;
    const statistics = { Total: totalhref, Unique: hrefSize, Broken: contador };
    resolve(statistics);
  });
});

module.exports = {
  stats, validateStats,
};
