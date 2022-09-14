const { mergeSort } = require("./merge-sort");

describe("merge sort", () => {
    test("returns a sorted array in ascending order", () => {
        expect(mergeSort([51, 2, 7, 5, 48, 101])).toEqual([2, 5, 7, 48, 51, 101]);
    });

    test("returns a sorted array in ascending order", () => {
        expect(mergeSort([32, 17, 56, 3])).toEqual([3, 17, 32, 56]);
    });
});