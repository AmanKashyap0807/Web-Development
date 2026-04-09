// In Js string is a sequence of characters
// single/double quotes

let Name = "aman";
let lastName = 'kashyap';
console.log(Name + ' ' + lastName);
// if a string start with single quote then it must end with same

// string are immutable 
Name = "kanha";
console.log(Name);
// if a string is declared, it's characters can not be changed however we can still reassign string to it; 

Name[1]="b";
console.log(Name);
// that is why it's immutable