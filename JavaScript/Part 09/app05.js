// classList property
// obj.classList : return the list of the all class names of the object
// obj.classList.add('className') : add the class name to the
// obj.classList.remove('className') : remove the class name from the object
// obj.classList.toggle('className') : if class name is there then remove it else add it
// obj.classList.contains('className') : check if class name is there or not

// sometimes we need to change a lot of a object so we make a classs with those changes in css
// and then we add that class to the object

// we can not use setattribute to chnage because it consider only one value of the aatribute

console.log("=====================================");

// parentElement property
// obj.parentElement : return the parent element of the object
// only one parent element is returned

// children property
// obj.children : return the children of the object
// it returns the HTMLCollection of the children

// childelementcount property
// obj.childElementCount : return the number of children of the object

// nextElementSibling property
// obj.nextElementSibling : return the next sibling of the object

// previousElementSibling property
// obj.previousElementSibling : return the previous sibling of the object

let me = document.querySelectorAll('div ul li');
console.dir(me);

console.log(`next subling of the me[1] is ${me[1].nextElementSibling}`);
console.log(`previous subling of the me[1] is ${me[1].previousElementSibling}`);
console.log(me[1].nextElementSibling);