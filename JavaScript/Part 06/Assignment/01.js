// Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function largerThan(arr, num) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

const numsGreaterN = largerThan(arr, 9);
console.log(numsGreaterN);