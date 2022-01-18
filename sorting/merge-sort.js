/**
 * Solution 1
 * 
 * @param {number[]} numsArr 
 * @returns {number[]}
 */
function mergeSort(numsArr) {
    if (numsArr.length <= 1) return numsArr;

    const middle = Math.floor(numsArr.length / 2);
    const left = numsArr.slice(0, middle);
    const right = numsArr.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

/**
 * @param {number[]} left 
 * @param {number[]} right 
 * @returns {number[]}
 */
function merge(left, right) {
    let results = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

// /**
//  * Solution 2 -- slight variation
//  * 
//  * @param {number[]} numsArr 
//  * @returns {number[]}
//  */
// function mergeSort(numsArr) {
//     if (numsArr.length <= 1) return numsArr;

//     const middleIndex = Math.floor(numsArr.length / 2);
//     const leftArr = numsArr.slice(0, middleIndex);
//     const rightArr = numsArr.slice(middleIndex);

//     return merge(
//         mergeSort(leftArr),
//         mergeSort(rightArr)
//     );
// }

// /**
//  * @param {number[]} left 
//  * @param {number[]} right 
//  * @returns {number[]}
//  */
// function merge(left, right) {
//     let results = [];

//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             results.push(left.shift());
//         } else {
//             results.push(right.shift());
//         }
//     }

//     return [...results, ...left, ...right];
// }

module.exports = { mergeSort };