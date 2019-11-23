// jshint esversion: 6
// all easily use array.every
let all = (arr, func) => arr.every(func);
// Test: console.log(all([2, 4], item => item % 2 == 0));

// use reduce to count the occurences of a value
const countOccurrences = (arr, val) => arr.reduce((a, v) => v === val ? a + 1 : a, 0);

console.log(countOccurrences('williams'.split(""), ''));