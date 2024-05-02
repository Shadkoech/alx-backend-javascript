const sinon = require('sinon');
const assert = require('assert');

// import the function and module to be tested
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with the correct arguments', () => {
        // Create a spy on Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call the function to be tested
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with the correct arguments
        assert(calculateNumberSpy.calledWith('SUM', 100, 20));

        // Restore the original function after the test
        calculateNumberSpy.restore();
    });
});
