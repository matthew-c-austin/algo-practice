/* Write a function that takes in a Binary Search Tree (BST) and a target 
integer value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value , a left child node, and a right child node. A node 
is said to be a valid BST node if and only if it satisfies the BST property: its value 
is strictly greater than the values of every node to its left; its value is less than 
or equal to the values of every node to its right; and its children nodes are either 
valid BST nodes themselves or None / null.

Sample Input

tree =      10
          /    \
         5      15
        / \     / \
       2   5   13  22
      /          \
     1            14

target = 12

Sample Output
13 */

/* Solution
I chose to solve this iteratively, as it's better for memory. You can keep track
of a closest value and compare against the absolute difference of the current
node value.

Average : O(logn) time | O(1) space
Worst : O(n) time | O(1) space */

function findClosestValueInBst(tree, target) {
  let currentNode = tree;
  let closestValue = tree.value;
  while (currentNode !== null) {
    if (Math.abs(target - closestValue) > Math.abs(target - currentNode.value)) {
      closestValue = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else break;
  }
  return closestValue;
}

// This is the class of the input tree.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.findClosestValueInBst = findClosestValueInBst;
