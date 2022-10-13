/* Given an array of positive integers representing the values of coins in 
your possession, write a function that returns the minimum amount of change 
(the minimum sum of money) that you cannot create. The given coins can have 
any positive integer value and aren't necessarily unique (i.e., you can have 
multiple coins of the same value).

For example, if you're given coins = [1, 2, 5] , the minimum amount of change 
that you can't create is 4 . If you're given no coins, the minimum amount of 
change that you can't create is 1.

Sample Input
coins = [5, 7, 1, 1, 2, 3, 22]

Sample Output
20 */

/* Solution
The trick to this algorithm is sorting the coins array and noticing a pattern 
with various input. By continuing to sum up each value and comparing the next value
to currentSum + 1, you can tell if it is possible to continue the chain, so to speak.

For coins = [1, 2, 4, 9], for instance, you can create, 1, 2, 3, 4, 5, 6, 7, but NOT 
8. Such that at, the last index of the array when comparing 7 to 9 (currentSum + 1)
is not satisfied, and the chain cannot continue.


O(nlogn) time | O(1) space */
function nonConstructibleChange(coins) {
    let currentSum = 0;
    coins.sort((a, b) => a - b);
    for (const coin of coins) {
        if (coin > currentSum + 1) return currentSum + 1;

        currentSum += coin;
    }
    return currentSum + 1;
}   

exports.nonConstructibleChange = nonConstructibleChange;