//Guess the number
const prompt = require("prompt-sync")();

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
let randomNum = getRandomInt(100);
let guesses = 0;
let userInput;


while(userInput!=randomNum){
    userInput = parseInt(prompt("Enter your guess(1-100): "));
    guesses ++;
    if (userInput == randomNum){
        console.log("Yay, you have guessed the right number: ");
    }
    else{
        if(userInput<randomNum){
            console.log("Oops you have entered wrong number");
            console.log("Please enter a larger number");
        }else if(userInput>randomNum){
            console.log("Oops you have entered wrong number");
            console.log("Please enter a smaller number");
        }
    }
}
let score = 100-guesses;
console.log(`You took ${guesses} guesses and your score is ${score}`);