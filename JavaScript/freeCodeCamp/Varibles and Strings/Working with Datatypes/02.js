// How Does the typeof Operator Work, and What Is the typeof null Bug in JavaScript?

// typeof(x)
// x-> variable or value
// return a strinig of the type like "number"

let num = 1233;
console.log(typeof(num));

let value = null;
console.log(typeof(value));

// this above is example of typeof null Bug in JavaScript
// This is widely considered a bug in JavaScript, dating back to its early days. The reason for this behavior is rooted in the way JavaScript was originally designed.
// When the language was first implemented, values like null were represented as a special type of object, leading to this unexpected result.
// Unfortunately, this has become a part of the language, and while it's confusing, it's something you'll need to be aware of.

