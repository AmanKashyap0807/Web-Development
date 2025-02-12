// code for a dice to generate random numbers

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}
console.log(rollDice());