const axios = require('axios');

const request = (objectArray) => {
  const tranformArray = objectArray.map((obj) => axios.get(obj.href)
    .then((answer) => {
      obj.status = answer.status;
      obj.Ok = answer.statusText;
      return obj;
    }));
  return Promise.all(tranformArray);
};

// const ejemplo = 
// request(ejemplo);

module.exports = {
  request,
};
