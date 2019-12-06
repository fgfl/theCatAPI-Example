/**
 * Dec 5, 2019
 * Frederick Lee
 */

const {fetchBreedDescription} = require('./breedFetcher');
 
let breedName =  process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});