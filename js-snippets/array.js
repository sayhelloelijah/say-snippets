// jshint esversion: 6
// all easily use array.every
const all = (arr, func) => arr.every(func);
// Test: console.log(all([2, 4], item => item % 2 == 0));

const some = (arr, func) => arr.some(func);
const addAll = (arr) => arr.reduce((a, b) => a + b);

// use reduce to count the occurences of a value
const countOccurrences = (arr, val) => arr.reduce((a, v) => v === val ? a + 1 : a, 0);

console.log(countOccurrences('williams'.split(""), 'i'));