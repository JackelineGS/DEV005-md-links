const path = require('path');

/* const getLinks = (ruta) => {
  readFiles(ruta).then((result) => {
    const File = result;
    const regex = /(\b(https?):[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
    const link = File.match(regex);
    console.log(link);
    // eslint-disable-next-line array-callback-return
    link.map((document) => {
      const objetoDocu = path.parse(document);
      const href = document.slice('');
      const text = objetoDocu.name;
      // const Status = request(link).status;
      // const Ok = request(link).statusText;
      const objeto = {
        href, text, ruta,
      };
      // console.log(objeto);
    });
  });
}; */

const getLinks = (data, file) => {
  const regex = /(\b(https?):[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
  const link = data.match(regex);
  const arrayLinks = link.map((document) => {
    const objetoDocu = path.parse(document);
    const href = document.slice('');
    const text = objetoDocu.name;
    const objeto = {
      href, text, file,
    };
    return objeto;
  });
  return arrayLinks;
};

// 'C:\\Users\\user\\Desktop\\Laboratoria\\DEV005-md-links\\src\\documentos\\archivo.md';
// validateTrue(paths);

module.exports = {
  getLinks,
};
