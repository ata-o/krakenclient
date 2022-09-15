
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
const utils = require('./util');

const site = process.env.SITE_INFO

utils.get('/outages', (response) => {
    console.log('outage done'/*response*/);
})
//var siteInfo = utils.get('/site-info/' + site)