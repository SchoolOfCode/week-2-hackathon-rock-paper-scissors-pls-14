let playerMove = prompt("What move would you like?");

const getWinner = (playerMove, computerMove) => {
    
    if (playerMove === computerMove) {                                            //Bug #1 - (playerMove = computerMove) should've been "==="
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

let result = getWinner(playerMove, "scissors");    
console.log(result)
