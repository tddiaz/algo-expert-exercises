/*
You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" 
and two children nodes stored in properties called "left" and "right," respectively. A node is said to be a BST node if and only if 
it satisfies the BST property: its value is strictly greater than the values of every node to its left; 
its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. 
You are also given a target integer value; write a function that finds the closest value to that target value contained in the BST. 
Assume that there will only be one closest value.
*/

// recursive solution
// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space
function solution1(tree, target) {
    return _solution1Recursive(tree, target, tree.value);
}

function _solution1Recursive(tree, target, closest) {
    if (tree === null) return closest;
	let currentValue = tree.value;
	if (Math.abs(target - closest) > Math.abs(target - currentValue)) {
		closest = currentValue;
	}
	
	if (target > currentValue) {
		return findClosestValueRecursive(tree.right, target, closest);
	} else if (target < currentValue) {
		return findClosestValueRecursive(tree.left, target, closest);
	} else {
		return closest;
	}
}

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
function solution2(tree, target) {
    let closest = tree.value;
    let node = tree;
    while (node !== null) {
        const currentValue = node.value;
        if (Math.abs(currentValue - target) < Math.abs(closest - target)) {
            closest = currentValue;
        }

        if (target > currentValue) {
            node = node.right;
        } else if (target < currentValue) {
            node = node.left;
        } else {
            break;
        }
    }
    return closest;
}