// filter() : filter the array element based on the callback function and return the new array.
// arrray element which are satisfing the condition of callback function will be only passed in new array
// callback function must be returning true or false

let arr = [12, 431, 35, 234, 356, 23, 23, 35, 234, 46, 34, 46, 34, 34, 23, 57, 68, 45, 678, 456, 8745, 567, 45, 67, 35, 67, 45, 7, 74, 57, 56, 8774, 7574, 56, 421, 75];

let odd_ele = arr.filter(ele => {
    return ele % 2 != 0;
});

console.log(odd_ele);