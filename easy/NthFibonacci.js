/*
The Fibonacci sequence is defined as follows: the first number of the sequence is 0, 
the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. 
Write a function that takes in an integer n and returns the nth Fibonacci number.

Sample input: 6
Sample output: 5 (0, 1, 1, 2, 3, 5)
 
*/

// recursive
// O(2^n) time | O(n) space
function solution1(n) {
    if (n === 2) {
        return 1;
    }
    if (n === 1) {
        return 0;
    }

    return solution1(n - 1) + solution1(n - 2);
}

// O(n) time | O(n) space
function solution2(n, cache = {2:1, 1:0}) {
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = solution2(n - 1, cache) + solution2(n - 2, cache);
        return cache[n];
    }
}

// O(n) time | O(1) space
function solution3(n) {
    if (n <= 1) {
        return 0;
    }

    if (n === 2) {
        return 1;
    }

    let lastTwo = [0, 1];
    let counter = 3;

    while(counter <= n) {
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;

        counter++;
    }

    return lastTwo[1];
}


