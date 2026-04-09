// What Are Template Literals, and What Is String Interpolation?

const Name = "Aman";
const age = 22;
let sentence = `My name is ${Name} and I am ${age} year old`;
console.log(sentence);

// embedding of variabls in string is known as string Interpolation
// for this we use backticks instead of single and double quotes

let poem = `Roses are red,
Violets are blue,
Javascript is fun,
And so are you`;
console.log(poem);

// above is the another benefit of template Literals where we do not need to directly write \n for line break,
// instead we directly write the string with line break and it keeps the format as it is

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${(score / highestScore) * 100}%.`;
console.log(output);

// another feature is that we can embed Javascript expression(formula->which will directly rendere the result) directly withing the string

