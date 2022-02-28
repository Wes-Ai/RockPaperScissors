function computerPlay() {
    const hand = ["Rock", "Paper", "Scissors"];
    return hand[Math.floor(Math.random()*hand.length)];
}
function tieRound() {
    return "Tie! Both played " + playerSelection;
}
function winRound(winner, loser) {
    return "You win! " + winner + " beats " + loser;
}
function loseRound(winner, loser) {
    return "You lose! " + winner + " beats " + loser;
}

function playRound(playerSelection, computerSelection) {
    let upperP = playerSelection.toUpperCase();
    let upperC = computerSelection.toUpperCase();

    if(upperP === upperC) {
        return tieRound(playerSelection);
    }
    else if(upperP === "ROCK" && upperC === "PAPER") {
        return loseRound(computerSelection, playerSelection);
    }
    else if(upperP === "ROCK" && upperC ==="SCISSORS") {
        return winRound(playerSelection, computerSelection);
    }
    else if(upperP === "PAPER" && upperC === "SCISSORS") {
        return loseRound(computerSelection, playerSelection);
    }
    else if(upperP === "PAPER" && upperC ==="ROCK") {
        return winRound(playerSelection, computerSelection);
    }
    else if(upperP === "SCISSORS" && upperC === "ROCK") {
        return loseRound(computerSelection, playerSelection);
    }
    else if(upperP === "SCISSORS" && upperC ==="PAPER") {
        return winRound(playerSelection, computerSelection);
    }
}


//Creating DOM elements
scorePrint = document.querySelector('.scorePrint');
const playerDisplay = document.querySelector('.playerDisplay');
const compDisplay = document.querySelector('.compDisplay');

const buttons = document.querySelectorAll('button');
let playerSelection = "ERROR: You shouldn't see this...";
let computerSelection = computerPlay();
let playerScore = 0;
let compScore = 0;
let resultText = "";


buttons.forEach((button) => {
    button.addEventListener('click', () =>  {
        //Attaches button text to DOM button.
        playerSelection = button.textContent;

        //Randomizes computer selection after each play
        computerSelection = computerPlay();
        resultText = playRound(playerSelection, computerSelection);

        //Logic for score tracking
        const resultArray = resultText.split(' ');
        resultArray.forEach((element) => {
            if(element === "win!") {
                playerScore++;
            }
            else if(element === "lose!") {
                compScore++;
            }
        });

        //Printing results & scores
        scorePrint.textContent = `Round result: ${resultText}`;
        compDisplay.textContent = `Computer score: ${compScore}`;
        playerDisplay.textContent = `Your score: ${playerScore}`;

        if(compScore === 5) {
            scorePrint.textContent = "You lost the game bro, RIP.";
        }
        else if (playerScore === 5) {
            scorePrint.textContent = "You won the game bro! POG!";
        }
        
    });
});