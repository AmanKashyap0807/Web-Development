function checkUserCredential(username, password) {
    if (username != '' && password != '') {
        console.log('User is valid');
        featchProfile(username);
    } else {
        console.log('User is not valid');
    }
}

let db = true
function featchProfile(username) {
    if (db) {
        console.log('Profile fetched for user:', username);
        loadContent(username);
    }
    else {
        console.log('Error in fetching profile');
    }
}

function loadContent(username) {
    let internetSpeed = Math.floor(Math.random() * 5);
    if (internetSpeed < 2) {
        console.log('Slow internet connection');
    } else {
        console.log('Content loaded for user:', username);
    }
}

let username = 'admin';
let password = 'admin';
checkUserCredential(username, password);