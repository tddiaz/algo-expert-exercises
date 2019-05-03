/**
Smallest Difference

Write a function that takes in two non-empty arrays of integers. The function should nd the pair of
numbers (one from the rst array, one from the second array) whose absolute difference is closest to
zero. The function should return an array containing these two numbers, with the number from the
rst array in the rst position. Assume that there will only be one pair of numbers with the smallest
difference.

Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
 */

function solution1(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	
	let result = [];
		
    let smallestDifference = Infinity;

	let leftArrayPtr = 0;
	let rightArrayPtr = 0;
	
	while (leftArrayPtr < arrayOne.length && rightArrayPtr < arrayTwo.length) {
		let leftElement = arrayOne[leftArrayPtr];
		let rightElement = arrayTwo[rightArrayPtr];
        let currentDifference = Math.abs(leftElement - rightElement);
        
        if (currentDifference === 0) {
            return [leftElement, rightElement];
        } else if (currentDifference < smallestDifference) {
			smallestDifference = currentDifference;
			result = [leftElement, rightElement];
		}
		
		if (leftElement > rightElement) {
			rightArrayPtr++;
		} else if (rightElement > leftElement) {
			leftArrayPtr++;
		}
	}
	
    return result;
}