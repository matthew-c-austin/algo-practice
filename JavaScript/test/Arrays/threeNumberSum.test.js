/* eslint-disable no-undef */
const program = require('../../Algorithms/Arrays/threeNumberSum');
const expect = require('chai').expect;

// Case #1: from sample
it('Test Case #1', function () {
  const array = [12, 3, 1, 2, -6, 5, -8, 6];
  const targetSum = 0;
  const expected = [
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5],
  ];
  expect(program.threeNumberSumSolution1(array, targetSum)).to.deep.equal(expected);
  expect(program.threeNumberSumSolution2(array, targetSum)).to.deep.equal(expected);
});

// Case #2: one triplet as input and output 
it('Test Case #2', function () {
  const array = [0, 1, 2];
  const targetSum = 3;
  const expected = [
    [0, 1, 2],
  ];
  expect(program.threeNumberSumSolution1(array, targetSum)).to.deep.equal(expected);
  expect(program.threeNumberSumSolution2(array, targetSum)).to.deep.equal(expected);
});

// Case #2: one triplet as input and empty array output (no possible triplets)
it('Test Case #3', function () {
  const array = [0, 1, 2];
  const targetSum = 7;
  const expected = [];
  expect(program.threeNumberSumSolution1(array, targetSum)).to.deep.equal(expected);
  expect(program.threeNumberSumSolution2(array, targetSum)).to.deep.equal(expected);
});

// Case #4: one triplet as input and targetSum equal to one index of input array
it('Test Case #4', function () {
  const array = [0, 1, 2];
  const targetSum = 0;
  const expected = [];
  expect(program.threeNumberSumSolution1(array, targetSum)).to.deep.equal(expected);
  expect(program.threeNumberSumSolution2(array, targetSum)).to.deep.equal(expected);
});
