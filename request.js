const axios = require('axios');

const path = 'https://www.javascripttutorial.net/javascript-callback';

const request = (ruta) => {
  axios.get(ruta).then((result) => {
    const Status = result.status;
    const Ok = result.statusText;
    const resultObject = { Status, Ok };
    console.log(resultObject);
  }).catch((err) => console.log (err));
};

request(path);
