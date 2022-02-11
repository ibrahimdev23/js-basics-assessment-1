// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user


const welcomeMessage = "Welcome to the password validator tool"
let passwordSuccess = "Password succesful"
let passwordFail = "That is incorrect, please try again" 

const readline = require("readline")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})


console.log(welcomeMessage)

 reader.question("Please enter your password:", function(answer){
    if (answer.length >= 10 && answer.length < 15){
        console.log(passwordSuccess)
    } else {
        console.log(passwordFail)
    
    }})




