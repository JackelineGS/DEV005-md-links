const axios = require('axios');

const request = (objectArray) => {
  const tranformArray = objectArray.map((obj) => axios.get(obj.href)
    .then((answer) => {
      obj.status = answer.status;
      obj.message = answer.statusText;
      return obj;
    }).catch((error) => {
      obj.status = error.response.status;
      obj.message = error.response.statusText;
      return obj;
    }));
  return Promise.all(tranformArray);
};

/* const arrayEjem = [{
  href: 'https://javascript30.com/',
  text: 'text',
}, {
  href: 'https://www.w3schools.com/js/js_object',
  text: 'roto',
}, {
  href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Referen'
  text: 'roto'
}];

request(arrayEjem).then((resolve) => console.log(resolve)); */

module.exports = {
  request,
};
