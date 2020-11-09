function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                // Remove element
                const temp = arr.splice(i, 1);
                // Re-insert element
                arr.splice(j, 0, temp[0]);
            }
        }
    }

    return arr;
}

console.log(insertionSort([5, 2, 10, 3, 7, 1]));