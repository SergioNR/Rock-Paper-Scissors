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
    
    if (computerSelection === `rock`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`no winner`);
                break;
            case `paper`:
                console.log(`player wins`)
                break;
            case `scissors`:
                console.log(`computer wins`)
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }
    else if (computerSelection === `scissors`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`player wins`);
                break;
            case `paper`:
                console.log(`computer wins`)
                break;
            case `scissors`:
                console.log(`no winner`)
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }
    else if (computerSelection === `paper`) {
        switch (playerSelection) {
            case `rock`:
                console.log(`computer wins`);
                break;
            case `paper`:
                console.log(`no winner`)
                break;
            case `scissors`:
                console.log(`player wins`)
                break;
            default:
                console.log(`please select either rock,paper or scissors`)
        }
    }
}


const getPlayerChoice = () => {
    return prompt(`what is your choice`, `rock`).toLowerCase();
}


playRound(getPlayerChoice(), getComputerChoice());