"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
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

// /**
//  * solution 2
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} arr 
//  * @returns {number[]}
//  */
//  function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // swap
//                 const temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

//     return arr;
// }

module.exports = { bubbleSort };