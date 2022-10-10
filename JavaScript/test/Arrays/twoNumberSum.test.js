const program = require('../../Algorithms/Arrays/twoNumberSum');
const expect = require('chai').expect;

// Case #1 from sample: [-1, 11]
it('Test Case #1', function () {
  const output = program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  expect(output.length === 2).to.deep.equal(true);
  expect(output.includes(11)).to.deep.equal(true);
  expect(output.includes(-1)).to.deep.equal(true);
});

// Case #2 for for an array that does not contain a two number sum
it('Test Case #2', function () {
  const output = program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 99);
  expect(output.length === 2).to.deep.equal(false);
  expect(output).to.deep.equal([]);
});

// Case #3 for single element array: should return empty array
it('Test Case #3', function () {
  const output = program.twoNumberSum([10], 17);
  expect(output.length === 2).to.deep.equal(false);
  expect(output).to.deep.equal([]);
});

// Case #4 for single element array: should return empty array when targetSum = array[0]
it('Test Case #4', function () {
  const output = program.twoNumberSum([10], 10);
  expect(output.length === 2).to.deep.equal(false);
  expect(output).to.deep.equal([]);
});

// Case #5 for for an array that contains large values
it('Test Case #5', function () {
  const output = program.twoNumberSum([3, 5, -4, 1073741823, 11, 1, -1, 1073741825], 2147483648);
  expect(output.length === 2).to.deep.equal(true);
  expect(output.includes(1073741823)).to.deep.equal(true);
  expect(output.includes(1073741825)).to.deep.equal(true);
});