// /**
//  * Solution 1
//  * 
//  * @param {number[]} numsArr 
//  * @returns {number[]}
//  */
// function mergeSort(numsArr) {
//     if (numsArr.length <= 1) return numsArr;

//     const middle = Math.floor(numsArr.length / 2);
//     const left = numsArr.slice(0, middle);
//     const right = numsArr.slice(middle);

//     return merge(
//         mergeSort(left),
//         mergeSort(right)
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
//  * @param {number[]} leftArr - sorted arr
//  * @param {number[]} rightArr - sorted arr
//  * @returns {number[]}
//  */
// function merge(leftArr, rightArr) {
//     let resultArr = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
    
//     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//         const leftElem = leftArr[leftIndex];
//         const rightElem = rightArr[rightIndex];

//         if (leftElem < rightElem) {
//             resultArr.push(leftElem);
//             leftIndex++;
//         } else {
//             resultArr.push(rightElem);
//             rightIndex++;
//         }
//     }

//     return [...resultArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
// }

/**
 * Solution 3 -- refactored
 * time: O(n * log n) -- full array iterations for log n total stack frames on the callstack
 * space: O(n * log n) -- array.slice() calls add to O(n) for log n total stack frames on the callstack
 * 
 * @param {number[]} numsArr 
 * @returns {number[]}
 */
function mergeSort(numsArr) {
    if (numsArr.length <= 1) return numsArr;

    const middleIndex = Math.floor(numsArr.length / 2);
    const leftArr = mergeSort(numsArr.slice(0, middleIndex));
    const rightArr = mergeSort(numsArr.slice(middleIndex));

    return merge(leftArr, rightArr);
}

/**
 * @param {number[]} leftArr
 * @param {number[]} rightArr
 * @returns {number[]}
 */
function merge(leftArr, rightArr) {
    let leftIndex = 0;
    let rightIndex = 0;
    let results = [];
    
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftElem = leftArr[leftIndex];
        const rightElem = rightArr[rightIndex];

        // add smaller number to results array first -- this comparison allows for the ASC sort
        if (leftElem < rightElem) {
            results.push(leftElem);
            leftIndex++;
        } else {
            results.push(rightElem);
            rightIndex++;
        }
    }

    // exhaust left array leftovers
    while (leftIndex < leftArr.length) {
        results.push(leftArr[leftIndex]);
        leftIndex++;
    }
    // exhaust right array leftovers
    while (rightIndex < rightArr.length) {
        results.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return results;
}

module.exports = { mergeSort };