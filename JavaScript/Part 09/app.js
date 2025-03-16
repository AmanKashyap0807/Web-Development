// selecting object : getElementById
// getElementById is a method that is used to select an element by its id provided by document

// to get the element as as object
// let sp_img = document.getElementById("mainImg")

// to see the diffe method of object
// console.dir(sp_img)

// to manipulate the object
// sp_img.src="assets/creation_2.jpeg"

console.log("=====================================");

// getElementbyClassName

let oldy = document.getElementsByClassName("oldImg");
for (let i = 0; i < oldy.length; i++) {
    console.dir(oldy[i]);
}

// getElementbyClassName provide a HTMLCollection
// HTMLCollection is not an array
// it is a collection of objects

console.log("=====================================");

// getElementbyTagName
// provide HTMLCollection
let p_tagObj = document.getElementsByTagName("p");
for (let i = 0; i < p_tagObj.length; i++) {
    console.dir(p_tagObj[i]);
}
console.dir(p_tagObj);
setTimeout(() => {
    for (let i = 0; i < p_tagObj.length; i++) {
        p_tagObj[i].innerText = "Updated paragraph";
    }
}, 2000);

/*function greet(name, message) {
  console.log(`Hello ${name}, ${message}`);
}

// Passing arguments to the function
setTimeout(greet, 2000, "Aman", "hope you're enjoying JavaScript!");
*/