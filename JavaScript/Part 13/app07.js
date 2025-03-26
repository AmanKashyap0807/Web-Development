// requesting of API data
// fetch is used with argument as the api link

let url = "https://catfact.ninja/fact";
// fetch(url);

// inspect -> network -> refresh -> <there will be names of request and response> -> click on api_data/fact
// For header HTTPS : go to header
// For data : go to response

// fetch return a promise by with we can get the data

fetch(url)
    .then(response => {
        console.log(response);
        // again this response is not the exact data we need, res.json() used to get the more accurate data in the form of promise
        // console.log(response.json())
        // to get the json data we can use then again on the promise
        return response.json();
        // futher from the object we can use .key to get any value 
    })
    .then(data => {
        console.log(data);
        // we can again call for api data
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(`here is the new fact : ${data.fact}`);
            })
            .catch(e => {
                console.log(e);
            })
    })
    .catch(e => {
        console.log(e);
    })