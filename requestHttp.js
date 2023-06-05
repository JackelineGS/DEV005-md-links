const axios = require('axios');

const request = (objectArray) => {
  const tranformArray = objectArray.map((obj) => axios.get(obj.href)
    .then((answer) => {
      // eslint-disable-next-line no-param-reassign
      obj.status = answer.status;
      // eslint-disable-next-line no-param-reassign
      obj.Ok = answer.statusText;
      return obj;
    }));
  return Promise.all(tranformArray);
};

module.exports = {
  request,
};
