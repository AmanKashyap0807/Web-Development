// Array Methods
// forEach() : rakes a function as an argument and applies that function to each element of the array.

let arr = [1, 2, 3, 4, 5];
arr.forEach(ele => {
    console.log(ele);
});

console.log("========================================");

let student = [{
    name: "John",
    marks: 80
}, {
    name: "aman",
    marks: 100
},
{
    name: "aksra",
    marks: 33
}]

student.forEach((ele, ind) => {
    console.log(`${ind + 1} : ${ele.name} : ${ele.marks}`);
})