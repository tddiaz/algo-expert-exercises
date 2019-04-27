
/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. 
If no two numbers sum up to the target sum, the function should return an empty array. 
Assume that there will be at most one pair of numbers summing up to the target sum.

Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
Sample output: [-1, 11]
 */

const TwoNumberSum = {
    // O(n^2) time | O(1) space
    solution1: function(array, targetSum) {
        
        for (let i = 0; i < array.length; i++) {
            for (let j = i+1; j < array.length; j++) {
                if (array[i] + array[j] === targetSum) {
                    return [array[i], array[j]].sort((x,y) => x - y);
                }
            }
        }
        return [];
    },
    // O(n) time | O(n) space
    solution2: function(array, targetSum) {
        let map = {};
        for (const x of array) {
            let y = targetSum - x;
            if (y in map) {
                return [x, y].sort((a,b) => a - b);
            } else {
                map[x] = true;
            }
        };
        return [];
    },
    // O(nlog(n)) | O(1) space
    solution3: function(array, targetSum) {
        array.sort((a,b) => a - b);
        let x = 0;
        let y = array.length - 1;

        while (x < y) {
            let actualSum = array[x] + array[y];
            if (actualSum === targetSum) {
                return [array[x], array[y]];
            } else if (actualSum > targetSum) {
                y--;
            } else if (actualSum < targetSum) {
                x++;
            }
        }

        return [];
    }
}