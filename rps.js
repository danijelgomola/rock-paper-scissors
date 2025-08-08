const humanScoreLabel = document.querySelector(".human-score");
const computerScoreLabel = document.querySelector(".computer-score");
const choiceBtns = document.querySelectorAll(".choice-btn");
const humanChoiceLabel = document.querySelector(".human-choice");
const computerChoiceLabel = document.querySelector(".computer-choice");
const message = document.querySelector(".message");
const resetBtn = document.querySelector(".reset-btn");

let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return "🪨";
        case 1:
            return "🧻";
        case 2:
            return "✂️";
    }
}

choiceBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "rock":
                humanChoice = "🪨";
                break;
            case "paper":
                humanChoice = "🧻";
                break;
            case "scissors":
                humanChoice = "✂️";
                break;
        }
        computerChoice = getComputerChoice();

        humanChoiceLabel.textContent = `Human's choice: ${humanChoice}`;
        computerChoiceLabel.textContent = `Computer's choice: ${computerChoice}`;

        playRound(humanChoice, computerChoice);
        checkWinner();
    });
});

function playRound(humanPick, computerPick) {
    if (humanPick === "🪨" && computerPick === "🧻") {
        computerScore++;
        computerScoreLabel.textContent = computerScore;
        message.textContent = "You lose! Paper beats rock.";
    } else if (humanChoice === "🪨" && computerChoice === "✂️") {
        humanScore++;
        humanScoreLabel.textContent = humanScore;
        message.textContent = "You win! Rock beats scissors.";
    } else if (humanChoice === "🧻" && computerChoice === "🪨") {
        humanScore++;
        humanScoreLabel.textContent = humanScore;
        message.textContent = "You win! Paper beats rock.";
    } else if (humanChoice === "🧻" && computerChoice === "✂️") {
        computerScore++;
        computerScoreLabel.textContent = computerScore;
        message.textContent = "You lose! Scissors beats paper.";
    } else if (humanChoice === "✂️" && computerChoice === "🪨") {
        computerScore++;
        computerScoreLabel.textContent = computerScore;
        message.textContent = "You lose! Rock beats scissors.";
    } else if (humanChoice === "✂️" && computerChoice === "🧻") {
        humanScore++;
        humanScoreLabel.textContent = humanScore;
        message.textContent = "You win! Scissors beats paper.";
    } else {
        message.textContent = "It a tie!";
    }
}

function checkWinner() {
    if (humanScore === 5) {
        message.textContent += " You're the final winner!";
        disableButtons();
    } else if (computerScore === 5) {
        message.textContent += " Computer's the final winner!";
        disableButtons();  
    }
}

function disableButtons() {
    choiceBtns.forEach((btn) => {
        btn.disabled = true;
    });
}

resetBtn.addEventListener("click", () => {
    window.location.reload();
});