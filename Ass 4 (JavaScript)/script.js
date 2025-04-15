//1: Even and Odd Checker
let numberA = prompt("Enter a number:");
if (numberA % 2 === 0) {
    alert("The number is even")
} else {
    alert("The number is odd")
}



//2: Basic Calculator
let numberB = parseFloat(prompt("Enter first number:"));
let operator = prompt("Enter an operator (+, -, *, /)");
let numberC = parseFloat(prompt("Enter second number:"));
let result;

if (operator === "+") {
    result = numberB + numberC;
} else if (operator === "-") {
        result = numberB - numberC;
} else if (operator === "*") {
    result = numberB * numberC;
} else if (operator === "/") {
    result = numberB / numberC;
} else {
    result = "Invalid operator"
}
alert("Result: " + result);



//3: Voting Eligibility Checker
let age = prompt("Input your age");
if (age >= 18) {
    alert("You are eligible to vote");
} else {
    alert("You are not eligible to vote")
}




//4: Print Numbers from 1 to zero
console.log("Numbers from 1 to 10");
for (i = 1; i <= 10; i++) {
    console.log(i);
}




//5: Multiplication Table Generator
let tableNum = prompt("Enter a number for Multiplication Table");
console.log("Multiplication Table " + tableNum);
for (let i = 1; i <= 12; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}




//6: Grade Checker
let score = prompt("Enter a score (0-100)");
if (score >= 70 && score <= 100) {
    alert("Excellent");
} else if (score >= 50 && score <= 69) {
    alert("Good");
} else if (score < 50) {
    alert("Needs improvement");
    } else {
        alert("Invalid result")
    }




//7: Guess the Number Game
let randomNum = Math.floor(Math.random() * 5) + 1;
let guess = prompt("Guess a number between 1 and 5:");
if (parseInt(guess) === randomNum) {
    alert("You guessed right");
} else {
    alert("Wrong guess! The number was " + randomNum);
}



//8: FizzBuzz Challenge
console.log("FizzBuzz from 1 to 15:");
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}