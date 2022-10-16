/* eslint-disable no-undef */
const program = require('../../Algorithms/Binary Trees/branchSums');
const expect = require('chai').expect;

class BinaryTree extends program.BinaryTree {
  constructor(value) {
    super(value);
  }

  //Creates binary tree from array
  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

//From sample
it('Test Case #1', function () {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(program.branchSums(tree)).to.deep.equal([15, 16, 18, 10, 11]);
});

//A tree with two leaves
it('Test Case #2', function () {
  const tree = new BinaryTree(0).insert([1, 2]);
  expect(program.branchSums(tree)).to.deep.equal([1, 2]);
});

//A tree with no leaves
it('Test Case #3', function () {
  const tree = new BinaryTree(1);
  expect(program.branchSums(tree)).to.deep.equal([1]);
});
