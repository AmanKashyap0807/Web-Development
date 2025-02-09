// To-Do list

let works = [];
while (true) {
    // add : for adding new work
    let inst = prompt("add for adding new work \n delete for deleting a work\nquit for quitting the program\nlist for showing to-dos");
    switch (inst) {
        case "add":
            let temp = prompt("Enter the work you want to add");
            works.push(temp);
            continue;
        case "delete":
            let t2 = prompt("Enter the work you want to delete");
            let idx = works.indexOf(t2);
            if (idx >= 0) {
                works.splice(idx, 1);
            }
            continue;
        case "quit":
            break;
        case "list":
            console.log("Your to-dos are:");
            for (let i of works) {
                console.log(i);
            }
            continue;
        default:
            continue;
    }
    break;
}