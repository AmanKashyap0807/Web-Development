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

    let count = 0;
    function taskAdd() {
        if (task.value.trim() !== "") {
            // Create elements
            let li = document.createElement("li");
            li.classList.add("task-item", "d-flex", "justify-content-between", "align-items-center", "mb-2");

            let div = document.createElement("div");
            div.classList.add(`task-${count}`, "task-text");
            div.textContent = task.value;

            let btn = document.createElement("button");
            btn.textContent = "Done!";
            btn.classList.add("btn", "btn-sm", "btn-outline-success", "ms-2", "done-btn");
            btn.style.marginLeft = "10px";

            // Correct way to append elements
            li.appendChild(div);
            li.appendChild(btn); // Button should be sibling of div, not inside it
            list.appendChild(li);

            // Clear input field
            task.value = "";
            count++;

        } else {
            alert("Please enter a task");
            return; // Don't continue if no task text
        }

        // Return to main view
        content.style.display = "block";
        inputPage.style.display = "none";
    }

    // Add task when button is clicked
    addBtn.addEventListener('click', taskAdd);

    // Add task when Enter key is pressed
    task.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            taskAdd();
        }
    });

    // Fix the event listener for Done buttons
    list.addEventListener('click', function (event) {
        // Check if the clicked element is a "Done" button
        if (event.target.classList.contains('done-btn')) {
            const taskDiv = event.target.previousElementSibling; // Get the task text div

            // Toggle strikethrough
            if (taskDiv.style.textDecoration === "line-through") {
                taskDiv.style.textDecoration = "none";
                taskDiv.style.opacity = "1";
                event.target.textContent = "Done!";
                event.target.classList.replace("btn-outline-secondary", "btn-outline-success");
            } else {
                taskDiv.style.textDecoration = "line-through";
                taskDiv.style.opacity = "0.7";
                event.target.textContent = "Undo";
                event.target.classList.replace("btn-outline-success", "btn-outline-secondary");
            }
        }
    });
})