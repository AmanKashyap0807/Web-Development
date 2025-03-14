// Qs3. Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

country = ["Australia", "Germany", "United States of America"]

function longestCountry(country) {
    let count = country[0].length;
    let ans = country[0];
    for (let i = 1; i < country.length; i++) {
        if (country[i].length > count) {
            count = country[i].length;
            ans = country[i];
        }
    }
    return ans;
}

console.log(longestCountry(country));