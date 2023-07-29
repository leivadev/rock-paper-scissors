"strict mode";

let playerSelection;
const playerChoices = document.querySelectorAll('.icons-player img');
const paragraphText = document.querySelector('.text p');
const selection = ["rock", "paper", "scissors"];
const getComputerChoice = () => selection[Math.floor(Math.random() * selection.length)];

const playRound = function () {
    for (let i = 0; i < playerChoices.length; i++) {
        const election = playerChoices[i];
        election.addEventListener('click', function () {
            switch (i) {
                case 0:
                    playerSelection = 'rock';
                    break;
                case 1:
                    playerSelection = 'paper';
                    break;
                case 2:
                    playerSelection = 'scissors';
                    break;
            }
            if (playerSelection === getComputerChoice()) {
                return `Draw! Both selected ${getComputerChoice()}.`;
            } else if (playerSelection === "paper") {
                console.log("You selected paper");
                switch (getComputerChoice()) {
                    case "rock":
                        console.log("Computer selected rock");
                        paragraphText.textContent = `You win! ${playerSelection} beats ${getComputerChoice()}`;
                    case "scissors":
                        console.log("Computer selected scissors");
                        paragraphText.textContent = `You lose! ${getComputerChoice()} beats ${playerSelection}`;
                }
            } else if (playerSelection === "scissors") {
                console.log("You selected scissors");
                switch (getComputerChoice()) {
                    case "rock":
                        console.log("Computer selected rock");
                        paragraphText.textContent = `You lose! ${getComputerChoice()} beats ${playerSelection}`;
                    case "paper":
                        console.log("Computer selected paper");
                        paragraphText.textContent = `You win! ${playerSelection} beats ${getComputerChoice()}`;
                }
            } else if (playerSelection === "rock") {
                console.log("You selected rock");
                switch (getComputerChoice) {
                    case "paper":
                        console.log("Computer selected paper");
                        paragraphText.textContent = `You win! ${playerSelection} beats ${getComputerChoice()}`;
                    case "scissors":
                        console.log("Computer selected scissors");
                        paragraphText.textContent = `You lose! ${getComputerChoice()} beats ${playerSelection}`;
                }
            }
        });
    }
}

playRound();