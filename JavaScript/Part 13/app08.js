// the main Problems for which await is used 

let url = "https://catfact.ninja/fact";

async function getFact(url) {
    let res = fetch(url);
    console.log(res);
    // if fetch takes time to fetch data from api then the execution of next line will be done and till then res is not defined
    // so it might throw undefined 

}

getFact(url);

// so we use await keyword to wait for the fetch to complete and then move to next line

async function getFact2(url) {
    let res = await fetch(url);
    console.log(res);
}
getFact2(url);


// use try catch block to handle errors