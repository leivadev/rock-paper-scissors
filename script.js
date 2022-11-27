"strict mode";

const selection = ["rock", "paper", "scissors"];
const getComputerChoice = () =>
  selection[Math.floor(Math.random() * selection.length)];

const playRound = function (playerSelection, computerSelection) {
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
};

function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  let singleGame;
  for (let i = 0; i < 5; i++) {
    const playerSelection = String(prompt("Select rock paper or scissors:"));
    const computerSelection = getComputerChoice();
    singleGame = playRound(playerSelection, computerSelection);
    if (singleGame.includes("win")) {
      playerPoints++;
    } else if (singleGame.includes("lose")) {
      computerPoints++;
    }
    console.log(singleGame, "\n-----------");
  }
  console.log(
    `Player points: ${playerPoints} \nComputer points: ${computerPoints}`
  );
}
