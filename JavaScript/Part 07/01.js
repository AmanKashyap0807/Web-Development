// This - used to point a var of a instance of a object for its methods

const student = {
    name: 'Aman',
    age: 21,
    maths: 99,
    physics: 98,
    chemistry: 97,
    avg: function () {
        return console.log(`${this.name} has scored ${(this.maths + this.physics + this.chemistry) / 3} in average`);
    }
}

student.avg();

// By default higher level object is our windows object
console.log(this);
// above will show chrome/any browser window object