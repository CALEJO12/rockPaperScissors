//VARIABLES
let playerScore = parseInt(0);
let computerScore = parseInt(0);

//PLAYERSELECTION FUNCTION
function playerChoice () {
    playerSelection = prompt("Rock Paper or Scissors?").toLowerCase();
}


//COMPUTERPLAY FUNCTION
function computerPlay () {
    let randomNumber = Math.floor(Math.random()* 3);
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//PLAYROUND FUNCTION
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection == computerSelection) {
        return `It's a Tie! ${computerSelection} is the same as ${playerSelection}.`
    }else {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    }
}

//VALIDATION FUNCTION



function game() {
    for (let i = 0; i < 5;) {
        let playerSelection = prompt("Make a move");
        if (playerSelection == null) {
            return alert("I didn't want you to play anyway.");
        } else if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors") {
            const computerSelection = computerPlay();
            console.log(`${playRound(playerSelection.toLowerCase(), computerSelection)} computer's score: ${computerScore} player's score: ${playerScore}`);
            i++;
        } else {
            alert(`You did NOT enter rock, paper, or scissors. Try again.`);
        }
    }

    isWinner();
}

function isWinner() {
    if (playerScore == computerScore) {
        return console.log("its a tie...");
    } else if (playerScore > computerScore) {
        return console.log("YOU WIN!!!");
    } else {
        return console.log("YOU LOSE!!!");
    }
}


game();