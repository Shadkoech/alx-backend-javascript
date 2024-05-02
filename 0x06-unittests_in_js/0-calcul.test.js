// test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Test calculateNumber function", () => {
  it('Rounding of a', () => {
    assert.equal(calculateNumber(3.3, 2), 5);
    assert.equal(calculateNumber(30.8, 9), 40);
    assert.equal(calculateNumber(5.6, 4), 10);
  });

  it('Rounding of b', () => {
    assert.equal(calculateNumber(3, 2.8), 6);
    assert.equal(calculateNumber(30, 9.5), 40);
    assert.equal(calculateNumber(5, 50.3), 55);
  });

  it('Addition of and b', () => {
    assert.equal(calculateNumber(8.3, 6.4), 14);
    assert.equal(calculateNumber(3.8, 8.2), 12);
    assert.equal(calculateNumber(5.1, 4.8), 10);
  });

  it('Sum negative numbers', () => {
    assert.equal(calculateNumber(-5, -3.2), -8);
    assert.equal(calculateNumber(-2, -3), -5);
  });
  
});