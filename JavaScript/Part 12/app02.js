// callback funtion : function passed as an argument to another function
// JS Single threaded nature : at a time only one funtion will be executed

// Problem with JS single threaded nature :
// Blocking code : if a function takes a long time to execute, then the next function will not be executed

// solution : use of setTimeout or setinterval or callfunction
// setTimeout or setinterval will wait for perticular time till the further code will be executed
// if more then one settimeout funtion start execution on same time then it will be executed at once ( multithreading )
// but js is single threaded how will it do multithreading
// answer : js has web api which will handle the multithreading
// web api : browser api which will handle the multithreading

// c++ and java are multi-threaded languages

setTimeout(() => {
    const time1 = new Date();
    console.log(time1.toLocaleTimeString());
    console.log('1');
}, 2000);

setTimeout(() => {
    const time2 = new Date();
    console.log(time2.toLocaleTimeString());
    console.log('2');
}, 2000);

const time3 = new Date();
console.log(time3.toLocaleTimeString());
console.log("line after set timeout funtion");

// How does setTimeout work?
// js does not take setTimeout responsibility and give it to web browser
// web browser is written in c++ type languages which are multithreaded
// when compiler reach to setTimeout funtion line it give it to browser
// browser wait for the delay
// when time completed browser push it to top of the call stack

// How does setinterval work?

// this aboce is asynchronous js where there is no sequence
// for normal js code where code execution happenes line by line known as synchronous js

