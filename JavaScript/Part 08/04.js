// Every() : return true if all elements in the array satisfy the condition of callback function

console.log([2, 4, 6].every(ele => {
    return ele % 2 == 0;
})
);

// to eplement logical or we can use some() funciton which will return true if any one element satisfy the condition of callback function
console.log([1, 4, 11].some(ele => {
    return ele % 2 == 0;
})
);