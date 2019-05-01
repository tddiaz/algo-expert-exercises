/** 
Palindrome Check

Write a function that takes in a non-empty string and that returns a boolean representing whether or
not the string is a palindrome. A palindrome is dened as a string that is written the same forward
and backward.

Sample input:"abcdcba"
Sample output: True (it is a palindrome)
*/

// O(n) time | O(n) space
function solution1(word) {
    const reverseCharArray = [];
    for (let i = word.length - 1; i >= 0; i--) {
        reverseCharArray.push(word[i]);
    }

    return reverseCharArray.join("") === word;
}

// O(n) time | O(1) space
function solution2(word) {
	let leftIndex = 0;
	let rightIndex = word.length - 1;
	
	while (leftIndex < rightIndex) {
		if (word[leftIndex] !== word[rightIndex]) {
			return false;
		} else {
			leftIndex++;
			rightIndex--;
		}
	}
	
	return true;
}