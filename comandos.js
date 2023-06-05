const { validatePath } = require('./paths');
const { readFiles } = require('./readArrays');
const { getmdPath } = require('./recursividad');

// Links únicos
const uniqueLinks = (ruta) => {
  const totalmdArray = getmdPath(validatePath(ruta));
  readFiles(totalmdArray).then((rest) => rest.flat().map((objeto) => objeto.href));
};
const sizeUniquelinks = uniqueLinks('./src');
console.log('Cantidad de enlaces únicos', sizeUniquelinks);

// Crear función de los links rotos

// Crear función de los links totales
