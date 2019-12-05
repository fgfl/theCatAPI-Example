/**
 * Dec 5, 2019
 * Frederick Lee
 */

const assert = require('chai').assert;

const request = require('request');
const {
  handleCatDbSearch,
  CAT_NOT_FOUND_MSG,
} = require('../handleCatDbSearch');


describe("#handleCatDbSearch() callback function", () => {
  const theCatApiUrl = 'https://api.thecatapi.com/v1/breeds/';
  const badUrl = 'https://api.theatapi.com/notaversion/breeds';

  it("should return description for the cat when called with valid cat", (done) => {
    const catToLookUp = 'Chartreux';
    const expected = 'The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.';

    request(`${theCatApiUrl}search?q=${catToLookUp}`, (err, resp, body) => {
      const description = handleCatDbSearch(err, resp, body);
      assert.equal(description, expected);
      done();
    });
  });
  it("should return not found message when called with invalid cat", (done) => {
    const catToLookUp = 'no cat';
    const expected = CAT_NOT_FOUND_MSG(catToLookUp);
    request(`${theCatApiUrl}search?q=${catToLookUp}`, (err, resp, body) => {
      const description = handleCatDbSearch(err, resp, body, catToLookUp);
      assert.equal(description, expected);
      done();
    });
  });
  it("should return undefined when called with invalid URL", (done) => {
    const catToLookUp = 'Chartreux';
    const expected = undefined;
    request(`${badUrl}search?q=${catToLookUp}`, (err, resp, body) => {
      const description = handleCatDbSearch(err, resp, body, catToLookUp);
      assert.equal(description, expected);
      done();
    });
  });
});
