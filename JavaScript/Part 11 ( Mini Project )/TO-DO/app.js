document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('#overlay');
    const nameInput = document.querySelector('#name-input');
    const submitBtn = document.querySelector('#submit-name');
    let nameSpan = document.querySelector("span");
    let content = document.querySelector('#content');

    nameInput.focus();

    function showContent() {
        const name = nameInput.value.trim();

        if (name != "") {
            nameSpan.textContent = name;
        } else {
            nameSpan.textContent = "User";
        }

        overlay.style.display = "none";
        content.style.display = "block";
    }

    submitBtn.addEventListener('click', showContent);
    nameInput.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            showContent();
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    let content = document.querySelector('#content');
    let inputPage = document.querySelector('#taskInput');
    let addBtn = document.querySelector(".addTaskBtn");
    const addtrans = document.querySelector(".plusBtn");
    const task = document.querySelector("#task");
    let list = document.querySelector("#list ul");

    addtrans.addEventListener('click', function () {
        content.style.display = "none";
        inputPage.style.display = "flex"
        task.focus();
    });

    function taskAdd() {
        let li = document.createElement("li");
        li.textContent = task.value
        list.appendChild(li);
        task.value = "";
        content.style.display = "block";
        inputPage.style.display = "none";
    }

    addBtn.addEventListener('click', taskAdd);
    task.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            taskAdd();
        }
    })
})