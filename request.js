const axios = require('axios');

const request = (objectArray) => {
  const tranformArray = objectArray.map((obj) => axios.get(obj.href)
    .then((answer) => {
      // eslint-disable-next-line no-param-reassign
      obj.status = answer.status;
      // eslint-disable-next-line no-param-reassign
      obj.message = answer.statusText;
      return obj;
    })).catch((error) => console.log(error.));
  return Promise.all(tranformArray);
};
const arrayEjem = [{
  href: 'https://javascript30.com/',
  text: 'text',
}, {
  href: 'https://www.w3schools.com/js/js_object',
  text: 'roto',
}];

request(arrayEjem).then((resolve) => console.log(resolve));

module.exports = {
  request,
};
