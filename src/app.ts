//1. Retrieves all outages from the `GET /outages` endpoint
//2. Retrieves information from the `GET /site-info/{siteId}` endpoint for the site with the ID `norwich-pear-tree`
//3. Filters out any outages that began before `2022-01-01T00:00:00.000Z` or don't have an ID that is in the list of
//   devices in the site information
//4. For the remaining outages, it should attach the display name of the device in the site information to each appropriate outage
//5. Sends this list of outages to `POST /site-outages/{siteId}` for the site with the ID `norwich-pear-tree`

//get-outages
//filter-endpoint
//post-outages

// /outages
// /site-info/{siteId}
// /site-outages/{siteId}
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const utils = require('./util');

const site = process.env.SITE_INFO;

utils.get('/outages', (response) => {
    utils.get('/site-info/' + site, (siteInfo) => {
        utils.filter(
            response,
            siteInfo,
            (outages) => {
                utils.post('/site-outages/' + site, outages, (res) => {
                    console.log(res.data);
                })
            }
        );
    })
});
