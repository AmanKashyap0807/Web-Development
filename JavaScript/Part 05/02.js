// Add in object literals
const skill = {
    language: ["Python", "C/C++", "JavaScript"],
    web: ["HTML", "CSS", "JavaScript"],
    database: ["MySQL", "MongoDB"],
    framework: ["Django", "React", "Node.js"],
};

// update value to the existing key
skill.framework.push("Bootstrap");
console.log(skill.framework);

skill.language = "nothing";
console.log(skill.language);

// creation of new key value pair
skill.isChutiya = true;
console.log(skill.isChutiya);

// deleting any key value pair
delete skill.isChutiya;
console.log(skill);