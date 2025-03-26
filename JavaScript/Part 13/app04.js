// Accessing Data from JSON

// JSON comes in the form of single string
// string to js object conversion

let jsonData = '{ "name": "Aman", "age": 25, "location": "Patiala" }';

console.log(jsonData); // string
console.log(JSON.parse(jsonData)); // object


console.log("-------------------------------------------------------------");

// js object to string conversion

let jsObj = JSON.parse(jsonData);
console.log(jsObj); // object
console.log(JSON.stringify(jsObj)); // string