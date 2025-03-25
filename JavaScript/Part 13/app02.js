// await keyword : used to wait for the promise to be resolved or rejected and then continue the execution
// it can only be used under a async funtion

// why are we using settimeout till Now
// its just for learning purpose because in real time every funtion take its time but we can't make that type in learning phase

function generateNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10);
            console.log(num);
            resolve();
        }, 1000)
    })
}

async function printNum() {
    // generateNum();
    // generateNum();
    // generateNum();
    // generateNum();
    // this above will print all the numbers at the same time after 1 second
    // but we want to print the numbers one by one after 1 second

    await generateNum();
    await generateNum();
    await generateNum();
    await generateNum();
}

printNum();