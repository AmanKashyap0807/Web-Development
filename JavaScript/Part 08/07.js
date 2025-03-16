// Rest(): opposite of spread and symboll is same
// while used in funciton it will take all the arguments and put them in a array

let sum = (...args) => {
    let res = 0;
    args.forEach(ele => {
        res = res + ele;
        return res;
    })
    return res;
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sum(6541816, 615465, 641, 6518789));

console.log("========================================");

// default argument variable made by js

function min(a, b, c, d) {
    console.log(arguments);
};

// this above will not show any error as by default the arguments variable take the value of args for any call
min(1, 2, 3, 4);
min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);