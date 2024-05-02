// test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("Test calculateNumber function with type == SUM", () => {
  it('sum of int positives', () => {
    assert.equal(calculateNumber('SUM', 15, 15), 30);
  });

  it('Sum of rounded positives ', () => {
    assert.equal(calculateNumber('SUM', 5, 4.7223), 10);
    assert.equal(calculateNumber('SUM', 8.214, 4), 12);
  });

  it('sum of both rounded values', () => {
    assert.equal(calculateNumber('SUM', 8.3, 6.4), 14);
    assert.equal(calculateNumber('SUM', 3.8, 8.2), 12);
  });

  it('Sum negative numbers', () => {
    assert.equal(calculateNumber('SUM', -5, -3.2), -8);
    assert.equal(calculateNumber('SUM', -2, -3), -5);
  }); 
});


describe("Test calculateNumber function with type == SUBTRACT", () => {
  it('Subtract of int positives', () => {
    assert.equal(calculateNumber('SUBTRACT', 15, 10), 5);
  });
    
  it('Subtract of rounded positives ', () => {
    assert.equal(calculateNumber('SUBTRACT', 5, 4.7223), 0);
    assert.equal(calculateNumber('SUBTRACT', 8.214, 4), 4);
  });
    
  it('Subtract of both rounded values', () => {
    assert.equal(calculateNumber('SUBTRACT', 8.3, 10.4), -2);
    assert.equal(calculateNumber('SUBTRACT', 3.852, 8.2412), -4);
  });
    
  it('Subtract negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -5, -3.2), -2);
    assert.equal(calculateNumber('SUBTRACT', -2, -3), 1);
  });
});

describe("Test calculateNumber function with type == DIVIDE", () => {
  it('sum of int positives', () => {
    assert.equal(calculateNumber('DIVIDE', 15, 15), 1);
  });

  it('Sum of rounded positives ', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7223), 0.25);
    assert.equal(calculateNumber('DIVIDE', 8.214, 4), 2);
  });

  it('sum of both rounded values', () => {
    assert.equal(calculateNumber('DIVIDE', 8.3, 2.152), 4);
    assert.equal(calculateNumber('DIVIDE', 3.8, 8.2), 0.5);
  });

  it('Sum negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -10, -4.85), 2);
    assert.equal(calculateNumber('DIVIDE', -2, 1), -2);
  }); 
});

describe("Tests DIVIDE function W 0:", () => {
  it("Returns 'Error'.", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
  });
});
