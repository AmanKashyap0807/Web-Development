// Qs2. Write a JavaScript function to extract unique characters from a string. 
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

let str = "abcdabcdefgggh";

function uniqueChar(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) == i) {
            ans = ans + str[i];
        }
    }
    return ans;
}

console.log(uniqueChar(str));