const program = require('../../Algorithms/Recursion/getNthFib');
const expect = require('chai').expect;

// Case #1 from sample
it('Test Case #1 - Recursive', function () {
  expect(program.getNthFibRecursive(5)).to.deep.equal(3);
});

it('Test Case #1 - Iterative', function () {
    expect(program.getNthFibIterative(5)).to.deep.equal(3);
});

// Case n = 1
it('Test Case #2 - Recursive', function () {
    expect(program.getNthFibRecursive(1)).to.deep.equal(0);
});
  
it('Test Case #2 - Iterative', function () {
      expect(program.getNthFibIterative(1)).to.deep.equal(0);
});

// Case n = 2
it('Test Case #3 - Recursive', function () {
    expect(program.getNthFibRecursive(2)).to.deep.equal(1);
});
  
it('Test Case #3 - Iterative', function () {
      expect(program.getNthFibIterative(2)).to.deep.equal(1);
});


// Case n = 10
it('Test Case #4 - Recursive', function () {
    expect(program.getNthFibRecursive(10)).to.deep.equal(34);
});
  
it('Test Case #4 - Iterative', function () {
      expect(program.getNthFibIterative(10)).to.deep.equal(34);
});


/* Case n = 75, extremely large number. This is prohibitively long for the 
recursive function. It is left out of the testing. */
  
it('Test Case #5 - Iterative', function () {
      expect(program.getNthFibIterative(75)).to.deep.equal(1304969544928657);
});
  

