
const choices = ["rock", "paper", "scissors"]
const winners = [];

function game(){
    for (let i = 0; i <= 4; i++){       
playRound();   
    } 
logWins();
}

function playRound(){
const playerSelection = playerChoice();
const computerSelection = computerChoice();
const winner = checkWinner(playerSelection, computerSelection);
console.log(winner)
winners.push(winner);
}

function playerChoice(){
let input = prompt("rock, paper, or scissors");
while (input == null){
    input = prompt("rock, paper, or scissors");
}
input = input.toLowerCase();
// console.log(input)
return input
}

function computerChoice(){
return choices[Math.floor(Math.random() * choices.length)]


}

function checkWinner(choiceP, choiceC){
    // console.log(choiceP, choiceC);
if(choiceP === choiceC){
    return "Tie";
 } else if(
(choiceP === "rock" && choiceC === "scissors") || 
(choiceP === "scissors" && choiceC === "paper") || 
(choiceP === "paper" && choiceC === "rock")
) {
 return "You Winner!";
 } else {
    return "you loser!"
 }
}
function logWins(){
let playerWins = winners.filter(item => item == "You Winner!").length;
let computerWins = winners.filter(item => item == "you loser!").length;
let ties = winners.filter(item => item == "Tie").length;
console.log("results")
console.log("player wins", playerWins);
console.log("comp wins", computerWins);
console.log("ties", ties);
}

game()