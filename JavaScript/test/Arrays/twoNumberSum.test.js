const program = require('../../Algorithms/Arrays/twoNumberSum');
const expect = require('chai').expect;

it('Test Case #1', function () {
  const output = program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  expect(output.length === 2).to.deep.equal(true);
  expect(output.includes(11)).to.deep.equal(true);
  expect(output.includes(-1)).to.deep.equal(true);
});