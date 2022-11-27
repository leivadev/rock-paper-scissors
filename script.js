"strict mode";

const selection = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  let choice = Math.floor(Math.random() * selection.length);
  return selection[choice];
}
