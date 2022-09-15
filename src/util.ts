import Module from "module";

const axios = require('axios');
const model = require ('./model')
require('dotenv').config();

axios.defaults.headers.common = {
    'X-API-Key': process.env.API_KEY,
};
axios.defaults.baseURL = process.env.BASE_URL;

exports.get = (path, callback) => {
    axios
        .get(path)
        .then((res) => {
            console.log(`${path} statusCode: ${res.status}`);
            callback(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

exports.post = (path, outages: Outage[], callback) => {
    axios
        .post(path, {
            outages
        })
        .then((res) => {
            console.log(`statusCode: ${res.status}`);
            callback(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
};
