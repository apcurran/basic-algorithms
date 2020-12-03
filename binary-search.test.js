const { expect } = require("@jest/globals");
const binarySearch = require("./binary-search");

test("returns index of 2 for input target of 12", () => {
    expect(binarySearch([1, 5, 12, 53, 74, 143], 12)).toBe(2);
});

test("returns -1 value if target is not present in the array", () => {
    expect(binarySearch([1, 2, 3, 4], 10)).toBe(-1);
});