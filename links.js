const path = require('path');

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

module.exports = {
  getLinks,
};
