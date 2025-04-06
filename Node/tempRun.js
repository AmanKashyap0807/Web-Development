const message = "Halva kha lo";

let count = 0;
const interval = setInterval(() => {
    console.log(message[count]);
    count++;
    if (count === message.length) {
        clearInterval(interval);
    }
}, 250, message);
