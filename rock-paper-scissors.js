let humanScore = 0;
let computerScore = 0;
const SCORE_LIMIT = 5;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const displayScore = document.querySelector("#display-score");

const winner = document.createElement("p");
const reason = document.createElement("p");
const score = document.createElement("p");
const finalWinner = document.createElement("p");

displayScore.appendChild(winner);
displayScore.appendChild(reason);
displayScore.appendChild(score);

rock.addEventListener("click", function(e) {
    let playerSelection = e.target.id;
    playRound(playerSelection, getComputerChoice());
});

paper.addEventListener("click", function(e) {
    let playerSelection = e.target.id;
    playRound(playerSelection, getComputerChoice());
});

scissors.addEventListener("click", function(e) {
    let playerSelection = e.target.id;
    playRound(playerSelection, getComputerChoice());
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let roundWinner = "";

    const computerWins = 
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock");

    if (humanChoice === computerChoice) {
        roundWinner = "tie";
    } else if (computerWins) {
        roundWinner = "Computer"
        computerScore++;
    } else {
        roundWinner = "Player"
        humanScore++;
    }

    updateScoreBoard(roundWinner, humanChoice, computerChoice);
}

function updateScoreBoard(roundWinner, humanChoice, computerChoice) {
    if (roundWinner === "Player") {
        winner.textContent = `Winner: ${roundWinner}`;
        reason.textContent = `${humanChoice} beats ${computerChoice}`;
    } else if(roundWinner === "Computer") {
        winner.textContent = `Winner: ${roundWinner}`;
        reason.textContent = `${computerChoice} beats ${humanChoice}`;
    } else {
        winner.textContent = "Winner: No one";
        reason.textContent = `It's a tie. You both chose ${humanChoice}`;
    }
    
    score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

    isGameOver = humanScore === SCORE_LIMIT || computerScore === SCORE_LIMIT;

    if (isGameOver) {
        rock.setAttribute("disabled", true);
        paper.setAttribute("disabled", true);
        scissors.setAttribute("disabled", true);
        if (humanScore > computerScore) {
            finalWinner.textContent = "You win! AI's got nothing on you!"
            displayScore.appendChild(finalWinner);
        } else {
            finalWinner.textContent = "You lose! Bow down to our mechanical overlords!"
            displayScore.appendChild(finalWinner);
        }
    }
}