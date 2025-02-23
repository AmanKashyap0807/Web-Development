// High order function
// Function takes one or more funciton as arguments with another arguments

function func() {
    console.log("You can do it");
}

function printRepeat(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

printRepeat(func, 12);