// Object literals : used to create object with key-value pairs

// we generally use const for creation of object literals
const coder = {
    // const means the reference of coder is same means the adderess saved on the coder is constant but the value can be changed
    name: "Aman",
    age: 20,
    isCoder: true,
    languages: ["Python", "JavaScript", "Java"],
};

console.log(coder);
// we use key to access value
// it can also make array into it

// object literals for the post/thread
const post = {
    username: "amanmelodious",
    content: "I am learning JavaScript",
    like: 999999999
};

// accessing value
// obj["key"] or obj.key
console.log(post.username); // we can not use dot operator if we have a variable key
console.log(post["content"]);

// javascript automatically converts the key into string
// while accessing js first convert the key into string and then find the valuedd

const obj = {
    1: "Aman",
    2: "Aman",
    3: "Aman",
    4: "Aman",
};

// console.log(obj.2); // it will give error because 2 is not a valid key, it should be a string
console.log(obj["2"]); // it will give output