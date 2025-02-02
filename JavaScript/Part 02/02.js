//Unicode of characters ( Ascii value of javascript )
// a->starts from 61
// A-> starts from 41
// 0-> starts from 21


// comparison operators
// ==, ===, !=, !==, >, <, >=, <=
console.log('a' < 'b');

// it ignores the type of the variable
console.log(2 == '2');
// it will return true as the value is same
// here comes triple equal to comparison
console.log(2 === '2');
// it will return false as the type is different


// Conditional statement

// If statement syntax
// same as c++
let age = 18;
if (age >= 18) {
    console.log("You can drive");
}


// If else statement syntax
if (age >= 18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}


let color = "red";
if (color == 'red') {
    console.log("you fuckin stop");
}
else if (color == 'yellow') {
    console.log("ready to go");
}
else { console.log("stop"); }


// nested if else


// Logical expression
// Logical AND : && : both side must be true to return true
// Logical OR : || : atleast one side must be true to return true
// Logical NOT : ! : return negation of boolean



// Truthy and Falsy
// Everyhting in JS is boolean either true or farlse
//  0, empty string, null, undefined, Nan and false itself is false
// anotehr things are true including true



// Switch statement 
let name = "aman";
switch (name) {
    case "aman":
        console.log("yeah baby!");
        break;
    default:
        console.log("No baby!");
}