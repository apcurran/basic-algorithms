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
    let low = 0;
    let high = arr.length;

    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2);
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
// function binarySearch(arr, target, startIndex = 0, endIndex = arr.length - 1) {
//     // first base case
//     if (startIndex > endIndex) return -1;

//     const midPoint = Math.floor((startIndex + endIndex) / 2);

//     if (arr[midPoint] === target) {
//         return midPoint;   
//     } else if (arr[midPoint] < target) {
//         return binarySearch(arr, target, midPoint + 1, endIndex);
//     } else if (arr[midPoint] > target) {
//         return binarySearch(arr, target, startIndex, midPoint - 1);
//     }
// }

module.exports = { binarySearch };