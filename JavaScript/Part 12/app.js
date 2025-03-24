// stack : array with LIFO

// call stack : track the sequence of the function calls by using stack data structure

// visualize the following call stack code

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    return two() + one();
}

console.log(three());

// breakpoints : pause the code execution at a certain point and then go to next funtion call for debugging
// debugging : process of finding and fixing the bugs in the code
// both above funcationality are provided by the browser source code debugger