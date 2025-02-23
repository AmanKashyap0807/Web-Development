// High order function which will return a function

// function for confirming the gender

function confirmGender(request) {
    if (request == "male") {
        return function (name) {
            console.log("Mr. " + name);
        }
    }
    else if (request == "female") {
        return function (name) {
            console.log("Ms. " + name);
        }
    }
    else {
        return function (name) {
            console.log(`bhag teri maa ki ${name} namard`);
        }
    }
}

let check = confirmGender("male");
check("Aman");

check = confirmGender("chhakka");
check("vibhansu");