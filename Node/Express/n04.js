// PATH PARAMETERS
// Path parameters are named URL segments that are variable and used to capture values at specific positions in the URL.
// like insta has different routs for differetns userd so there is just a variable which is opening that route for that specific user

const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send("Welcome, You are in home/root directory");
});
app.get('/about', (req, res) => {
    res.send("Welcome, You are in about directory");
});

app.get('/contact', (req, res) => {
    res.send("Welcome, You are in contact directory");
});

app.get('/services', (req, res) => {
    res.send("Welcome, You are in services directory");
});

app.get('/user', (req, res) => {
    res.send("Welcome, You are in user directory");
});

// for showing that threre is a variable in the route/url we use collon
app.get('/user/:id', (req, res) => {
    // id is our variable, and the user will be giving its value and for that value it will open the route
    console.log("you entered in variable route")
    res.send(`Hey, this is the user with id ${req.params.id}`);
});