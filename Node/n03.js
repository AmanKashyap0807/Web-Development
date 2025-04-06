// let suppose there is some info/funtion which i have to export to a file by another

// two step process : first write the data in file which is going to be exported by using module.exports = ...
// second is to get it in another file by using require("<file path>")
// the above return a object which the info exported and mentioned in that file

// we have made samepleForN03 file for practicing here

let message = require("./sampleForN03.js");
console.log(message);
console.log(message.g);
console.log(message.pi);
console.log(message.sum(10, 20));

console.log(message.greet("shailu"));
console.log(message.div(10, 5));

