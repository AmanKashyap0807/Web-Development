// Object of Object literals

const skills = {
    aman: {
        language: ["Python", "C/C++", "JavaScript"],
        web: ["HTML", "CSS", "JavaScript"],
        database: ["MySQL", "MongoDB"]
    },
    aishwarya: {
        language: ["Python", "C/C++", "JavaScript"],
        web: ["HTML", "CSS", "JavaScript"],
        database: ["MySQL", "MongoDB"]
    },
    shaurya: {
        language: ["Python", "C/C++", "JavaScript"],
        web: ["HTML", "CSS", "JavaScript"],
        database: ["MySQL", "MongoDB"]
    }
};
console.log(skills);
console.log("\n");
console.log(skills.aman);
console.log("\n");
console.log(skills.aman.language);
console.log("\n");

// Array of object literals
const arr = [
    { name: "Aman", age: 20 },
    { name: "Aishwarya", age: 20 },
    { name: "Shaurya", age: 20 }
];
console.log(arr);
console.log("\n");
console.log(arr[0]);
console.log("\n");
console.log(arr[0].name);