

// The JavaScript might be running before the <body> element is fully loaded.
//  While this is less of an issue these days,
//  it's good practice to ensure the DOM is fully loaded before manipulating it.

document.addEventListener('DOMContentLoaded', function () {
    // Create a new paragraph element
    let p = document.createElement('p');

    // Set the text and style of the paragraph
    p.innerText = "Hey I am red";
    // Append the paragraph to the body
    let body = document.querySelector('body');
    body.appendChild(p);

    p.classList.add('red');

    let h3 = document.createElement('h3');
    h3.innerText = "Hey I am blue";
    body.appendChild(h3);
    h3.style.color = 'blue';

    let box = document.createElement('div');
    box.style.border = '1px solid black';
    box.style.backgroundColor = 'pink';
    body.append(box);

    let h1 = document.createElement('h1');
    h1.innerText = "Hey I am in a Div";
    box.appendChild(h1);
});