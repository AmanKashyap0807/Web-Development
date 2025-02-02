console.log("Who says that you are the loser");
// in console no worry with semicolon but in case of vs code we will have to to show the line end

boardPercantage = 97;
cgpa = 7.81
output = "Your board percentage is " + boardPercantage + " and your cgpa is " + cgpa;
console.log(output);
// But this is not the appropriate way to do this
output2 = `you are not a loser, just these is a circumtances that you are not able to win. Your board percentage is ${boardPercantage} and your cgpa is ${cgpa}`;
// the above is backtick and not single quote, and the method is template literals
console.log(output2);