const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  it('GET/ method returns correct response', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});