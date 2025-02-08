// Array Reference
// whenever we create a array so it is stored in memory and the variable is just a reference to that memory location
console.log([1] == [1]); // false
console.log([1] === [1]); // false
// because both are stored in different memory locations

// here comes concept of reference where a variable is just a reference to the another variable 
let a = [1, 2, 3];
let b = a;
console.log(a == b); // true
// change in b will change the original array

"name" == "name"; // true
"name" === "name"; // true
// because both are stored in same memory location


// constant array
const arr = [1, 2, 3];
// arr = [1, 2, 3, 4]; // error
arr.push(4); // works
// it means that the name arr saves the address of array in memory location so that address/reference can not be chnage
// but the elements of array can be changed
// it means we can't reassign the array but we can change the elements of array


// Nested Array
let nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested[0][1]); // 2

// visualization of nested array
// it can be visualized as 2D array
// row = number of array present in the array
// column = number of elements present in the array of array