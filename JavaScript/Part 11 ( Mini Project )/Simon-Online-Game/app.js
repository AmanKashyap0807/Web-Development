document.addEventListener('DOMContentLoaded', function () {
    let count = 1;
    let gamePattern = [];
    let userClickedPattern = [];
    let buttonColours = { 'red': 0, 'green': 1, 'yellow': 2, 'blue': 3 };
    let level = document.querySelector('h2');


    while (gamePattern === userClickedPattern) {
        level.textContent = 'Level ' + count;
        let randomN = Math.floor(Math.random() * 3);
        gamePattern.push(randomN);

        let blinkBox = document.querySelector(`#div${randomN + 1}`);
        let color = blinkBox.getAttribute('style');
        blinkBox.style.backgroundColor = 'white';
        setTimeout(() => {
            blinkBox.style.backgroundColor = color.backgroundColor;
        }, 1000)


    }
});