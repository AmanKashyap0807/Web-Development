// there are event listeners for keyboard event
// same as for mouse just use keyboard event name instead mouse event name
// keydown, keyup, keypress

// addEventListener include bydefault a argument named event which is a object that contains all the information about the event
// for keyboard key and its code is important which is event properties bydefault given by addEventListener

let inp = document.querySelector('input');
inp.addEventListener("keydown", function (event) {
    console.log(event);
});

// key include the pressed value
// code include the code of the pressed key

inp.addEventListener("keydown", function (event) {
    console.log(event.key);
    console.log(event.code);
});

// both are very important to design the program

