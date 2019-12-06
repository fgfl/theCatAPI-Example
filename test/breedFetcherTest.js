/**
 * Dec 5, 2019
 * Frederick Lee
 */

const assert = require('chai').assert;

const {fetchBreedDescription} = require('../breedFetcher');
// const {
//   handleCatDbSearch,
//   CAT_NOT_FOUND_MSG,
// } = require('../handleCatDbSearch');


describe("#fetchBreedDescription() callback function", () => {

  it("returns a string description for a valid breed, via callback", (done) => {
    const catToLookUp = 'Chartreux';
    const expected = 'The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.';

    fetchBreedDescription(catToLookUp, (err, desc) => {
      assert.equal(err, null);
      assert.equal(expected, desc);
      done();
    });
  });
  it("should return null when called with invalid cat", (done) => {
    const catToLookUp = 'no cat';
    const expected = null;
    fetchBreedDescription(catToLookUp, (err, desc) => {
      assert.notEqual(err, null);
      assert.equal(expected, desc);
      done();
    });
  });
});
