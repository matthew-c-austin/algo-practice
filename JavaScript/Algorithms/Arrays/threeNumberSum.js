/* Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in the
array that sum up to the target sum and return a two-dimensional array of all these
triplets. The numbers in each triplet should be ordered in ascending order, and the
triplets themselves should be ordered in ascending order with respect to the numbers
they hold.

If no three numbers sum up to the target sum, the function should return an empty array.

Sample Input
array =  [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

Sample Outputs
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

/* Solution 1
We could sort the input array to traverse in order. With each index of the sorted array
we can traverse the following numbers, setting a potentialMatch value to check. For every
match we increment the 2nd value and then check the remaining values for a potentialMatch.

Or we can create a hash table that contains all values. As we traverse the sorted
array for potential match we would then check the hash table for it. This would be a n^2 solution
still, as the O(nlogn) of the sorting is dwarfed by large data sets.

O(n^2) time | O(n) space - where n is the length of the array */

function threeNumberSumSolution1(array, targetSum) {

  const nums = {};
  array.sort((a, b) => a - b);
  const triplets = [];

  //Create a hash table with values of array
  for (const num of array) {
    nums[num] = true;
  }

  for (let i = 0; i < array.length - 2; i++) {
    const num1 = array[i];
    for (let j = i + 1; j < array.length - 1; j++) {
      const num2 = array[j];
      const potentialMatch = targetSum - num2 - num1;
      if (potentialMatch in nums && num2 < potentialMatch) {
        const match = [num1, num2, potentialMatch];
        triplets.push(match);
      }
    }

  }
  return triplets;
}

/* Solution 2
Another option is to use pointers and a while loop without a hash table. This
prevents the need for additional conditionals to prevent unordered and repeat triplets
from being added to the triplets array.

O(n^2) time | O(n) space - where n is the length of the array */

function threeNumberSumSolution2(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets =[];

  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      const currentSum = array[i] + array[leftPointer] + array[rightPointer];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer++;
        rightPointer--;
      } else if (currentSum < targetSum) {
        leftPointer++;
      } else if (currentSum > targetSum) {
        rightPointer--;
      }
    }
  }
  return triplets;
}

exports.threeNumberSumSolution1 = threeNumberSumSolution1;
exports.threeNumberSumSolution2 = threeNumberSumSolution2;
