'use strict';
let playerPoints = 0;
let computerPoints = 0;
let playerResult = document.getElementById('player-result');
let computerResult = document.getElementById('AI-result');
const paragraphText = document.querySelector('.text p');
const userScore = document.getElementById('user-points');
const computerScore = document.getElementById('computer-points');
const scoreBoard = document.querySelector('.score-board');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

const getComputerChoice = () => {
    const selection = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * selection.length);
    return selection[randomNumber];
}

const win = function (playerSelection, computerSelection) {
    playerPoints++;
    userScore.innerHTML = playerPoints;
    computerScore.innerHTML = computerPoints;
    return paragraphText.textContent = `You win! ${playerSelection} beats ${computerSelection}`
}

const lose = function (playerSelection, computerSelection) {
    computerPoints++;
    userScore.innerHTML = playerPoints;
    computerScore.innerHTML = computerPoints;
    return paragraphText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
}

const playRound = function (playerSelection) {
    if (playerPoints === 5 || computerPoints === 5) {
        return paragraphText.textContent = "Game Over. Reached 5 rounds.";
    }
    let computerSelection = getComputerChoice();
    computerResult.src = document.getElementById(`AI-${computerSelection}`).src
    if (playerSelection === computerSelection) {
        return paragraphText.textContent = `Draw! Both selected ${computerSelection}.`;
    } else {
        let choiceComparison = `${playerSelection.charAt(0)}${computerSelection.charAt(0)}`
        if (choiceComparison === 'rs' || choiceComparison === 'sp' || choiceComparison === 'pr') {
            return win(playerSelection, computerSelection);
        } else {
            return lose(playerSelection, computerSelection);
        }
    }
}

const game = function () {
    rock_div.addEventListener('click', function () {
        playerResult.src = rock_div.src;
        playRound('rock');
    })
    paper_div.addEventListener('click', function () {
        playerResult.src = paper_div.src;
        playRound('paper');
    })
    scissors_div.addEventListener('click', function () {
        playerResult.src = scissors_div.src;
        playRound('scissors');
    })
}

game();