// reduce() : reduce the array in one single value by applying a function

let arr = [1, 2, 50, 4, 5];

let summ = arr.reduce((accumulator, ele) => {
    return accumulator + ele;
});
console.log(summ);
// accumulator is the value which is going to be finally returned by the reduce funciton
// it uses the iterative process to reduce the array in one single value

let maxy = arr.reduce((maxi, ele) => {
    if (ele > maxi) {
        maxi = ele;
    }
    return maxi;
});
console.log(maxy);

// it requre something to return to give it to accumulator of next iteration