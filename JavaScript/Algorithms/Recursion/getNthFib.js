/* The Fibonacci sequence is defined as follows: the first number of the 
sequence is 0 , the second number is 1 , and the nth number is the sum of the 
(n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n 
and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first two 
numbers as FO = 0 and F1 = 1 . For the purpose of this question, the first 
Fibonacci number is FO; therefore, getNthFib(1) is equal to Fo , getNthFib(2) 
is equal to F1 , etc...

Sample Input
n = 5

Sample Output
3 // 0, 1, 1, 2, 3 */

// Assume only positive integers greater than 0 as input

/* Solution 1
First let's do the naive solution. The recursive solution is inefficient here,
as many of the computations are redone.

O(2^n) time | O(n) space */

function getNthFibRecursive(n) {
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        return getNthFibRecursive(n - 1) + getNthFibRecursive(n - 2);
    }
}

/* Solution 2
An iterative solution is by far more efficient in this problem, as it can be solved
in O(n) time and O(1) space. */

function getNthFibIterative(n) {
    const lastTwoFibs = [0, 1];
    let counter = 3;
    while (counter <= n) {
        let nextFib = lastTwoFibs[1] + lastTwoFibs[0];
        lastTwoFibs[0] = lastTwoFibs[1];
        lastTwoFibs[1] = nextFib;
        counter++;
    }
    return n > 1 ? lastTwoFibs[1] : lastTwoFibs[0];
}

exports.getNthFibRecursive = getNthFibRecursive;
exports.getNthFibIterative = getNthFibIterative;