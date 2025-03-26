// better way of requesting api : AXIOS
// it internally uses fetch but better than it
// WHY?????? : fetch git data in promise form which further need to be parsed it also gives promise but do not need to parse

// either install or use cdn on html file from its github

// same as fetch syntax

async function getFact(url) {
    let res = await axios.get(url);
    console.log(res);

    // --------------------------------------------------------------------------------------------
    // res
    //     .then(response => {
    //         console.log(response);
    //         console.log(response.data);
    //         console.log(response.data.fact);
    //     })
    //     .catch(e => {
    //         console.log(e);
    //     })
    // this above will show error because due to await either we will give resolve or reflect object as res
    // -------------------------------------------------------------------------------------------- 

    axios.get(url)
        .then(response => {
            console.log(`the response of axios : ${response}`);
            console.log(`the data of axios : ${response.data}`);
            console.log(`the fact of axios : ${response.data.fact}`);
        })
        .catch(e => {
            console.log(e);
        })
}

let url = "https://catfact.ninja/fact";
getFact(url);