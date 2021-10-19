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

module.exports = { bubbleSort };