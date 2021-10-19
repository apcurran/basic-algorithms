const { bubbleSort } = require("./bubble-sort");

describe("bubble sort", () => {
    test("returns a sorted array in ascending order", () => {
        expect(bubbleSort([6, 2, 1, 3, 12, 5, -2])).toEqual([-2, 1, 2, 3, 5, 6, 12]);
    });

    test("returns a sorted array in ascending order", () => {
        expect(bubbleSort([-2, 0, 3, 1, 6])).toEqual([-2, 0, 1, 3, 6]);
    });
});