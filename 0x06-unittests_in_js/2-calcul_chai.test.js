// test.js

const assert = require('assert');
const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai').default;


describe("Test calculateNumber function with type == SUM", () => {
  it('sum of int positives', () => {
    expect(calculateNumber('SUM', 15, 15)).to.equal(30);
  });

  it('Sum of rounded positives ', () => {
    expect(calculateNumber('SUM', 5, 4.7223)).to.equal(10);
    expect(calculateNumber('SUM', 8.214, 4)).to.equal(12);
  });

  it('sum of both rounded values', () => {
    expect(calculateNumber('SUM', 8.3, 6.4)).to.equal(14);
    expect(calculateNumber('SUM', 3.8, 8.2)).to.equal(12);
  });

  it('Sum negative numbers', () => {
    expect(calculateNumber('SUM', -5, -3.2)).to.equal(-8);
    expect(calculateNumber('SUM', -2, -3)).to.equal(-5);
  }); 
});


describe("Test calculateNumber function with type == SUBTRACT", () => {
  it('Subtract of int positives', () => {
    expect(calculateNumber('SUBTRACT', 15, 10)).to.equal(5);
  });
    
  it('Subtract of rounded positives ', () => {
    expect(calculateNumber('SUBTRACT', 5, 4.7223)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 8.214, 4)).to.equal(4);
  });
    
  it('Subtract of both rounded values', () => {
    expect(calculateNumber('SUBTRACT', 8.3, 10.4)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 3.852, 8.2412)).to.equal(-4);
  });
    
  it('Subtract negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -5, -3.2)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', -2, -3)).to.equal(1);
  });
});

describe("Test calculateNumber function with type == DIVIDE", () => {
  it('sum of int positives', () => {
    expect(calculateNumber('DIVIDE', 15, 15)).to.equal(1);
  });

  it('Sum of rounded positives ', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7223)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 8.214, 4)).to.equal(2);
  });

  it('sum of both rounded values', () => {
    expect(calculateNumber('DIVIDE', 8.3, 2.152)).to.equal(4);
    expect(calculateNumber('DIVIDE', 3.8, 8.2)).to.equal(0.5);
  });

  it('Sum negative numbers', () => {
    expect(calculateNumber('DIVIDE', -10, -4.85)).to.equal(2);
    expect(calculateNumber('DIVIDE', -2, 1)).to.equal(-2);
  }); 
});

describe("Tests DIVIDE function With 0:", () => {
  it("Returns 'Error'.", () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
