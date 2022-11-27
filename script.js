"strict mode";

const selection = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choice = Math.floor(Math.random() * selection.length);
  return selection[choice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    console.log("Draw!");
  } else if (playerSelection.toLowerCase() === "paper") {
    console.log("You selected paper");
    switch (computerSelection) {
      case "rock":
        console.log("Computer: rock");
        break;
      case "paper":
        console.log("Computer: paper");
        break;
      case "scissors":
        console.log("Computer: scissors");
        break;
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    console.log("You selected scissors");
    switch (computerSelection) {
      case "rock":
        console.log("Computer: rock");
        break;
      case "paper":
        console.log("Computer: paper");
        break;
      case "scissors":
        console.log("Computer: scissors");
        break;
    }
  } else if (playerSelection.toLowerCase() === "rock") {
    console.log("You selected rock");
    switch (computerSelection) {
      case "rock":
        console.log("Computer: rock");
        break;
      case "paper":
        console.log("Computer: paper");
        break;
      case "scissors":
        console.log("Computer: scissors");
        break;
    }
  }
}

const playerSelection = String(prompt("Select rock paper or scissors:"));
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
