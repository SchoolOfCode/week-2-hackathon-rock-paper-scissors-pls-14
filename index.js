let playAgain = true;

let game = 0;
let wins = 0;
let draws = 0;
let losses = 0;

while (playAgain == true) {
    // Player choice
    let playerMove = (prompt("What move would you like?")).toLowerCase(); // Bug #3 - case sensitive input

    // Function to randomly generate Computer's choice
    let computerMove = () => {
        let randomNumber = Math.floor(Math.random() * 3); // Bug #2 - ensuriung output was 0, 1, 2
        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "scissors";
        } else {
            return "paper";
        }
    };

    // Computer's move
    let computerChoice = computerMove(); // Bug #5 - causing issues with missing ()'s

    // Function to decide who the winner is
    const getWinner = (playerMove, computerMove) => {
        if (playerMove === computerMove) {
            return 0;  
        } else if (playerMove === "rock" && computerMove === "scissors") {
            return 1;  
        } else if (playerMove === "paper" && computerMove === "rock") {
            return 1;  
        } else if (playerMove === "scissors" && computerMove === "paper") {
            return 1;  
        } else {
            return 2;  
        }
    };

    // Get the winner
    let result = getWinner(playerMove, computerChoice);

    // Show the result
    alert(`The computer chose ${computerChoice}!`);

    // Update the scores
    const updateScores = () => {
        if (result === 1) {
            wins++;
        } else if (result === 2) {
            losses++;
        } else {
            draws++;
        }
        game++;
    };

    updateScores();

    // Displays the scoreboard
    alert(`Game number: ${game}, Wins: ${wins}, Draws: ${draws}, Losses: ${losses}`);

    // Ask if player wants to continue    
    playAgain = confirm("Do you want to play again?");

    if (!playAgain) {
        alert(`Game over!`);
    };
};                                                     //Bug #4 - variables we're scope locked from while loop ending on line 22.                                                      








/*
switch (randomNumber) {
    case (randomNumber == 0):
        return "rock";
        break;
    case (randomNumber == 1):
        return "paper";
        break;
    default:
        return "scissors";
    };
*/