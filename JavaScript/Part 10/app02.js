// in app.js the method mentioned only provide one funciton to add for a event

// for adding more then one funtion to any event we use addEventListener method
// syntax: element.addEventListener(event, callback_funtion, useCapture);
// we can create multiple event listen for a single object no limit

let btns = document.querySelectorAll('button');
let btn2 = btns[1];

function btnClicked() {
    console.log('2nd Button clicked');
}

btn2.addEventListener('click', btnClicked);

// let suppose we want to give a alert with it

btn2.addEventListener('click', function () {
    alert('2nd Button clicked');
});

// event listner fo double click
btn2.addEventListener('dblclick', function () {
    alert('2nd Button double clicked');
});

// click event is also for elements like para 