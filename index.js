let playAgain = true

while (playAgain == true) {
// Player choice
    let playerMove = (prompt("What move would you like?")).toLowerCase();   //Bug #3 - Had player lose if choice was input with capital letter.
// Function to randomly generate Computer's choice
    let computerMove = () => {
    
        let randomNumber = Math.floor(Math.random() * 3)                           // Bug #2 - Math.floor(Math.random() * 2       - should be * 3.
    
        if (randomNumber == 0) {
            return "rock";

        } else if (randomNumber == 1) {
            return "scissors";

        } else {
            return "paper";
        }
    };
 
// Function to decide who the winner is
    const getWinner = (playerMove, computerMove) => {
    
        if (playerMove === computerMove) {                                            //Bug #1 - (playerMove = computerMove) should've been "===".
            return 0; 
    
        } else if (playerMove === "rock" && computerMove === "scissors") {
            return 1;
    
        } else if (playerMove === "paper" && computerMove === "rock") {
            return 1;
        
        } else if (playerMove === "scissors" && computerMove === "paper") {
            return 1;
    
        } else {
            return -1;
        }
    };

// Variable to show game results
    let result = getWinner(playerMove, computerMove());
    console.log(result)
    alert(`The computer chose ${computerMove()}!`)

// Ask if player wants to continue    
    playAgain = confirm("Do you want to play again?");

    if (!playAgain) {
    alert(`Game over!`);
    }

};                                                                   //Bug #4 - variables we're scope locked from while loop ending on line 22.                                                      









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