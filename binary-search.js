"use strict";

/**
 * @param {number[]} arr 
 * @param {number} target 
 * @returns {number}
 */
function binarySearch(arr, target) {
    let endIndex = arr.length - 1;
    let startIndex = 0;
    let middleIndex = 0;

    while (startIndex <= endIndex) {
        middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (arr[middleIndex] === target) {
            // Target was found at middleIndex
            return middleIndex;
        } else if (arr[middleIndex] < target) {
            // Search the right side of the array
            startIndex = middleIndex + 1;
        } else {
            // Search the left side of the array
            endIndex = middleIndex - 1;
        }
    }

    // If target is not found at all.
    return -1;
}

module.exports = { binarySearch };