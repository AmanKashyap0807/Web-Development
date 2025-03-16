// Manupulating attributes
// attributes are the properties of the elements like src, href, id, class etc

// obj.getAttribute('attributeName') : get the value of the attribute
// obj.setAttribute('attributeName', 'value') : set the value of the attribute

let second_h2 = document.querySelector('img');
console.log(second_h2.getAttribute('src'));
let count = 3;
let idInterV = setInterval(() => {
    if (count > 0) {
        console.log(count);
        count--;
    } else {
        console.log("Booooooooooooooooooooooooooooooooooooooom");
        second_h2.setAttribute('src', 'assets/creation_2.jpeg');
        clearInterval(idInterV);
    }
}, 1000);

// be careful while changin the id or class name of any object because the css file may be using that id or class name

console.log("=====================================");

// manipulating style
// obj.style.property : get the value of the style property
// obj.style.color
// obj.style.backgroundColor

// remember style attributes in css uses - to separate the words but in js it uses camelCase

let boxDiv = document.querySelector('.box');
let innerList = document.querySelectorAll('ul li ul li a');
// innerList.style.color = 'red';
// this above line will not run because stle applies on sigle object not a node list

for (let i = 0; i < innerList.length; i++) {
    innerList[i].style.color = 'red';
}
// remember style applies only on inline code of html not in css styling

