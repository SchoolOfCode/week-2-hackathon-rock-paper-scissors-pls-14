let playerMove = "rock";
let computerMove = "paper";

    if (playerMove === computerMove) {
    console.log("Draw!"); 

    } else if (playerMove === "rock" && computerMove === "scissors") {
        console.log("Player wins!")
       
    } else if (playerMove === "paper" && computerMove === "rock") {
        console.log("Player wins!")
    
    } else if (playerMove === "scissors" && computerMove === "paper") {
        console.log("Player wins!");

    } else {console.log("Computer wins!");}
   