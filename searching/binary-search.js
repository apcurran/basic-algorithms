"use strict";

// /**
//  * solution 1
//  * time: O(log n)
//  * space: O(1)
//  *
//  * @param {number[]} arr 
//  * @param {number} target 
//  * @returns {number}
//  */
// function binarySearch(arr, target) {
//     let endIndex = arr.length - 1;
//     let startIndex = 0;
//     let middleIndex = 0;

//     while (startIndex <= endIndex) {
//         middleIndex = Math.floor((startIndex + endIndex) / 2);

//         if (arr[middleIndex] === target) {
//             // Target was found at middleIndex
//             return middleIndex;
//         } else if (arr[middleIndex] < target) {
//             // Search the right side of the array
//             startIndex = middleIndex + 1;
//         } else {
//             // Search the left side of the array
//             endIndex = middleIndex - 1;
//         }
//     }

//     // If target is not found at all.
//     return -1;
// }

/**
 * solution 2 -- recursive
 * time: O(log n)
 * space: O(log n)
 * 
 * @param {number[]} arr 
 * @param {number} target 
 * @returns {number}
 */
function binarySearch(arr, target, startIndex = 0, endIndex = arr.length - 1) {
    const midPoint = Math.floor((startIndex + endIndex) / 2);

    if (arr[midPoint] === target) {
        return midPoint;   
    } else if (endIndex - startIndex === 0) {
        return -1;
    } else if (arr[midPoint] < target) {
        return binarySearch(arr, target, midPoint + 1, endIndex);
    } else if (arr[midPoint] > target) {
        return binarySearch(arr, target, startIndex, midPoint);
    }
}

module.exports = { binarySearch };