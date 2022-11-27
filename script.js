"strict mode";

const selection = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choice = Math.floor(Math.random() * selection.length);
  return selection[choice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return `Draw! Both selected ${computerSelection}.`;
  } else if (playerSelection.toLowerCase() === "paper") {
    console.log("You selected paper");
    switch (computerSelection) {
      case "rock":
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
      case "scissors":
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    console.log("You selected scissors");
    switch (computerSelection) {
      case "rock":
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
      case "paper":
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
    }
  } else if (playerSelection.toLowerCase() === "rock") {
    console.log("You selected rock");
    switch (computerSelection) {
      case "paper":
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
      case "scissors":
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    }
  }
}

const playerSelection = String(prompt("Select rock paper or scissors:"));
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
