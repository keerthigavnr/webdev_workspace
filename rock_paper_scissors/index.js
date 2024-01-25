const choices = ["rock", "paper", "scissor"];
const player = document.getElementById("playerDisplay");
const computer = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = " ";
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WON" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WON" : "YOU LOSE";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WON" : "YOU LOSE";
        break;
    }
  }
  player.textContent = `Player:${playerChoice}`;
  computer.textContent = `Computer:${computerChoice}`;
  resultDisplay.textContent = result;
}
