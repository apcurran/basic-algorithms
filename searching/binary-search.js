"use strict";

/**
 * solution 1 -- iterative
 * time: O(log n)
 * space: O(1)
 *
 * @param {number[]} arr 
 * @param {number} target 
 * @returns {number}
 */
function binarySearch(arr, target) {
    if (arr.length === 1 && arr[0] === target) return 0;

    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        const val = arr[mid];

        if (val === target) {
            return mid;
        } else if (val > target) {
            // search left half -- discard right
            high = mid;
        } else {
            // search right half -- discard left
            low = mid + 1;
        }
    }

    return -1;
}

// /**
//  * solution 2 -- recursive
//  * time: O(log n)
//  * space: O(log n)
//  * 
//  * @param {number[]} arr 
//  * @param {number} target 
//  * @returns {number}
//  */
// function binarySearch(arr, target, lowIndex = 0, highIndex = arr.length - 1) {
//     // first base case
//     if (lowIndex > highIndex) return -1;

//     const midIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2);
//     const midVal = arr[midIndex];

//     if (midVal === target) {
//         return midIndex;   
//     } else if (midVal < target) {
//         return binarySearch(arr, target, midIndex + 1, highIndex);
//     } else if (midVal > target) {
//         return binarySearch(arr, target, lowIndex, midIndex - 1);
//     }
// }

module.exports = { binarySearch };