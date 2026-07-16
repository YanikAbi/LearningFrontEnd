let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const choices = ["paper", "rock", "scissors"];

function GetComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function GameOver() {
  const finalResult = DecideGameWinner(humanScore, computerScore);
  alert(`--- GAME OVER! --- \n${finalResult}`);
}

function GetHumanChoice(choice) {
  if (!choice) return;

  const cleanChoice = choice.trim().toLowerCase();

  return choices.includes(cleanChoice) ? cleanChoice : undefined;
}

function DecideRoundWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(`It's a tie! Both chose ${humanChoice}.`);
    return;
  }

  let roundWinner;

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    roundWinner = "Human";
  } else {
    computerScore++;
    roundWinner = "Computer";
  }

  alert(
    `Human chose: ${humanChoice}.\nComputer chose: ${computerChoice}.\nThe winner is: ${roundWinner || "No one"}`,
  );
}

function DecideGameWinner(humanScore, computerScore) {
  return humanScore > computerScore
    ? `Human wins the game! Final Score: ${humanScore} to ${computerScore}`
    : `Robot wins the game! Final Score: ${computerScore} to ${humanScore}`;
}

function PlayRound(playerChoice) {
  if (humanScore === 5 || computerScore === 5) {
    GameOver();
    return;
  }

  const humanSelection = GetHumanChoice(playerChoice);
  const computerSelection = GetComputerChoice();

  DecideRoundWinner(humanSelection, computerSelection);

  document.querySelector("#humanPoints").textContent = humanScore;
  document.querySelector("#robotPoints").textContent = computerScore;

  if (humanScore === 5 || computerScore === 5) {
    GameOver();
  }
}

rockButton.addEventListener("click", () => {
  PlayRound("rock");
});
paperButton.addEventListener("click", () => {
  PlayRound("paper");
});
scissorsButton.addEventListener("click", () => {
  PlayRound("scissors");
});
