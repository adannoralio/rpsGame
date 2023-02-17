const playerSelection = ("enter rock paper or scissors")
function getComputerChoice (){
  const myArray = ["rock", "paper" ,"scissors"];
  var rand = Math.floor(Math. random() * myArray. length);
  return myArray[rand];
}
console.log(getComputerChoice());
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "its a tie";
    }else if((playerSelection == "rock" && computerSelection == "scissors")|| (playerSelection == "scissors" && computerSelection == "paper")|| (playerSelection == "paper" && computerSelection == "rock")){
        return "you win"
    }else {
        return "you lose"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = "";
    let result = "";
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = prompt("rock,paper,scissor");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result == "you win") {
            playerScore++;
        } else if (result == "you lose") {
            computerScore++;
        }

        console.log("player:" + playerScore);
        console.log("computer:" + computerScore);
        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log("You have defeated the computer,you are the man!");
    } else {
        console.log("what have you done you loser!you have doomed us!")
    }
}
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));