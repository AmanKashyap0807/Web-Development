let sample = ["aman" + "akash" + "farhan" + "agam"];
console.log(sample);
let ans = "";
function concat_strings(sample) {
    for (let i = 0; i < sample.length; i++) {
        ans = ans + sample[i];
    }
    return ans;
}

console.log(concat_strings(sample));