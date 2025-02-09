// For of loop
let friends = ["John", "Jane", "Jack", "Jill"];

for (i of friends) {
    console.log(i);
}

console.log("\n");

for (i of friends) {
    console.log(i[0]);
}

console.log("\n");

for (i of "Yellow") {
    console.log(i);
}

// it can also be used for nested loop