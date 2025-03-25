// Rejection with await : if any await funtion throw error or rejection then the execution will be stopped
// so we handle these situation with try and catch  code

function generateNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10);
            if (num <= 6) reject("number rejected");
            console.log(num);
            resolve();
        }, 1000)
    })
}

async function printNum() {
    try {
        await generateNum();
        await generateNum();
        await generateNum();
        await generateNum();
    } catch (err) {
        console
        console.log(`Error: ${err} solved`);
    }
    // you might be wrong here thinking : if any of one from four throw error the catch will be executed then the code execution will 
    // start from the next line of the catch, this will not got to the next line of code where error was generated

    console.log("hurrah! code completed");
}

printNum();