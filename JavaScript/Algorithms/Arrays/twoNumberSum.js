/* Write a function that takes in a non-empty array of distinct integers and an integer 
representing a target sum. If any two numbers in the input array sum up to the target sum, 
the function should return them in an array, in any order. If no two numbers sum up to the 
target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array, 
you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

Sample Input
array =- [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Sample Outputs
[-1, 11] // the numbers can be in reverse order */

/* Solution
Using a hash table, search in constant time for a potential match to the current 
array index. If the potential match is not in the hash table, add the current value 
of the array to the hast table 

O(n) time | O(n) space - where n is the length of the array */

function twoNumberSum(array, targetSum) {

  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

exports.twoNumberSum = twoNumberSum;
