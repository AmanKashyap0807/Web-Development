// Qs5. Write a JavaScript function to generate a random number within a range (start,
//     end).

// Qs5. Write a JavaScript function to generate a random number within a range (start,
//     end).

function getRandomNumber(start, end) {
    // Ensure start is less than end
    if (start > end) {
        [start, end] = [end, start]; // Swap values if start is greater
    }

    // Formula: Math.random() * (max - min) + min
    // Math.floor() to get integer
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Test cases
console.log(getRandomNumber(1, 10));    // Random number between 1 and 10
console.log(getRandomNumber(20, 30));   // Random number between 20 and 30
console.log(getRandomNumber(100, 200)); // Random number between 100 and 200

// Test with reversed parameters (should still work)
console.log(getRandomNumber(50, 25));   // Random number between 25 and 50