/**
Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a
target sum. The function should nd all triplets in the array that sum up to the target sum and return
a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in
ascending order, and the triplets themselves should be ordered in ascending order with respect to
the numbers they hold. If no three numbers sum up to the target sum, the function should return an
empty array.

Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 */
// O(n^3) time | O(n) space
 function solution1(array, targetSum) {
    array.sort((a,b) => a - b);
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const x = array[i];
        for (let j = i+1; j < array.length; j++) {
            const y = array[j];
            for (let k = j+1; k < array.length; k++) {
                const z = array[k];
                if (x + y + z === targetSum) {
                    result.push([x, y, z]);
                }
            }
        }
    }
    return result;
 }

 // O(n^2) time | O(n) space
 function solution2(array, targetSum) {
    array.sort((a,b) => a -b );
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let x = array[i];
        let leftPtr = i + 1;
        let rightPtr = array.length - 1;
        
        while (leftPtr < rightPtr) {
            let y = array[leftPtr];
            let z = array[rightPtr];
            let currentSum = x + y + z;
            if (currentSum === targetSum) {
                result.push([x, y , z]);
                leftPtr++;
                rightPtr = array.length - 1;
            } else if (currentSum < targetSum) {
                leftPtr++;
            } else if (currentSum > targetSum) {
                rightPtr--;
            }
        }
    }

    return result;
 }