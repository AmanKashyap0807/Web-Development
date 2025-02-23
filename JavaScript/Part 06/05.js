let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let c = parseFloat(prompt("Enter the third number:"));

function calculate_average(a, b, c) {
    return (a + b + c) / 3;
}

console.log(`${a}, ${b}, ${c} average is: ${calculate_average(a, b, c)}`);