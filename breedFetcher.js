/**
 * Dec 5, 2019
 * Frederick Lee
 * 
 * https://web.compass.lighthouselabs.ca/days/w02d4/activities/892
 */

const request = require('request');
const {handleCatDbSearch} = require('./handleCatDbSearch');




const theCatApiUrl = 'https://api.thecatapi.com/v1/breeds/';
const badUrl = 'https://api.theatapi.com/notaversion/breeds';
let catToLookUp = '';

const cliArgs = process.argv.slice(2);
catToLookUp = cliArgs[0];

request(`${theCatApiUrl}search?q=${catToLookUp}`,
  (err, resp, body) => handleCatDbSearch(err, resp, body, catToLookUp));
request(`${badUrl}search?q=${catToLookUp}`,
  (err, resp, body) => handleCatDbSearch(err, resp, body, catToLookUp));