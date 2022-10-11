const program = require('../../Algorithms/Arrays/isValidSubsequence');
const expect = require('chai').expect;

// Case #1 from sample
it('Test Case #1', function () {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  expect(program.isValidSubsequence(array, sequence)).to.deep.equal(true);
});

// Case #2 sequence is not contained
it('Test Case #2', function () {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, -1, 11];
    expect(program.isValidSubsequence(array, sequence)).to.deep.equal(false);
});

// Case #3 with single index array and subsequence
it('Test Case #3', function () {
    const array = [5];
    const sequence = [5];
    expect(program.isValidSubsequence(array, sequence)).to.deep.equal(true);
});

// Case #4 with an array that contains all subsequence values but not in order from the beginning
it('Test Case #4', function () {
    const array = [10, 1, 22, 25, 6, -1, 8, 11];
    const sequence = [1, 6, -1, 10];
    expect(program.isValidSubsequence(array, sequence)).to.deep.equal(false);
});

// Case #5 with an array of all identical values, and a subsequence of the same
it('Test Case #5', function () {
    const array = [1, 1, 1, 1, 1];
    const sequence = [1, 1, 1, 1, 1];
    expect(program.isValidSubsequence(array, sequence)).to.deep.equal(true);
});