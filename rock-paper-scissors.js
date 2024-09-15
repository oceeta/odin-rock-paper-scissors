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

console.log(getHumanChoice());