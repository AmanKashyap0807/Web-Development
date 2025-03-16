// Desructuring : breaking the array without changing the array

let participanta = ["John", "Dom", "Aman"];
let [a, b, c] = participanta;
console.log(a);
console.log(b);
console.log(c);

console.log("========================================");

// mixturing the distructuring concept with rest

let participants = ["John", "Dom", "Aman", "Aksra", "Rahul"];
let [first, second, ...rest] = participants;
console.log(first);
console.log(second);
console.log(rest);
// REST WIll be a array which will contain rest of the participants names

console.log("========================================");

// object destructuring

const student = {
    name: "John",
    marks:
    {
        maths: 80,
        science: 90
    },
    class: 10,
    id: 123,
    pass: "akv0987656@"
};

let { id, pass } = student;
console.log(id);
console.log(pass);
// we can also set any other new key-value in object 