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
const resultContainer = document.querySelector('.resultContainer'); 
const flexContainer = document.createElement('div');
flexContainer.classList.add('flexContainer');
scorePrint = document.createElement('div');
scorePrint.classList.add('scorePrint');
const playerDisplay = document.createElement('div');
playerDisplay.classList.add('scoreNum');
const compDisplay = document.createElement('div');
compDisplay.classList.add('scoreNum');
//Appending
//TODO: Maybe remove flex container, not needed?
flexContainer.appendChild(playerDisplay);
flexContainer.appendChild(scorePrint);
flexContainer.appendChild(compDisplay);
resultContainer.appendChild(flexContainer);


const buttons = document.querySelectorAll('button');
let playerSelection = "ERROR: You shouldn't see this...";
let computerSelection = computerPlay();
let count = 0;
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
        //TODO: change print out result to 1, not "win.." "win.." "lose..."

        //Printing results & scores
        scorePrint.textContent = resultText;
        compDisplay.textContent = compScore;
        playerDisplay.textContent = playerScore;
        
    });
});





/*function game() {
    for(let i = 0; i < 5; i++) {
        let input = prompt("What would you like to play? ");
        console.log(playRound(input, computerPlay()));
    }
}*/

//console.log(playRound(playerSelection, computerSelection));

//game();