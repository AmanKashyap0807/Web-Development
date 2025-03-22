let btn = document.querySelector('button');

btn.addEventListener("click", function (event) {
    let ta = document.querySelector('textarea');

    let p = document.querySelector('p');
    p.innerText += ta.value;
})