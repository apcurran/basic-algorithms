"use strict";

/**
 * @param {number[]} arr 
 * @returns {number[]}
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 destructuring to swap vals
            }
        }
    }

    return arr;
}

console.log( bubbleSort([6, 2, 1, 3, 12, 5, -2]) );