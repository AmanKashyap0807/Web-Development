// DOM events : events which can occur by user or browser

// incline event listen code : even code is written in html file
// do not prefer due to increase in the size of html file

// open inspect->console to see the output

let btn = document.querySelector('button');
console.dir(btn);
// on above command result there will be different things/property of btn
// most of the event will be going to start from on
// like onclick, onmouseover, onmouseout, onkeydown, onkeyup, onkeypress, onfocus, onblur, onsubmit, onreset, onselect, onchange, oncontextmenu, ondblclick, onmousedown, onmouseup, onmousemove, onmouseenter, onmouseleave, onmouseover, onmouseout, onresize, onscroll, onwheel, oncopy, oncut, onpaste, ondrag, ondragstart, ondragend, ondragover, ondragenter

// event property can be set to a function to perform some task on event occuring

btn.onclick = function () {
    console.log('Button clicked');
}

// we can also make the function and then add it to the event property
function btnClicked() {
    console.log('Button clicked');
}
btn.onclick = btnClicked; //here paranthesis is not used because we are not calling the function, we are just passing the reference of the function

// in case of multiple buttonn we use loop to add event perform function instead of doing one by one

// onmouseenter property is used to perform some task when mouse enters the element
btn.onmouseenter = function () {
    btn.style.backgroundColor = 'red';
}

btn.onmouseleave = function () {
    btn.style.backgroundColor = 'white';
}