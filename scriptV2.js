'use strict';

let playerSelection;
const playerChoices = document.querySelectorAll('.icons-player img');
const paragraphText = document.querySelector('.text p');
const selection = ["rock", "paper", "scissors"];
const getComputerChoice = () => selection[Math.floor(Math.random() * selection.length)];

const playRound = function () {
    for (let i = 0; i < playerChoices.length; i++) {
        const choice = playerChoices[i];
        choice.addEventListener('click', function () {
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
            let computerSelection = getComputerChoice();
            if (playerSelection === computerSelection) {
                paragraphText.textContent = `Draw! Both selected ${computerSelection}.`;
            } else if (playerSelection === "paper") {
                switch (computerSelection) {
                    case "rock":
                        paragraphText.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                        break;
                    case "scissors":
                        paragraphText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                        break;
                }
            } else if (playerSelection === "scissors") {
                switch (computerSelection) {
                    case "rock":
                        paragraphText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                        break;
                    case "paper":
                        paragraphText.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                        break;
                }
            } else if (playerSelection === "rock") {
                switch (computerSelection) {
                    case "paper":
                        paragraphText.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                        break;
                    case "scissors":
                        paragraphText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                        break;
                }
            }
        });
    }
}

playRound();