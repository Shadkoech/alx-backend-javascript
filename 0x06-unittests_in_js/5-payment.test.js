const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        // Create a spy on console.log
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the spy after each test
        consoleSpy.restore();
    });

    it('should give correct log when sendPaymentRequestToApi is called with 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);
        // Assert that console.log was called with the correct message
        assert(consoleSpy.calledOnceWithExactly('The total is: 120'));
    });

    it('should give correct log when sendPaymentRequestToApi is called with 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        // Assert that console.log was called with the correct message
        assert(consoleSpy.calledOnceWithExactly('The total is: 20'));
    });
});
