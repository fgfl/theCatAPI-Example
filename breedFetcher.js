/**
 * Dec 5, 2019
 * Frederick Lee
 *
 * https://web.compass.lighthouselabs.ca/days/w02d4/activities/892
 */

const request = require('request');


const CAT_NOT_FOUND_MSG = cat => `"${cat}" was not found.`;

/**
 * get the description of the cat using theCatAPI
 * @param {string} breedName: name of cat
 * @param {function} callback (error, description)
 *    error - null if successful. Something if failure.
 *    description - string if successful. null if failure
 */
const fetchBreedDescription = (breedName, callback) => {
  const theCatApiUrl = 'https://api.thecatapi.com/v1/breeds/';
  request(`${theCatApiUrl}search?q=${breedName}`, (err, response, body) => {
    let result = '';

    if (!err) {
      const data = JSON.parse(body)[0];

      if (!data) {
        result = null;
        err = new Error(`${CAT_NOT_FOUND_MSG(breedName)}`);
      } else {
        result = data.description;
      }
    }
    callback(err, result);
  });
};

module.exports = {
  fetchBreedDescription,
};