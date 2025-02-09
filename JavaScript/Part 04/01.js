//  For loop : same as in c++
for (let i = 5; i < 51; i += 5) {
    console.log(i);
}
// scope of i is limited to the loop only

console.log("\n");

for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}

console.log("\n");

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// infinite loop
// loop with no condition or codintion which is always true
// hang the web page because it takes the complete memory

// let n = parseInt(prompt("Hey lazy user, enter a number"));
// let count = 10;
// for (let i = n; count > 0; i = i + n, count--) {
//     console.log(i);
// }
// The error occurs because prompt() is not defined in Node.js. It is a browser-based function. 

console.log("\n");

// Nested loop
// code to create star pattern
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}