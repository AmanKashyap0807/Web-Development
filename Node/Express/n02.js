const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
    console.log("request received");
    const page = "<h1>Quote of the day</h1><p>You can controle yourself, only if u want to</p>";
    res.send(page);
    // check by going to localhost or using hoppscotch
});