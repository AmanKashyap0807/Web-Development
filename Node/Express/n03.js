// ROUTING

const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// at a script only one route can be defined by any method, can not be overlapped with another method

app.get('/', (req, res) => {
    res.send("Welcome, You are in home/root directory");
})
// app.use(port, (req, res) => {
//     console.log("request received");
// });
// this above threee lines will not be run because at the root route already anothe mehtod working
// also if there is only get method then it will not work for post, put, delete, etc

app.get('/about', (req, res) => {
    res.send("Welcome, You are in about directory");
})

app.get('/contact', (req, res) => {
    res.send("Welcome, You are in contact directory");
})

app.get('/services', (req, res) => {
    res.send("Welcome, You are in services directory");
})

// access the different url, and u will get the different route response for different route

// What if the unknow root is accessed
app.get('*', (req, res) => {
    res.send("You dumb, you are in unknown route");
})

// we can also send post
app.post('/post', (req, res) => {
    res.send("Welcome, You are in post directory");
})