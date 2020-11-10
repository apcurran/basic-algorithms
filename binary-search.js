"use strict";

function binarySearch(arr, target) {
    let endIndex = arr.length - 1;
    let startIndex = 0;
    let middleIndex = 0;

    while (startIndex <= endIndex) {
        middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (arr[middleIndex] === target) {
            console.log("Target was found at index", middleIndex);
            return arr[middleIndex];
        } else if (target > arr[middleIndex]) {
            console.log("Searching the right side of the array...");
            startIndex = middleIndex + 1;
        } else if (target < arr[middleIndex]) {
            console.log("Searching the left side of the array...");
            endIndex = middleIndex - 1;
        } else {
            console.log("Not found during this iteration. Looping again.");
        }
    }

    // If target is not found at all.
    return "Target value was not found in the provided array.";
}

const myArr = [1, 5, 12, 53, 74, 143]; // Sorted array
console.log(binarySearch(myArr, 12));