function sumToN(n, ans) {
    if (n <= 0) return ans; // base case
    return sumToN(n - 1, ans + n);
}

let x = sumToN(10, 0);
console.log(x);