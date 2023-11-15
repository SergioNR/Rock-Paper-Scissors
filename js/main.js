// Variable creation
let playerScore = 0;
let computerScore = 0;
let maxNumberOfRounds = 5; //getNumberOfRounds(); // TODO set to 5 for debugging purposes
let currentRound = 0;
let roundLog = [];

// Query Selectors
const rockSelection = document.querySelector(`.rock`);
const paperSelection = document.querySelector(`.paper`);
const scissorsSelection = document.querySelector(`.scissors`);

const log = document.querySelector(`.log`);

const scoreSection = document.querySelector(`.scoreSection`);

const restartGameButton = document.querySelector(`.restartGameButton`);

const playersChoices = document.querySelector(`.playersChoices`);

const header = document.querySelector(`.header`);

// HTML Elements creation
const playerScoreDisplay = document.createElement(`p`);
const computerScoreDisplay = document.createElement(`p`);

const logPrint = document.createElement(`p`)
// const logTwo = document.createElement(`p`) // TODO finish this section
// const logThree = document.createElement(`p`) // TODO finish this section

const playerChoice = document.createElement(`p`);
const computerChoice = document.createElement(`p`);

const roundConclusion = document.createElement(`p`);

const currentRoundDisplay = document.createElement(`p`);

// HTML Elements content
playerScoreDisplay.textContent = `player score: ${playerScore}`;
computerScoreDisplay.textContent = `computer score: ${computerScore}`;

const displayCurrentRound = () => {
  if (currentRound === 0) {
    currentRoundDisplay.textContent = `Game is yet to start. Next round will be round ${
      currentRound + 1
    }`;
    currentRound = currentRound + 1;
  } else {
    currentRoundDisplay.textContent = `current round: ${currentRound}. Next round will be round ${
      currentRound + 1
    }`;
  }
};

displayCurrentRound();

// HTML Elements styling
playerScoreDisplay.classList.add(`scoreDisplay`);
computerScoreDisplay.classList.add(`scoreDisplay`);

// HTML Elements appending
header.appendChild(currentRoundDisplay);

playersChoices.appendChild(playerChoice);
playersChoices.appendChild(computerChoice);

scoreSection.appendChild(playerScoreDisplay);
scoreSection.appendChild(computerScoreDisplay);

// Functions
const getNumberOfRounds = () => {
  let numberOfRounds = parseInt(prompt(`how many rounds do you want to play?`));

  if (isNaN(numberOfRounds) === true) {
    alert(`please input a valid input for number of rounds - eg: 5`);
  } else {
    return numberOfRounds;
  }
};

const printPlayersChoices = (playerSelection, computerSelection) => {
  playerChoice.textContent = `player chose ${playerSelection}`;
  computerChoice.textContent = `computer chose ${computerSelection}`;
};

const printRoundWinner = (roundResult) => {
  console.log(roundResult);
  if (roundResult === `player wins`) {
    roundConclusion.textContent = `player wins for round ${currentRound}`;
    playersChoices.appendChild(roundConclusion);
  } else if (roundResult === `computer wins`) {
    roundConclusion.textContent = `computer wins for round ${currentRound}`;
    playersChoices.appendChild(roundConclusion);
  } else {
    roundConclusion.textContent = `no winner for round ${currentRound}`;
    playersChoices.appendChild(roundConclusion);
  }
};

const removePlayerChoices = () => {
  playerChoice.textContent = ``;
  computerChoice.textContent = ``;
  roundConclusion.textContent = ``;
};

const clearRoundLog = () => {
    roundLog = [];
    logPrint.textContent = ``;
}

const restartGame = () => {
  currentRound = 0;
  computerScore = 0;
  playerScore = 0;
  displayCurrentRound();
  removePlayerChoices();
  updatePlayerScores();
  clearRoundLog();
  console.log(`game has been restarted`);
};

const increaseCurrentRound = () => {
  console.log(`the current round is ${currentRound}`);
  currentRound = currentRound + 1;
};

const increaseComputerScore = () => {
  computerScore = computerScore + 1;
};

const increasePlayerScore = () => {
  playerScore = playerScore + 1;
};

const printRoundLog = () => {
    let logText = ``;
    for(i = 0; i < roundLog.length; i++) {
        logText += `for round ${roundLog[i].currentRound}, player chose ${roundLog[i].playerChoice} and computer chose ${roundLog[i].computerChoice} so the winner is ${roundLog[i].roundResult}. The score is Player: ${roundLog[i].playerScore} - Computer: ${roundLog[i].computerScore} \n`;
    }
    logPrint.textContent = logText;
    log.appendChild(logPrint)
}

const logRoundResult = (currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult) => {
  roundLog.push({
    currentRound: `${currentRound}`,
    playerSelection: `${playerSelection}`,
    playerScore: `${playerScore}`,
    computerSelection: `${computerSelection}`,
    computerScore: `${computerScore}`,
    roundResult: `${roundResult}`
  });
  console.log(roundLog) // TODO check why the computer selection and player selection are not being pushed to printRoundLog() function - and they are returning undefined
  printRoundLog();
};

