console.log(process.argv);

// PS D:\Web-Development\Node> node temp2.js
// Debugger listening on ws://127.0.0.1:58444/7afb1802-7f8b-49fa-af10-fd11541ff94b
// For help, see: https://nodejs.org/en/docs/inspector
// Debugger attached.
// [
//   'C:\\Program Files\\nodejs\\node.exe', //this is executable path of node
//   'D:\\Web-Development\\Node\\temp2.js' //this is path of the file
// ]
// mostly we ignore these two values


// PS D:\Web-Development\Node> node temp2.js halwa khoge kya
// Debugger listening on ws://127.0.0.1:58681/a9c70628-5026-47e1-a076-ecde3c61e887
// For help, see: https://nodejs.org/en/docs/inspector
// Debugger attached.
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Web-Development\\Node\\temp2.js',
//   'halwa',
//   'khoge',
//   'kya'
// ]

// we can save the sent arguments 
let args = process.argv;
console.log(`The sent arguments are:`);
for (let i = 2; i < args.length; i++) {
    console.log(args[i]);
}