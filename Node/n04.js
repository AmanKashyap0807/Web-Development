// Now we have to get indo from a folder of different js file
// for extracting the info from the folder sample folder we will create another new index.js file on that directory
// name must be index.js
// now we will just specify the folder name in the require and it will automatically get the index.js file

const heros = require("./sampleFolder");
console.log(heros);
console.log(`Our first and most powerful hero is ${heros[0].name}`);
console.log(`Our second hero is ${heros[1].name}`);