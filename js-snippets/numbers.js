// jshint esversion: 6

// create an array of a range of numbers
// counting forwards or reverse
const rangeOfNumbers = (startVal, endVal) => {
    let numbers = [];
    if (startVal < endVal) {
        for (let i = startVal; i <= endVal; i++) {
            numbers.push(i);
        }
    } else if (startVal > endVal) {
        for (let i = startVal; i >= endVal; i--) {
            numbers.push(i);
        }
    }
    return numbers;
};
console.log(rangeOfNumbers(1, 10));