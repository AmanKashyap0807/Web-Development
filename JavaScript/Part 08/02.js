// map() : same as forEach() but it returns a new array with the same length and each element applied the funtion

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

let st_name = student.map(ele => ele.name);
console.log(st_name);

console.log("========================================");

let gpa = student.map(ele => {
    let max = Math.max(...student.map(e => e.marks));
    return (ele.marks / max) * 10;
});
console.log(gpa);