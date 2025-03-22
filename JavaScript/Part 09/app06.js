// creation of new element for page
// first step is to create the element and then add the element to the page
// document.createElement('elementName') : create the element
// this element can be any tag like div, h1, p, a etc

// parent_obj.appendChild(child_obj) : add the child object to the parent object
// this will add the child object at the end of the parent object

// obj.append : it is mostly used because it can append new element, object, text etc

// above method are used to add the element at the end of the parent object
// obj.prepend : it is used to add the element at the start of the parent object

// most flexible method
// obj.insertAdjacentElement('position', element) : add the element at the specified position
// position can be beforebegin, afterbegin, beforeend, afterend
// beforebegin : before the element itself
// afterbegin : just inside the element, before its first child
// beforeend : just inside the element, after its last child
// afterend : after the element itself

// beforebegin
// afterbegin <para> beforeend
// afterend

console.log("=====================================");

// obj.remove() : remove the object from the page
// obj.removeChild(child) : remove the child object from the parent object