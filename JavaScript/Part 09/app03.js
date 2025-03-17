// Manipulation of objects
// using preperties and methods

// mostly for manipulation of text 

// innerText : shows the visible text contained in the node
// innerHTML : shows the HTML markup content of the node
// textContent : shows the text content of the node (including hidden content)

let para = document.querySelectorAll('p');
console.log(para);
for (let i = 0; i < para.length; i++) {
    para[i].innerHTML = `This is paragraph number <b><u>${i + 1}</u></b>`;
}