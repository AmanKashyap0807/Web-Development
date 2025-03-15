// setTimeout funtion : funtion used for execution of a code after a certain time
// its a window object function

const note = () => {
    console.log("Oh Its taking too much time");
};

setTimeout(note, 4000);
// above will make run the note funtion after 4000ms or 4s
console.log("End");
// end will execute first and then note will execute after
// its because setTimeout is a async function
// it will not stop the execution of the code

// mostly used for api calls and other async functions