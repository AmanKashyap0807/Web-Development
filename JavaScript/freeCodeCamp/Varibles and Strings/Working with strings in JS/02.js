// Newline and Escape strings

// \n -> escape sequence for new line
let quote = "A small size can cast\nA very long shadow."
console.log(quote);

// let suppose we want to show the predefined special character in output 
// like quotes, backslases or anythign already deserved keyword
// direcly using them like below will throw error
// let intro = "Hi there, "A man" this side."
// use backslash before those special character to make them literal
let intro = "Hi there, \"A man\" this side."
console.log(intro);

let esc = "this is escape sequence \\n , used to get new line ";
console.log(esc);

let qut = 'It\'s a beautiful day!';
console.log(qut);