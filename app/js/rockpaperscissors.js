////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
     move ? move : getInput() 
}

function getComputerMove(move) {
 move ? move : randomPlay()
}

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {return "tie"}
        if (playerMove === "rock" && computerMove === "paper") {return "computer"}
        if (playerMove === "paper" && computerMove === "rock") {return "player"}
        if (playerMove === "scissors" && computerMove === " paper") {return "player"}
        if (playerMove === "paper" && computerMove === "scissors") {return "computer"}
        if (playerMove === "rock" && computerMove === " scissors") {return "player"}
        if (playerMove === "scissors" && computerMove === "rock") {return "computer"} ;




    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);

while (playerwins < 5 && computerwins < 5) 


    return {playerWins, computerWins};
}

