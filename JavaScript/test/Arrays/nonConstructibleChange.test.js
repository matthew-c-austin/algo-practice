/* eslint-disable no-undef */
const program = require('../../Algorithms/Arrays/nonConstructibleChange');
const expect = require('chai').expect;

// Case #1: from sample
it('Test Case #1', function () {
  const coins = [5, 7, 1, 1, 2, 3, 22];
  const expected = 20;
  expect(program.nonConstructibleChange(coins)).to.deep.equal(expected);
});

// Case #2: all 1's
it('Test Case #2', function () {
  const coins = [1, 1, 1, 1, 1, 1];
  const expected = 7;
  expect(program.nonConstructibleChange(coins)).to.deep.equal(expected);
});

// Case #3: empty array
it('Test Case #3', function () {
  const coins = [];
  const expected = 1;
  expect(program.nonConstructibleChange(coins)).to.deep.equal(expected);
});

// Case #4: large value
it('Test Case #4', function () {
  const coins = [106];
  const expected = 1;
  expect(program.nonConstructibleChange(coins)).to.deep.equal(expected);
});

// Case #5: just 1
it('Test Case #5', function () {
  const coins = [1];
  const expected = 2;
  expect(program.nonConstructibleChange(coins)).to.deep.equal(expected);
});
