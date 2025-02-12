let randomNumber = 0;

document.getElementById("setMaxBtn").addEventListener("click", () => {
    let max = parseInt(document.getElementById("maxInput").value) || 100;
    randomNumber = Math.floor(Math.random() * max) + 1;
});

document.getElementById("guessBtn").addEventListener("click", () => {
    let guess = parseInt(document.getElementById("guessInput").value) || 0;
    let message = document.getElementById("message");
    if (guess === randomNumber) {
        message.textContent = "Correct!";
    } else if (guess > randomNumber) {
        message.textContent = "Too high!";
    } else {
        message.textContent = "Too low!";
    }
});