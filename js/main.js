// Variable creation
let playerScore = 0;
let computerScore = 0;
let maxNumberOfRounds = 5 //getNumberOfRounds(); // TODO set to 5 for debugging purposes
let currentRound = 1;
let roundLog = [];

// Query Selectors
const rockSelection = document.querySelector(`.rock`)
const paperSelection = document.querySelector(`.paper`)
const scissorsSelection = document.querySelector(`.scissors`)
const log = document.querySelector(`.log`)
const scoreSection = document.querySelector(`.scoreSection`)
const restartGameButton = document.querySelector(`.restartGameButton`)
const playersChoices = document.querySelector(`.playersChoices`)

// HTML Elements creation
const playerScoreDisplay = document.createElement(`p`)
const computerScoreDisplay = document.createElement(`p`)
const logOne = document.createElement(`p`)
const logTwo = document.createElement(`p`)
const logThree = document.createElement(`p`)
const playerChoice = document.createElement(`p`)
const computerChoice = document.createElement(`p`)

// HTML Elements content
logOne.textContent = `this round was won by the ${roundLog.playerSelection} with ${roundLog.playerScore} points against the ${roundLog.computerSelection} with ${roundLog.computerScore} points`
logTwo.textContent = `test`
logThree.textContent = `test`
playerScoreDisplay.textContent = `player score: ${playerScore}`
computerScoreDisplay.textContent = `computer score: ${computerScore}`
playerChoice.textContent = `player chose ${roundLog.playerSelection}`
computerChoice.textContent = `computer chose ${roundLog.computerSelection}`

// HTML Elements styling

logOne.classList.add(`log-content`)
logTwo.classList.add(`log-content`)
logThree.classList.add(`log-content`)
playerScoreDisplay.classList.add(`scoreDisplay`)
computerScoreDisplay.classList.add(`scoreDisplay`)

// HTML Elements appending
scoreSection.appendChild(playerScoreDisplay)
scoreSection.appendChild(computerScoreDisplay)

log.appendChild(logOne)
log.appendChild(logTwo)
log.appendChild(logThree)

// Functions
const getNumberOfRounds = () =>{
    let numberOfRounds = parseInt(prompt(`how many rounds do you want to play?`))

    if (isNaN(numberOfRounds) === true) {
        alert(`please input a valid input for number of rounds - eg: 5`)   
    }
    else {
        return numberOfRounds
    }
}

const restartGame = () => {
        currentRound = 0;
        computerScore = 0;
        playerScore = 0;
        updateResults(playerScore, computerScore);
        console.log(`game has been restarted`)
        console.log(currentRound, playerScore, computerScore)
}

const increaseCurrentRound = () => {
    currentRound = currentRound + 1;
}

const increaseComputerScore = () => {
    computerScore = computerScore + 1;
}

const increasePlayerScore = () => {
    playerScore = playerScore + 1;
}

const logRoundResult = (currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult) => {
    roundLog = {
        currentRound: currentRound,
        playerSelection: playerSelection,
        playerScore: playerScore,
        computerSelection: computerSelection,
        computerScore: computerScore,
        roundResult: roundResult,
    }
}

const updateResults = (playerScore, computerScore) => {
    playerScoreDisplay.textContent = `player score: ${playerScore}`
    computerScoreDisplay.textContent = `computer score: ${computerScore}`
}

const playRound = (playerSelection) => {
    let computerSelection = 'rock' //getComputerSelection() // TODO set to `rock` for debugging purposes
    console.log(`the current round is ${currentRound}`)
    console.log(`the user has chosen ${playerSelection}`)
    console.log(`the computer has chosen ${computerSelection}`)
    let roundResult;
    if (computerSelection === `rock`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`no winner for round number ${currentRound}`);
                roundResult = `no winner`;
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                updateResults(playerScore, computerScore);
                break;
            case `paper`:
                console.log(`player wins round number ${currentRound}`)
                roundResult = `player wins`
                increasePlayerScore()
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                updateResults(playerScore, computerScore);

                break;
            case `scissors`:
                console.log(`computer wins round number ${currentRound}`)
                roundResult = `computer wins`
                increaseComputerScore()
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                updateResults(playerScore, computerScore);
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }
    else if (computerSelection === `scissors`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`player wins round number ${currentRound}`)
                roundResult = `player wins`
                increasePlayerScore()
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                updateResults(playerScore, computerScore);
                break;
            case `paper`:
                console.log(`computer wins round number ${currentRound}`)
                roundResult = `computer wins`
                increaseComputerScore()
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                updateResults(playerScore, computerScore);
                break;
            case `scissors`:
                console.log(`no winner for round number ${currentRound}`);
                roundResult = `no winner`;
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                updateResults(playerScore, computerScore);
                break;
            default:
                console.log(`please select either rock,paper or scissors`) 
        }
    }
    else if (computerSelection === `paper`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`computer wins round number ${currentRound}`);
                roundResult = `computer wins`
                increaseComputerScore()
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                updateResults(playerScore, computerScore);
                break;
            case `paper`:
                console.log(`no winner for round number ${currentRound}`)
                roundResult = `no winner`
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                updateResults(playerScore, computerScore);
                break;
            case `scissors`:
                console.log(`player wins round number ${currentRound}`)
                roundResult = `player wins`
                increasePlayerScore()
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                updateResults(playerScore, computerScore);
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }

    if (currentRound === maxNumberOfRounds) {

    }
    
    if (playerScore === 5) {
        console.log(`Game end, because PLAYER wins`)
        restartGame()
    }

    else if (computerScore === 5) {
        console.log(`Game end, because COMPUTER wins`)
        restartGame()
    }
};

const getComputerSelection = () => {
    const choices = [`rock`, `paper`, `scissors`]
    return choices[Math.floor(Math.random() * choices.length)]
} // computer makes their choice

const checkResult = (playerScore, computerScore) => {
    if (playerScore > computerScore) {
        console.log(`player wins the whole game with ${playerScore} points and computer loses with ${computerScore} points`);
    }
    else if (playerScore < computerScore) {
        console.log(`computer wins the whole game with ${computerScore} points and player loses with ${playerScore} points`);
    }
    else {
        console.log(`the game is a tie with computer ${computerScore} points and player with ${playerScore} points`) 
    }
}

// EVENT LISTENERS

rockSelection.addEventListener(`click`, () => playRound(`rock`))  // Listener for user choice
paperSelection.addEventListener(`click`, () => playRound(`paper`)) // Listener for user choice
scissorsSelection.addEventListener(`click`, () => playRound(`scissors`)) // Listener for user choice

log.addEventListener(`click`, () => console.log(roundLog))

restartGameButton.addEventListener(`click`, () => restartGame());