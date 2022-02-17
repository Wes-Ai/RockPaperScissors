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


const buttons = document.querySelectorAll('button');
let playerSelection = "ERROR: You shoudln't see this...";
let computerSelection = computerPlay();
let count = 0;
let resultText = "";

buttons.forEach((button) => {
    button.addEventListener('click', () =>  {
        //Attaches button text to DOM button.
        playerSelection = button.textContent;

        //Randomizes computer selection after each play
        computerSelection = computerPlay();
        resultText = playRound(playerSelection, computerSelection);

        //TODO: Logic for score tracking, game rounds, and winning/losing.
        //TODO: change print out  result to 1, not "win.." "win.." "lose..."





        //Creating DOM elements
        const resultContainer = document.querySelector('.resultContainer'); 

        const flexContainer = document.createElement('div');
        flexContainer.classList.add('flexContainer');
        //Prints results
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = resultText;
        //Printing scores
        const playerScore = document.createElement('div');
        playerScore.classList.add('scoreNum');
        playerScore.textContent = "Buttholes.";
        const compScore = document.createElement('div');
        compScore.classList.add('scoreNum');
        compScore.textContent = "not butts";

        flexContainer.appendChild(playerScore);
        flexContainer.appendChild(content);
        flexContainer.appendChild(compScore);
        resultContainer.appendChild(flexContainer);

        //if()
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