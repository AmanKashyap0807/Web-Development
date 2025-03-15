// setInterval : execute a funtion after a certain time interval again and again

console.log('Start');
let count = 0;
const note = () => {
    count++;
    console.log(`Its ${count}th time getting executed`);
};

setInterval(note, 2000);
console.log('starting');

// setInterval funtion contain its own unique id
// clearInterval : for stopping the setInterval funtion

let id = setInterval(note, 2000);
console.log('\nstarting-2');
clearInterval(id);