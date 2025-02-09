// While loop : same as in c++
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("\n");

// Favorite movie game
let favMovie = "marvel";
while (true) {
    let guess = prompt("Enter your favorite movie");
    if (guess == favMovie) {
        console.log("You guessed it right");
        break;
    }
    else if (guess == "quit") {
        console.log("You quit the game");
        break;
    }
    else {
        console.log("Try again");
    }
}