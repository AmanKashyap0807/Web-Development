// Array : linear collection of similar objects
let students = ['John', 'Jane', 'Jack', 'Jill', 'James'];
console.log(students);

// type of array is object

// unlike c++ here we can store different types of data in array
let mixedArray = ['John', 25, true, null, undefined];
console.log(mixedArray);

// length of array
console.log(students.length);

// double squre bracket access
students[0][0]; // J

// arrays are mutable
students[0] = 'Johnny';
console.log(students);