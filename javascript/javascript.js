//VARIABLES
let playerScore = parseInt(0);
let computerScore = parseInt(0);
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerSelection = [rockBtn, paperBtn, scissorsBtn];
const button = document.querySelectorAll("img");
const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const result = document.getElementById("result");
const total = document.getElementById("total");
const computerScoreDisplayed = document.getElementById("computerScore");
const playerScoreDisplayed = document.getElementById("userScore");

//RUN GAME WHEN CLICK EVENT
let userChoice;
computerScoreDisplayed.innerHTML = " 0";
playerScoreDisplayed.innerHTML = " 0";
button.forEach(option => {
    option.addEventListener('click', (e) => {
        computerScoreDisplayed.innerHTML = "0";
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = " " + userChoice;
        computerPlay();
        playRound(userChoice, computerChoice);
        if (playerScore === 5) {
            total.innerHTML = " " + `PLAYER WINS! Player Score: ${playerScore} Computer Score: ${computerScore}`
        } else if (computerScore === 5) {
            total.innerHTML = " " + `COMPUTER WINS! Player Score: ${playerScore} Computer Score: ${computerScore}`
        }
    })
})

//COMPUTER FUNCTION
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    computerChoiceDisplay.innerHTML = " " + computerChoice;
}

//PLAY ROUND FUNCTION 
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        userChoiceDisplay.style.color = "black";
        computerChoiceDisplay.style.color = "black";
        computerScoreDisplayed.innerHTML = " " + computerScore;
        playerScoreDisplayed.innerHTML = " " + playerScore;
        result.innerHTML = " TIE!";
    } else if (userChoice === 'rock' && computerChoice  === 'paper') {
        userChoiceDisplay.style.color = "red";
        computerChoiceDisplay.style.color = "green";
        result.innerHTML = " YOU LOSE!";
        computerScore++
        computerScoreDisplayed.innerHTML = " " + computerScore;
        playerScoreDisplayed.innerHTML = " " + playerScore;
    } else if (userChoice === 'paper' && computerChoice  === 'scissors') {
        userChoiceDisplay.style.color = "red";
        computerChoiceDisplay.style.color = "green";
        result.innerHTML = " YOU LOSE!";
        computerScore++
        computerScoreDisplayed.innerHTML = " " + computerScore;
        playerScoreDisplayed.innerHTML = " " + playerScore;
    } else if (userChoice === 'scissors' && computerChoice  === 'rock') {
        userChoiceDisplay.style.color = "red";
        computerChoiceDisplay.style.color = "green";
        result.innerHTML = " YOU LOSE!";
        computerScore++
        computerScoreDisplayed.innerHTML = " " + computerScore;
        playerScoreDisplayed.innerHTML = " " + playerScore;
    } else {
        userChoiceDisplay.style.color = "green";
        computerChoiceDisplay.style.color = "red";
        result.innerHTML = " YOU WIN!";
        playerScore++
        computerScoreDisplayed.innerHTML = " " + computerScore;
        playerScoreDisplayed.innerHTML = " " + playerScore;
    }
}

function showAndHide() {
    const container = document.getElementById("container");
    const playButton = document.getElementById("play");
    if (container.style.display = 'none') {
        container.style.display = 'block';
        playButton.style.display = 'none';
    }
}
