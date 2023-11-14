// Variable creation
let playerScore = 0;
let computerScore = 0;
let maxNumberOfRounds = 5 //getNumberOfRounds(); // TODO set to 5 for debugging purposes
let currentRound = 0;
let roundLog = [];

// Query Selectors
const rockSelection = document.querySelector(`.rock`)
const paperSelection = document.querySelector(`.paper`)
const scissorsSelection = document.querySelector(`.scissors`)

const log = document.querySelector(`.log`)

const scoreSection = document.querySelector(`.scoreSection`)

const restartGameButton = document.querySelector(`.restartGameButton`)

const playersChoices = document.querySelector(`.playersChoices`)

const header = document.querySelector(`.header`)

// HTML Elements creation
const playerScoreDisplay = document.createElement(`p`)
const computerScoreDisplay = document.createElement(`p`)

// const logOne = document.createElement(`p`) // TODO finish this section
// const logTwo = document.createElement(`p`) // TODO finish this section
// const logThree = document.createElement(`p`) // TODO finish this section

const playerChoice = document.createElement(`p`)
const computerChoice = document.createElement(`p`)

const roundConclusion = document.createElement(`p`)

const currentRoundDisplay = document.createElement(`p`)

// HTML Elements content
// logOne.textContent = `this round was won by the ${roundLog.playerSelection} with ${roundLog.playerScore} points against the ${roundLog.computerSelection} with ${roundLog.computerScore} points`
// logTwo.textContent = `test`
// logThree.textContent = `test` // TODO finish this section

playerScoreDisplay.textContent = `player score: ${playerScore}`
computerScoreDisplay.textContent = `computer score: ${computerScore}`


const displayCurrentRound = () => {
    if (currentRound === 0) {
        currentRoundDisplay.textContent = `Game is yet to start. Next round will be round ${currentRound + 1}`;
        currentRound = currentRound + 1;

    }
    else {
        currentRoundDisplay.textContent = `current round: ${currentRound}. Next round will be round ${currentRound + 1}`;
    }
}

displayCurrentRound()

// HTML Elements styling

// logOne.classList.add(`log-content`)
// logTwo.classList.add(`log-content`)
// logThree.classList.add(`log-content`)

playerScoreDisplay.classList.add(`scoreDisplay`)
computerScoreDisplay.classList.add(`scoreDisplay`)

// HTML Elements appending
header.appendChild(currentRoundDisplay)

playersChoices.appendChild(playerChoice)
playersChoices.appendChild(computerChoice)

scoreSection.appendChild(playerScoreDisplay)
scoreSection.appendChild(computerScoreDisplay)



// log.appendChild(logOne) // TODO finish this section
// log.appendChild(logTwo)
// log.appendChild(logThree)

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

const publishRoundWinner = (roundResult) => {
    if (roundResult === `player wins`) {
        roundConclusion.textContent = `player wins for round ${currentRound}`;
        playersChoices.appendChild(roundConclusion)
    }
    else if (roundResult === `computer wins`) {
        roundConclusion.textContent = `computer wins for round ${currentRound}`;
        playersChoices.appendChild(roundConclusion)
    }
    else {
        roundConclusion.textContent = `no winner for round ${currentRound}`;
        playersChoices.appendChild(roundConclusion)
        
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
    console.log(`the current round is ${currentRound}`)
    // roundConclusion.textContent = `no winner for round number ${currentRound}` // TODO Delete this
    // playersChoices.appendChild(roundConclusion) // TODO Delete this
    currentRound = currentRound + 1;
}

const increaseComputerScore = () => {
    computerScore = computerScore + 1;
    // playersChoices.appendChild(roundConclusion) // TODO Delete this
    // roundConclusion.textContent = `computer wins round number ${currentRound}` // TODO Delete this
}

const increasePlayerScore = () => {
    playerScore = playerScore + 1;
    // playersChoices.appendChild(roundConclusion) // TODO Delete this
    // roundConclusion.textContent = `player wins round number ${currentRound}` // TODO Delete this
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

const updateCurrentRound = () => {
    currentRoundDisplay.textContent = `current round: ${currentRound}. Next play will be round ${currentRound + 1}`
}

const updateResults = (playerScore, computerScore) => {
    
    playerScoreDisplay.textContent = `player score: ${playerScore}`
    computerScoreDisplay.textContent = `computer score: ${computerScore}`
}

const endRound = (currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult) => {
    publishRoundWinner(roundResult)
    logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
    increaseCurrentRound()
    updateResults(playerScore, computerScore);
}

const playRound = (playerSelection) => {
    updateCurrentRound()
    playerSelection = `scissors`; // TODO delete this before deployment, debugging purposes
    let computerSelection = `paper` // TODO replace before deployment, debugging purposes getComputerSelection(); 
    console.log(`the current round is ${currentRound}`)
    console.log(`the user has chosen ${playerSelection}`)
    console.log(`the computer has chosen ${computerSelection}`)
    let roundResult;

    playerChoice.textContent = `player chose ${playerSelection}`
    computerChoice.textContent = `computer chose ${computerSelection}`

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
                endRound()
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }



    if (currentRound === maxNumberOfRounds) { 

    } // TODO add check for end of game by rounds
    
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

rockSelection.addEventListener(`click`, () => playRound(`rock`))  // Listener for user choice
paperSelection.addEventListener(`click`, () => playRound(`paper`)) // Listener for user choice
scissorsSelection.addEventListener(`click`, () => playRound(`scissors`)) // Listener for user choice

log.addEventListener(`click`, () => console.log(roundLog))

restartGameButton.addEventListener(`click`, () => restartGame());