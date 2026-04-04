// string concatenation

// + operator directly join the string
let Name = "aman";
let lastName = 'kashyap';
console.log(Name + ' ' + lastName);
// disadvantage is that space should be managed manually

// add or append to an existing string
let developerName = "The Pro";
// we wanna append name aman
developerName += "Aman";
console.log(developerName);

// concat() method 
let fullName = Name.concat(' ',lastName," any other things to add");
console.log(fullName)
// str1.concat(str2,str3,str4.....)

// + : to concat few strings
// += : to modify a string by appending something
// concat() : to concat multiple strings