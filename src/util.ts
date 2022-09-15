const axios = require('axios');
const model = require('./model');
require('dotenv').config();

axios.defaults.headers.common = {
    'X-API-Key': process.env.API_KEY,
};
axios.defaults.baseURL = process.env.BASE_URL;

exports.get = (path: string, callback) => {
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

exports.post = (path: string, outages: Outage[], callback) => {
    axios
        .post(path, 
            outages,
        )
        .then((res) => {
            console.log(`statusCode: ${res.status}`);
            callback(res.data);
        })
        .catch((error) => {
            console.error(error.code);
        });
};

exports.filter = (outages: Outage[], siteInfo: SiteInformation, callback) => {
    let cutoffDate: Date = new Date('2022-01-01T00:00:00.000Z');
    let outagesAfterCutoff = outages.filter(
        (o) => new Date(o.begin) >= cutoffDate
    );
    let outagesWithIdPresent = outagesAfterCutoff.filter((outage) =>
        siteInfo.devices.map((device) => device.id).includes(outage.id)
    );
        
    const result: Outage[] = [];

    outagesWithIdPresent.forEach((outage) => {
        result.push({
            id: outage.id,
            name: siteInfo.devices.find((d) => d.id === outage.id).name,
            begin: outage.begin,
            end: outage.end,
        });
    });
    callback(result);
};
