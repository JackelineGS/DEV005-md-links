const { validatePath } = require('./paths');
const { readFiles } = require('./readArrays');
const { getmdPath } = require('./recursividad');
const { request } = require('./request');

// Links únicos y totales
const uniqueLinks = (ruta) => new Promise((resolve, reject) => {
  const totalmdArray = getmdPath(validatePath(ruta));
  readFiles(totalmdArray).then((rest) => resolve(rest.flat()));
});

const sizeArray = (ruta) => {
  uniqueLinks(ruta).then((result) => {
    const allHref = result.map((element) => element.href);
    const enlacesUnicos = new Set(allHref);
    const hrefSize = enlacesUnicos.size;
    console.log('Unique :', hrefSize);
    const totalhref = allHref.length;
    console.log('Total :', totalhref);
  });
};

sizeArray('./src');

// Crear función de los links rotos
const broken = (ruta) => new Promise((resolve, reject) => {
  const totalmdArray = getmdPath(validatePath(ruta));
  readFiles(totalmdArray).then((rest) => request(rest.flat())
    .then((respuesta) => resolve(respuesta)));
});

const brokenLinks = (ruta) => {
  broken(ruta).then((result) => {
    let contador = 0;
    result.forEach((element) => {
      if (!element.status === 200 || element.status === 404) {
        // eslint-disable-next-line no-plusplus
        contador++;
      }
      return contador;
    });
    console.log('Rotos', contador);
  });
};

brokenLinks('./src');
