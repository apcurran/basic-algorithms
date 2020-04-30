function bubbleSort(arr) {
    
    do {
        var changed = false;

        for (let i = 0; i < arr.length; i++) {
            // Is the current num greater than the next num?
            if (arr[i] > arr[i + 1]) {
                // Then, swap both nums.
                let temp = arr[i];

                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                changed = true;
            }
        }
    } while (changed); // Keep swapping until changed is false.

    return arr;
}

console.log(bubbleSort([4, 2, 1, 6, 88, 12, 14, 7]));