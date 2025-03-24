function changeColor(color) {
    return new Promise((resolve, reject) => {
        // changeColor funtion is promising for resolve or reflex under certain condition
        setTimeout(() => {
            document.querySelector('div').style.backgroundColor = color;
            console.log(`Color changed to ${color}`);
            resolve();
        }, 1000);
    })
}

changeColor('red')
    .then(() => changeColor('green'))
    .then(() => changeColor('blue'))
    .then(() => changeColor('orange'))
    .then(() => changeColor('purple'))
    .then(() => changeColor('yellow'))
    .then(() => changeColor('black'))
    .then(() => changeColor('white'))
    .then(() => {
        console.log('Color sequence complete');
    })
    .catch(error => {
        console.error('Error in color change:', error);
    });