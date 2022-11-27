"strict mode";

const selection = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choice = Math.floor(Math.random() * selection.length);
  return selection[choice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    console.log("You selected rock");
  } else if (playerSelection.toLowerCase() === "paper") {
    console.log("You selected paper");
  } else if (playerSelection.toLowerCase() === "scissors") {
    console.log("You selected scissors");
  }
  console.log(computerSelection);
}
