// String Methods

// Trim Method : Removes whitespace from both ends of a string, do not remove middle whitespaces.
let str = "   Hello World   ";
console.log(str.trim());
console.log(str);

// comment out below two lines
// let userName = prompt("Enter your name: ");
// console.log(userName.trim());

// remember it does not change in the original string, just return a new string with trimmed whitespaces.
// strings are immutable, so we can't change them directly, at any instance if we try so it make the copy of it as above happened,

// toLowerCase() : Converts a string to lowercase letters.
let str1 = "Hello World";
console.log(str1.toLowerCase());

// toUpperCase() : Converts a string to uppercase letters.
let str2 = "Hello World";
console.log(str2.toUpperCase());

// Methods with arguments

// indexOf() : Returns the index of (the position of) the first occurrence of a specified text in a string.
let str3 = "Please locate where 'locate' occurs!";
console.log(str3.indexOf("locate"));

// in case of absent letter/word it returns -1

// method chaining : we can chain multiple methods together.
let msg = "    helu aman       ";
console.log("Index of AMAN : ", msg.trim().toUpperCase().indexOf("AMAN"));

// str.slice(start_index,ending_index) : Extracts a part of a string and returns a new string.
let str4 = "Apple, Banana, Kiwi";
console.log(str4.slice(7, 13)); // Banana
// it does not include the ending index letter, it includes the starting index letter.

// only one input in slice method
console.log(str4.slice(7)); // Banana, Kiwi ( returns till the ending index )

// negative input in slice method
console.log(str4.slice(-2));
// the input will be converted to length-2 = 19-2 = 17 till ending index

// replace( word/letter_to_find, word/letter_to_replace ) : replaces the first occurrence of a specified value in a string.
let str5 = "I Love Coding";
console.log(str5.replace("Love", "Eat"));

// repeat() : Returns a new string with a specified number of copies of an existing string.
