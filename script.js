
let computerScore = 0;
let playerScore = 0;

const results = document.querySelector('.results');
const score = document.querySelector('.score');
const container = document.querySelector('.container');
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const resetButton = document.querySelector('.reset-button');
var playerImg = document.getElementById("player-img");
var computerImg = document.getElementById("computer-img");

resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  scorePlayer.textContent = playerScore;
  scoreComputer.textContent = computerScore;
  results.textContent = "Let's go!";
})



const playerInputRock = document.querySelector('.rock');

playerInputRock.addEventListener('click', () => {
    results.textContent = playRound('rock');
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    playerImg.src="imgs/rock.png";
});

const playerInputPaper = document.querySelector('.paper');
playerInputPaper.addEventListener('click', () => {
    results.textContent = playRound('paper');
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    playerImg.src="imgs/paper.png";
});

const playerInputScissors = document.querySelector('.scissors');
playerInputScissors.addEventListener('click', () => {
    results.textContent = playRound('scissors');
scorePlayer.textContent = playerScore;
scoreComputer.textContent = computerScore;
playerImg.src="imgs/scissors.png";
  
});




function createParagraph(text) {
const p = document.createElement('p');
p.textContent = text;
return p;
}

function computerPlay() {
    let handChoice = ['rock', 'paper', 'scissors'];
    let chance = Math.floor((Math.random() * 3) + 1);
    if (chance == 1) {
        computerImg.src="imgs/rock.png";
        return handChoice[0];
    } else if (chance == 2) {
        computerImg.src="imgs/paper.png";
        return handChoice[1];
    } else if (chance == 3) {
        computerImg.src="imgs/scissors.png";
        return handChoice[2];
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    if (makeAllLowerCase(playerSelection) == computerSelection) {
        return `Tie! You both chose ${makeAllLowerCase(computerSelection)}!` 
    } else if 
((makeAllLowerCase(playerSelection) == 'paper' && computerSelection == 'rock') ||
(makeAllLowerCase(playerSelection) == 'scissors' && computerSelection == 'paper') ||
(makeAllLowerCase(playerSelection) == 'rock' && computerSelection == 'scissors')) {
        playerScore++;
  return `Congrats, you win! ${makeFirstUpperCase(makeAllLowerCase(playerSelection))} beats ${computerSelection}!`;
        
    } else {
        computerScore++;
      return `Sorry, you lose! ${makeFirstUpperCase(computerSelection)} beats ${makeAllLowerCase(playerSelection)}!`;        
    }

    function makeFirstUpperCase(text) {
       return text = text.charAt(0).toUpperCase() + text.slice(1);
    }

    function makeAllLowerCase(text) {
        return text = text.toLowerCase();
    }
  
scorePlayer.textContent = playerScore;
scoreComputer.textContent = computerScore;
}

if (computerScore >= 5 || playerScore >= 5) {
  results.textContent = 'Game Over!';
}





