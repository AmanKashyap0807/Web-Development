// express need to require first
const express = require('express');

// express is a funtion which return different methods in the form of one object
const app = express();

// object.keys() : used to see the keys of object
// console.log(Object.keys(app));

// Port ?? a server in localhost for handeling requests
const port = 3000;
app.listen(port, () => {
    // call back function
    console.log(`Server is running on port ${port}`);
});
// Server is running on port 3000
// this above will show that the port is now listening for requests

// note : while u open localhost:3000 in browser, it will show the default page of express
// any other localhost which is not running will show unable to get localhost

// for practicing we will be using hoppscotch for sending requests
// hoppscotch is a web based API testing tool
// but it can not send requests to localhost
// so we will use chrome extension of hoppscotch
// https://chromewebstore.google.com/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld?pli=1

// below is the way to handle requests
app.use((req, res) => {
    // req and res are default parameters
    console.log("request received");
    // ------------------------------------
    // res is a response object which will contain all the information about the http response
    // we can refer to documentation express.js web -> api refrences -> <here the methods will be>
    res.send("Can u see the response");
    // check by going to localhost or using hoppscotch
    // string will be converted to text, object/array : json
    // we can also send html, image, file, etc
    // go to n02.js
});
// Server is running on port 3000
// request received
// request received
// request received
// .......

// express convert any request in the form of object
// req is a request object which will contain all the information about the http request

