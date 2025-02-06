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

// Array method

// push() : add element at the end of array
students.push('Jenny');

// pop() : remove element from the end of array
students.pop();

// but what if we want to do it in start of the array

// unshift() : add element at the start of array
students.unshift('Jenny');

// shift() : remove element from the start of array and return that element
let stu = students.shift();
// also the first element is removed from the array

let fav = ['badminton', 'talking', 'travelling', 'coding'];
// indexOf() : return the index of the element in the array
let ind = fav.indexOf('coding');  //3
// -1 if element is not present
// remember indexOf() is case sensitive

// includes() : return true if element is present in the array
console.log(fav.includes('coding'));
console.log(fav.includes('ladkiBaji'));

// concat() : concate two arrays and return it
let primary = [1, 2, 3];
let secondary = [4, 5, 6];
console.log(primary.concat(secondary));

// reverse() : reverse the array
let seque = [1, 2, 3, 4, 5];
console.log("reverse of 1,2,3,4,5 is : ", seque.reverse());

// slice() : return the subarray from the array according to the given starting index as in string
console.log(seque.slice(1, 4));
// remember it does not include end index

// splice() : remove/replace/add elements in place : parameters (start, deleteCount, addElement1, addElement2, ...)
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// remember it will change in actual array
num.splice(7);
// for one input it will work as slice and remove all the elements after the given index
console.log(num);

num.splice(3, 2);
// remove 2 elements from index 5
console.log(num);

num.splice(3, 2, 10, 11, 12);
// remove 2 elements from index 3 and add 10, 11, 12
console.log(num);

// if we don't want to delete anything then we will pass 0 as second parameter

// sort() : sort the array of alphabets ( if number passed then it will fierst convert it into string and then sort)
let alpha = ['a', 'c', 'b', 'd'];
console.log(alpha.sort());
// it also short it in actual array

