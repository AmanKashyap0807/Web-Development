// write a arrow function which return the squre of n

let sqr = n => n * n;
console.log(sqr(13));


// write a function that prints Hello World! 5 times at intervals of 2 sec each

const id = setInterval(() => {
    console.log('Hello World!');
}, 2000);
// setTimeout(clearInterval(id), 10000);
// this above line code is wrong as setTimeout() expects a function as the first argument, but we are passing the return value of clearInterval(id) which is undefined.

setTimeout(() => {
    clearInterval(id);
}, 11000);