function changeColor(color, callback) {
    setTimeout(() => {
        document.querySelector('div').style.backgroundColor = color;
        console.log(`Color changed to ${color}`);
        callback();
    }, 1000);
}

changeColor('red', () => {
    changeColor('green', () => {
        changeColor('blue', () => {
            changeColor('orange', () => {
                changeColor('purple', () => {
                    changeColor('yellow', () => {
                        changeColor('black', () => {
                            changeColor('white', () => {
                                console.log('Color sequence complete');
                            });
                        });
                    });
                });
            });
        });
    })
});

// Above is just example of function where we are using same type of call bavck funtion but its very complex with real life funtion
