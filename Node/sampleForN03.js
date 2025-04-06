// there are different method for sending too
// first is direct sending the data
// module.exports = "Halva mat khao";

// second is Object creation then exporting for different funtion and info
const g = 9.8;
const pi = 3.14;
let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let obj = {
    g: g,
    pi: pi,
    sum: sum,
    sub: sub,
    mul: mul
}
module.exports = obj;

// or we can also directly equate the object to module.exports
// module.exports = {
//     g: g,....}

// we can also add the funtion of info directly in the module.exports as its a object itself
module.exports.div = (a, b) => a / b;
module.exports.greet = (name) => `Hello ${name}`;