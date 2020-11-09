// Option 1
function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                // Swap elements
                console.log("Current array order:", arr);
                console.log(`${arr[i]} is greater than ${arr[j]}, so swap them.`);
                let temp = arr[i];

                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

// Option 2
// function selectionSort(arr) {
//     const len = arr.length;

//     for (let i = 0; i < len; i++) {
//         let minIndex = i;

//         for (let j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }

//         }

//         if (i !== minIndex) {            
//             // swap elements
//             // console.log(`arr[i] val: ${arr[i]} arr[minIndex] val: ${arr[minIndex]} swap`);
//             let temp = arr[i];
    
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }

//     return arr;
// }

console.log(selectionSort([5, 6, 4, 1, 10, 3]));