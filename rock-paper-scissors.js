function getComputerChoice() {
    // Make the computer choose a random number between 1 and 3 inclusive
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    // Depending on the number chosen, return either "rock", "paper", or "scissors"
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    // get the human player's choice and store it in a variable called choice
    let choice = prompt("Please enter your choice between either \"rock\", \"paper\", or \"scissors\"", "");

    // convert the choice to lowercase and return "rock", "paper", or "scissors" depending on the player's choice
    switch (choice.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";

    // continue to prompt the user for a valid choice until they either provide one or cancel
        case "":
            return getHumanChoice();    
        default:
            return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // restart the round if the choices are the same
        if (humanChoice == computerChoice) {
            playRound(getHumanChoice(), getComputerChoice());
        
        // compare the choices and increase the score of the winner at the end of the round
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper covers rock and suffocates it!");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock breaks scissors into pieces!");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper folds itself around rock, trapping it forever!");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Paper can't stand the sharpness of scissors and gets torn to shreds!");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Scissors cannot withstand the sheer might of The Rock!");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors goes \"snip, snip\", while paper goes \"bye, bye\"!");
            humanScore++;
        }
    }

    for (let roundCounter = 1; roundCounter <= 5; roundCounter++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Score: Player(${humanScore}) - Computer(${computerScore})`);
    }

    if (humanScore > computerScore) {
        console.log("You win! AI ain't got nothing on you!");
    } else {
        console.log("You lose! Humanity is finished! Bow down to our mechanical overlords!");
    }
}

playGame();