const updateCurrentRound = () => {
  currentRoundDisplay.textContent = `current round: ${currentRound}. Next play will be round ${
    currentRound + 1
  }`;
};

const updatePlayerScores = () => {
  // no need to send the variable because its a global variable
  playerScoreDisplay.textContent = `player score: ${playerScore}`;
  computerScoreDisplay.textContent = `computer score: ${computerScore}`;
};

const endRound = (roundResult, playerSelection, computerSelection) => {
  printRoundWinner(roundResult);
  logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult);
  increaseCurrentRound(); // No need to pass the parameters because they are global variables
  updatePlayerScores(); // No need to pass the parameters because they are global variables
};

const playRound = (playerSelection) => {
  updateCurrentRound();
  // playerSelection = `rock`; //! DEBUG - Comment out this line before deployment
  // let computerSelection = `rock` //! DEBUG - Comment out this line before deployment
  let computerSelection = getComputerSelection(); //! UNCOMMENT THIS LINE BEFORE DEPLOYMENT
  console.log(`the current round is ${currentRound}`);
  console.log(`the user has chosen ${playerSelection}`);
  console.log(`the computer has chosen ${computerSelection}`);
  let roundResult;

  printPlayersChoices(playerSelection, computerSelection);

  if (computerSelection === `rock`) {
    switch (playerSelection) {
      case `rock`:
        console.log(`no winner for round number ${currentRound}`);
        roundResult = `no winner`;
        endRound(roundResult, playerSelection, computerSelection);
        break;
      case `paper`:
        console.log(`player wins round number ${currentRound}`);
        roundResult = `player wins`;
        increasePlayerScore();
        endRound(roundResult, playerSelection, computerSelection);

        break;
      case `scissors`:
        console.log(`computer wins round number ${currentRound}`);
        roundResult = `computer wins`;
        increaseComputerScore();
        endRound(roundResult, playerSelection, computerSelection);
        break;
      default:
        console.log(`please select either rock,paper or scissors`);
    }
  } else if (computerSelection === `scissors`) {
    switch (playerSelection) {
      case `rock`:
        console.log(`player wins round number ${currentRound}`);
        roundResult = `player wins`;
        increasePlayerScore();
        endRound(roundResult, playerSelection, computerSelection);
        break;
      case `paper`:
        console.log(`computer wins round number ${currentRound}`);
        roundResult = `computer wins`;
        increaseComputerScore();
        endRound(roundResult, playerSelection, computerSelection);
        break;
      case `scissors`:
        console.log(`no winner for round number ${currentRound}`);
        roundResult = `no winner`;
        endRound(roundResult, playerSelection, computerSelection);
        break;
      default:
        console.log(`please select either rock,paper or scissors`);
    }
  } else if (computerSelection === `paper`) {
    switch (playerSelection) {
      case `rock`:
        console.log(`computer wins round number ${currentRound}`);
        roundResult = `computer wins`;
        increaseComputerScore();
        endRound(roundResult, playerSelection, computerSelection);
        break;
      case `paper`:
        console.log(`no winner for round number ${currentRound}`);
        roundResult = `no winner`;
        endRound(roundResult, playerSelection, computerSelection);
        break;
      case `scissors`:
        console.log(`player wins round number ${currentRound}`);
        roundResult = `player wins`;

        increasePlayerScore();
        endRound(roundResult, playerSelection, computerSelection);
        break;
      default:
        console.log(`please select either rock,paper or scissors`);
    }
  }

  if (currentRound === maxNumberOfRounds) {
  } // TODO add check for end of game by rounds

  if (playerScore === 5) {
    console.log(`Game end, because PLAYER wins`);
    restartGame();
  } else if (computerScore === 5) {
    console.log(`Game end, because COMPUTER wins`);
    restartGame();
  }
};

const getComputerSelection = () => {
  const choices = [`rock`, `paper`, `scissors`];
  return choices[Math.floor(Math.random() * choices.length)];
}; // computer makes their choice

// const checkGameResult = (playerScore, computerScore) => {
//     if (playerScore > computerScore) {
//         console.log(`player wins the whole game with ${playerScore} points and computer loses with ${computerScore} points`);
//     }
//     else if (playerScore < computerScore) {
//         console.log(`computer wins the whole game with ${computerScore} points and player loses with ${playerScore} points`);
//     }
//     else {
//         console.log(`the game is a tie with computer ${computerScore} points and player with ${playerScore} points`)
//     }
// } // TODO this section has the function to check the game result if we decide to finish the game by rounds instead of by score

// EVENT LISTENERS

rockSelection.addEventListener(`click`, () => playRound(`rock`)); // Listener for user choice
paperSelection.addEventListener(`click`, () => playRound(`paper`)); // Listener for user choice
scissorsSelection.addEventListener(`click`, () => playRound(`scissors`)); // Listener for user choice

log.addEventListener(`click`, () => console.log(roundLog));

restartGameButton.addEventListener(`click`, () => restartGame());
