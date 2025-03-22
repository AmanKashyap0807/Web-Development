let btn = document.querySelector('button');
btn.onclick = changeColor;

function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red},${green},${blue})`;
    document.querySelector('div').style.backgroundColor = color;
    document.querySelector('h1').innerText = color;
    document.querySelector('h1').style.color = color;
}