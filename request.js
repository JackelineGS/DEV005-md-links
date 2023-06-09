const axios = require('axios');

const request = (objectArray) => {
  const tranformArray = objectArray.map((obj) => axios.get(obj.href)
    .then((answer) => {
      // eslint-disable-next-line no-param-reassign
      obj.status = answer.status;
      // eslint-disable-next-line no-param-reassign
      obj.message = answer.statusText;
      return obj;
    }).catch((error) => {
      // eslint-disable-next-line no-param-reassign
      obj.status = error.response ? 404 : 'error';
      // eslint-disable-next-line no-param-reassign
      obj.message = 'fail';
      return obj;
    }));
  return Promise.all(tranformArray);
};

module.exports = {
  request,
};
