document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('#overlay');
    const nameInput = document.querySelector('#name-input');
    const submitBtn = document.querySelector('#submit-name');
    let nameSpan = document.querySelector("span");

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