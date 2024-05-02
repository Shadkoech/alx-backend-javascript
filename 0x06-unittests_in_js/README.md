# Unittests in JS
This project focuses on learning and implementing unit tests in JavaScript using Mocha, Chai, and Sinon libraries. The project comprises several tasks, each emphasizing different aspects of unit testing. This is a very important concept in development framework since it helps detect bugs early and ensure the development of high quality JS code.

![Unittest](Unittest.png)

## Introduction
The project aims to enhance understanding of unit testing in JavaScript, particularly using Mocha for test suites, Chai for assertions, and Sinon for spies and stubs. Unit testing is a crucial aspect of modern software development, allowing developers to validate individual components or units of code in isolation. This project goes from basic assertions to advanced techniques like spies and stubs, bringing forth valuable insights into ensuring the quality and integrity of your JavaScript applications.

## Learning Objectives
- Understand how to use Mocha to write test suites.
- Utilize different assertion libraries such as Node's built-in assertions or Chai.
- Structure and organize test suites effectively.
- Employ spies and stubs for testing.
- Implement hooks for pre-test and post-test actions.
- Conduct unit testing for asynchronous functions.
- Write integration tests for small Node.js servers.

## Tasks
### Task 0: Basic test with Mocha and Node assertion library
Install Mocha using npm.
Set up scripts in package.json to run Mocha tests.
Implement a basic function calculateNumber and its test suite using Node's assert library.


### Task 1: Combining descriptions
- Upgrade the calculateNumber function to handle different types of operations (SUM, SUBTRACT, DIVIDE).
- Rewrite the test suite using assert.
- Organize test cases using describe.


### Task 2: Basic test using Chai assertion library
- Install Chai using npm.
- Rewrite the previous task's code using Chai's expect syntax for assertions.


### Task 3: Spies
- Install Sinon using npm.
- Create spies to test function calls and behavior.
- Ensure proper usage of spies within test suites.


### Task 4: Stubs
- Use Sinon to create stubs for function calls.
- Stub expensive or external functions to control test behavior.
- Verify correct usage and restoration of stubs.


### Task 5: Hooks
- Utilize Mocha's hooks (beforeEach, afterEach) to perform pre-test and post-test actions.
- Ensure proper setup and teardown of resources for each test.


### Task 6: Async tests with done
- Implement asynchronous testing using Mocha's done callback.
- - Test functions that involve asynchronous operations such as API calls or Promises.


### Task 7: Skip
- Implement skipping of tests to temporarily exclude them from test runs.
- Ensure tests can be skipped without causing failures.


### Task 8: Basic Integration testing
- Set up an Express server for basic integration testing.
- Write test cases to verify the functionality of endpoints.


### Task 9: Regex integration testing
- Modify the Express server to include an endpoint with regex-based routing.
- Write test cases to validate the behavior of the new endpoint.


### Task 10: Deep equality & Post integration testing
- Extend the Express server with additional endpoints.
- Write integration tests to ensure correct responses and behavior.
- Use deep equality comparisons to validate complex data structures.
