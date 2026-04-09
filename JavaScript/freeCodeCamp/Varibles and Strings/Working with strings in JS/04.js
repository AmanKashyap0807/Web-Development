// How Can You Find the Position of a Substring in a String?

let intro = `I am Aman, as the name suggest I am a man who never loose`;
let pos = intro.indexOf("man");
console.log(pos);

// To get the position of substring from a larger string use `indexOf(x,y)` method
// where x as a first argument takes the substring in string data type form
// and y is the search starting index 

let secondPos = intro.indexOf("man",7); //search begines after the 7th character
console.log(secondPos);

let notFound = intro.indexOf("love");
console.log(notFound);

// this above will give -1 as the substring does not exist in the larger string

// this method is case sensitive 