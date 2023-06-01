const path = require('path');
const { readFiles } = require('./readArrays');
// solo acepta rutas absolutas
const getObject = (ruta) => {
  readFiles(ruta).then((result) => {
    const contentFile = result;
    const regEx = /(\b(https?):[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
    const links = contentFile.match(regEx);
    const validations = links.map((document) => {
      const objetoDocu = path.parse(document);
      const href = document.slice('');
      const text = objetoDocu.name;
      const objeto = { href, text, ruta };
      return objeto;
    });
    console.log(validations);
  });
};
const ruta = 'C:\\Users\\user\\Desktop\\Laboratoria\\DEV005-md-links\\src\\documentos\\archivo.md';
getObject(ruta);

module.exports = {
  getObject,
};
