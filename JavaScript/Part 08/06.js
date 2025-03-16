// spread : ... : expand and iterable into multiple individual value
// iterable : array, string, map, set, etc

console.log(Math.max(1, 2, 3, 4, 5, 6));

//  but what is there is array

let arr = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...arr));

// to print indicidual values of a array
console.log(...arr);
console.log(arr);

console.log("========================================");

// concatenating arrays
let arr2 = [9, 8, 8, 7, 4, 5, 6, 3, 2, 1];
let newMixArray = [...arr2, ...arr];
console.log(newMixArray);

console.log("=======================================");

let new_direct = [arr, arr2];
console.log(new_direct);

// above both array mixing has different as first one is creating new array with elements of both array
// but the second one is creating new array with array eleement as two different array

console.log("=======================================");

// spread with object literals

const obj = {
    email: "akdk2004@gmail.com",
    pass: 1234
};

const copyObj = { ...obj, id: 123 };
console.log(copyObj);

// spread with arrays with single element conversion in object literals

let array3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let copyarr = { ...array3 };
console.log(copyarr);