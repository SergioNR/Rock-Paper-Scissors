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
    console.log(roundLog)
}

let playerScore = 0;
let computerScore = 0;
let maxNumberOfRounds = 5 //getNumberOfRounds(); // TODO set to 5 for debugging purposes
let currentRound = 0;
let roundLog = [];

const rockSelection = document.querySelector(`.rock`)
const paperSelection = document.querySelector(`.paper`)
const scissorsSelection = document.querySelector(`.scissors`)


const playRound = (playerSelection) => {
    let computerSelection = 'rock' //getComputerSelection() // TODO set to `rock` for debugging purposes
    console.log(`the current round is ${currentRound}`)
    console.log(`the user has chosen ${playerSelection}`)
    console.log(`the computer has chosen ${computerSelection}`)
    let roundResult;
    if (computerSelection === `rock`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`no winner this round`);
                roundResult = `no winner;`
                break;
            case `paper`:
                console.log(`player wins this round`)
                roundResult = `player wins`
                increasePlayerScore()
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()

                break;
            case `scissors`:
                console.log(`computer wins this round`)
                roundResult = `computer wins`
                increaseComputerScore()
                logRoundResult(currentRound, playerSelection, playerScore, computerSelection, computerScore, roundResult)
                increaseCurrentRound()
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }
    else if (computerSelection === `scissors`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`player wins this round`)
                roundResult = `player wins`
                break;
            case `paper`:
                console.log(`computer wins this round`)
                roundResult = `computer wins`
                break;
            case `scissors`:
                console.log(`no winner this round`);
                roundResult = `no winner`;
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }
    else if (computerSelection === `paper`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`computer wins this round`);
                roundResult = `computer wins`
                break;
            case `paper`:
                console.log(`no winner this round`)
                roundResult = `no winner`
                break;
            case `scissors`:
                console.log(`player wins this round`)
                roundResult = `player wins`
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }

    if (currentRound === maxNumberOfRounds) {

    }
    
    if (playerScore === 5) {
        console.log(`Game end, because player wins`)
        restartGame()
    }

    else if (computerScore === 5) {
        console.log(`Game end, because computer wins`)
        restartGame()
    }
};

// user selects their choice
rockSelection.addEventListener(`click`, () => playRound(`rock`))
paperSelection.addEventListener(`click`, () => playRound(`paper`))
scissorsSelection.addEventListener(`click`, () => playRound(`scissors`))


// computer makes their choice
const getComputerSelection = () => {
    const choices = [`rock`, `paper`, `scissors`]
    return choices[Math.floor(Math.random() * choices.length)]
}


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