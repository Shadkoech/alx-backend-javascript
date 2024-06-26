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

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get('http://localhost:7865/cart/47', (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get('http://localhost:7865/cart/-47', (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });


  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get('http://localhost:7865/cart/d200-44a5-9de6', (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    request.post('http://localhost:7865/login', {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get('http://localhost:7865/available_payments', (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
