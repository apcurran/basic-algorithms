function quickSort(numsArr) {
    if (numsArr.length <= 1) return numsArr;

    const sortedArr = [...numsArr];
    const pivot = sortedArr[sortedArr.length - 1] // Last element
    let left = [];
    let right = [];

    for (let i = 0; i < sortedArr.length - 1; i++) {
        const currentNum = sortedArr[i];

        if (currentNum < pivot) {
            left.push(currentNum);
        } else {
            right.push(currentNum);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([2, 1, 4, 3, 6]));