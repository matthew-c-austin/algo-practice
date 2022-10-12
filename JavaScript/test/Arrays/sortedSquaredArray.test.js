const program = require('../../Algorithms/Arrays/sortedSquaredArray');
const expect = require('chai').expect;

// Case #1 from sample
it('Test Case #1', function () {
  const input = [1, 2, 3, 5, 6, 8, 9];
  const expected = [1, 4, 9, 25, 36, 64, 81];
  expect(program.sortedSquaredArray(input)).to.deep.equal(expected);
});

// Case with single element array
it('Test Case #2', function () {
  const input = [9];
  const expected = [81];
  expect(program.sortedSquaredArray(input)).to.deep.equal(expected);
});

// Case with all equivalent values in array
it('Test Case #3', function () {
  const input = [9, 9, 9, 9, 9];
  const expected = [81, 81, 81, 81, 81];
  expect(program.sortedSquaredArray(input)).to.deep.equal(expected);
});

// Case with a large negative number
it('Test Case #4', function () {
  const input = [-10, 2, 3, 5, 6, 8, 9];
  const expected = [4, 9, 25, 36, 64, 81, 100];
  expect(program.sortedSquaredArray(input)).to.deep.equal(expected);
});

// Case with only negative numbers
it('Test Case #5', function () {
  const input = [-5, -4, -3, -2, -1];
  const expected = [1, 4, 9, 16, 25];
  expect(program.sortedSquaredArray(input)).to.deep.equal(expected);
});

// Case with mirrored numbers
it('Test Case #6', function () {
  const input = [-5, -4, 0, 4, 5];
  const expected = [0, 16, 16, 25, 25];
  expect(program.sortedSquaredArray(input)).to.deep.equal(expected);
});

// Case with 0
it('Test Case #7', function () {
  const input = [0];
  const expected = [0];
  expect(program.sortedSquaredArray(input)).to.deep.equal(expected);
});