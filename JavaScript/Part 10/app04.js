// there is a event on form of submit button names "submit"

let form = document.querySelector('form');
form.addEventListener("submit", function (event) {
    alert("Are you sure!");
    event.preventDefault();
})

// to prevent any default action of the tag we can ue the preventDefault() method of form


console.log("-----------------------------------------------");

// accessing the input of the form
// we select the input tag and the valur propertie of it contain it

form.addEventListener("submit", function (event) {
    let inp = document.querySelector("form input");
    console.log(inp.value);
})

// same can be done with any other input things like username passw

// form also has a beautigul propertie names elements which contain all the elements of the form

console.log("-----------------------------------------------");

// change : it is also a type of event that is triggered when the value of the input is changed by the user like
// typing something in the input field or selecting something from the dropdown
// because firstly the typing event was occuring but now not happening
// it is also triggered when the value of the input is changed by the program


// input : it is also a type of event that is triggered when the value of the input is changed by the user like
// it include even a small change in the input field like typing a and the m then the event will be triggered
// non character key does not operate it

