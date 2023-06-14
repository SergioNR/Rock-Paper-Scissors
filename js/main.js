// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play. 
// Tip: use the console to make sure this is returning the expected output before moving to the next step!

/*  
 */

const getComputerChoice = () => { // if const choices was a global variable, there would be no need to pass it as an argument, since the lack of argument takes the global varoable
    const choices = [`rock`, `paper`, `scissors`]; // only possible options from the game
    
    return choices[Math.floor(Math.random() * choices.length)]

    /* the return is returning:
    1-of the array
    2- rounding of number..
    3- ..randomized number * array length
    */
}


// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). -- done

const playRound = (playerSelection, computerSelection) => {
    console.log(`the user has chosen ${playerSelection}`)
    console.log(`the computer has chosen ${computerSelection}`)
    let roundResult;
    
    if (computerSelection === `rock`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`no winner this round`);
                roundResult === `no winner;`
                break;
            case `paper`:
                console.log(`player wins this round`)
                roundResult = `player wins`
                break;
            case `scissors`:
                console.log(`computer wins this round`)
                roundResult = `computer wins`
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
                roundResult === `no winner`;
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
                roundResult === `no winner`
                break;
            case `scissors`:
                console.log(`player wins this round`)
                roundResult = `player wins`
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }
    return roundResult
}


const getPlayerChoice = () => {
    return `rock` // DEBUGGING PURPOSES prompt(`what is your choice`, `rock`).toLowerCase();
}


// playRound(getPlayerChoice(), getComputerChoice());
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

const game = (numberOfRounds) =>{
    let playerScore = 0;
    let computerScore = 0;

    for (i = 1; i <= numberOfRounds; i++) {
        console.log(`This is round ${i}`)
        let roundResult = playRound(getPlayerChoice(), getComputerChoice())

        if (roundResult === `computer wins`) {
            computerScore = computerScore + 1
        }
        else if (roundResult === `player wins`) {
            playerScore = playerScore + 1
        }
    }

    checkResult(playerScore, computerScore)
}

// lo que necesito es que sume 1 punto al ganador
// y que de

let numberOfRounds = 35 // Number(prompt(`how many rounds do you want to play?`))
game(numberOfRounds)
// console.log(typeof numberOfRounds, numberOfRounds) // añadir if para que solo se puedan introducir números

// Write a NEW function called game(). -- done 
// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… 
// if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. 
// If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.