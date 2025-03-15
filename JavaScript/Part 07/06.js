// this keyword with arrow function
// for normal funtion using this will point to the instance of the object
// but with arrow funtion it will point to the calling object of the parent funtion

const student = {
    name: 'Aman',
    age: 21,
    sex: 'M',
    getthis: function () {
        console.log(this);
        // this will point to the instance of the object
    },
    get_this_with_arrow: () => {
        console.log(this);
        // this will point to the instance of the parent object with is the window object for our global object
        // this above is known as lexical scoping
    }
};

console.log(student.getthis());
console.log(student.get_this_with_arrow());