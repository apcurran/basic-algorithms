function mergeSort(numsArr) {
    if (numsArr.length <= 1) return numsArr;

    const sortedArr = [...numsArr];
    const length = sortedArr.length;
    const middle = Math.floor(length / 2);
    const left = sortedArr.slice(0, middle);
    const right = sortedArr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

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

module.exports = { mergeSort };