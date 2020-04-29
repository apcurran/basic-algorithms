function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            console.log("arr[i] is ", arr[i]);
            console.log("arr[j] is ", arr[j]);

            if (arr[i] > arr[j]) {
                let temp = arr[i];

                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(selectionSort([5, 6, 1, 10, 3]));