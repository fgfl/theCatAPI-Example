/**
 * Dec 5, 2019
 * Frederick Lee
 *
 * Callback functions to handle the results from the theCatAPI database request
 */

const CAT_NOT_FOUND_MSG = cat => `"${cat}" was not found.`;

const handleCatDbSearch = (err, response, body, catToLookUp) => {
  if (err) {
    console.log('There was an error getting the information. Error: ', err.code);
    return;
  }

  const data = JSON.parse(body)[0];
  let result = '';


  if (!data) {
    result = CAT_NOT_FOUND_MSG(catToLookUp);
  } else {
    result = data.description;
  }

  console.log(result);
  return result;
};


module.exports = {
  handleCatDbSearch,
  CAT_NOT_FOUND_MSG,
};