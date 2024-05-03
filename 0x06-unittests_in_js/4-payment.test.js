const sinon = require('sinon');
const assert = require('assert');

// import the function and module to be tested
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('stub utils.calculateNumber and log correct message', () => {
        // Stub Utils.calculateNumber to always return 10
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log
        const consoleSpy = sinon.spy(console, 'log');

        // Call the function to be tested
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with the correct arguments
        assert(calculateNumberStub.calledWith('SUM', 100, 20));

        // Assert that console.log was called with the correct message
        assert(consoleSpy.calledWith('The total is: 10'));

        // Restore the original function and console.log after the test
        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
