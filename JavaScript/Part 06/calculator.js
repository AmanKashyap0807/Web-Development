// Method : defining different function of a object
// like string provide push, pop, shift, unshift, etc

let calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    }
};

console.log(calculator.mul(19, 7));

// shorthand for object method definition
let calculator2 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    }
};

console.log(calculator2.mul(19, 7));