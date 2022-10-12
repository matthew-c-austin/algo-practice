/* Write a function that takes in a non-empty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order.

Sample Input
array = [1, 2, 3, 5, 6, 8, 9]

Sample Output
[1, 4, 9, 25, 36, 64, 81] */

/* Solution
To account for negative numbers, which are allowed, and given the fact that the
array is sorted, we can use pointers to avoid sorting the output array at the 
end. Compare the absolute values of the smallest and largest values and place 
the larger squared value into the end of the output array. Move pointers 
accordingly, and repeat until the output array is filled.

O(n) time | O(n) space */

function sortedSquaredArray(array) {
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    const squaredArray = new Array(array.length).fill(0);
    for (let i = array.length - 1; i >= 0; i--) {
        const leftValue = array[leftPointer];
        const rightValue = array[rightPointer];
        
        if (Math.abs(leftValue) > Math.abs(rightValue)) {
            squaredArray[i] = leftValue * leftValue;
            leftPointer++;
        } else {
            squaredArray[i] = rightValue * rightValue;
            rightPointer--;
        }
    }
    return squaredArray;
}

exports.sortedSquaredArray = sortedSquaredArray;