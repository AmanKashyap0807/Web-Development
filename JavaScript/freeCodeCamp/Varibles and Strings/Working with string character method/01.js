// What Is ASCII, and How Does It Work with charCodeAt() and fromCharCode()?
// Americal Standard Code of Information Interchange
// It is a character encoding standard used by computer to represent text, It assigns a numeric value to each character which is universally recognized by machines.

// Javascript strings uses Unicode UTF-16 internally.
// ASCII is a system for encoding characters such as letters, digits and symbols into numerical values.

// for example letter 'A' is represented by the number 65 in ASCII
// a->97

// ASCII standard cover 128 characters 
/*Uppercase and lowercase English letters (A-Z, a-z).
Numbers (0-9).
Common punctuation marks and symbols (!, @, #, and so on).
Control characters (such as newline and tab).*/

let letter = "A";
console.log(letter.charCodeAt(0));

// charCodeAt() -> used to get the UTF-16 code unit of the character, for the first 128 character it matches the ASCII code

let char = String.fromCharCode(65);
console.log(char);

// fromCharCode() -> provide the char corresponding to UTF-16 ASCII code

console.log(String.fromCharCode(123));

// Uses :
// charCodeAt() can be used to check Uppercase, lowercase or digit by comparing their ascii values