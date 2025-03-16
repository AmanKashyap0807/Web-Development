// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers 
// and returns the average of those numbers.

let arrayAverage = (arr) => {
    let sum = 0;
    arr.forEach(element => { sum += element });
    return sum / arr.length;
};

let arr = [1, 2, 3, 4, 5];
console.log(arrayAverage(arr));