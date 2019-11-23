// jshint esversion: 6

// check if a number is even
const isEven = number => number % 2 === 0;
// check if a number is odd
const isOdd = number => number % 2 === 1;
// check if multiple of number
const isMultipleOf = (multiple, value) => value % multiple === 0;

/* arithmetic progression applied to array of numbers
(n(a1 + an)) / 2 
// n = number of terms; a1 = first int; an = last int
*/
const sumOfSequence = (arr) => (arr.length * (arr[0] + arr[arr.length - 1])) / 2;

console.log(sumOfSequence([2, 5, 8, 11, 14]));