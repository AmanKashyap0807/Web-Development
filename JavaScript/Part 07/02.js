// Try - catch : error handling
// code will run till it gets a error but will not run codes after the error
// to notify about the error and then run the code after the error we use try-catch

console.log('Start');
try {
    console.log(a);
} catch {
    console.log('a is not defined');
}
console.log('End');

// catch will run it try does not execute

// we can also use the error as a var by setting a argument in catch 

console.log('\nStart 2');
try {
    console.log(b);
} catch (error) {
    console.log("error found");
    console.log(error);
}
console.log('End 2');
