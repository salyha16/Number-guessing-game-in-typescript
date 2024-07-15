import inquirer from "inquirer"
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() *10+1);

const answer = await inquirer.prompt ([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Kindly guess a number between 1-20",
},
]);
console.log(answer);

if(answer.userGuessNumber === randomNumber){
   console.log("Congratulations! you guess a right number"); 
} 
else {
    console.log("Unfortunately! you guessed a wrong number");
    
}
  