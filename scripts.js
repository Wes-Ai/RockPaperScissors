function computerPlay() {
    const hand = ["Rock", "Paper", "Scissors"];
    return hand[Math.floor(Math.random()*hand.length)];
}

function playRound(playerSelection, computerSelection) {
    let upperP = playerSelection.toUpperCase();
    let upperC = computerSelection.toUpperCase();

    if(upperP === upperC) {
        return "Tie! Both played " + playerSelection;
    }
    else if(upperP === "ROCK" && upperC === "PAPER") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else if(upperP === "ROCK" && upperC ==="SCISSORS") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if(upperP === "PAPER" && upperC === "SCISSORS") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else if(upperP === "PAPER" && upperC ==="ROCK") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if(upperP === "SCISSORS" && upperC === "ROCK") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else if(upperP === "SCISSORS" && upperC ==="PAPER") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
}


const buttons = document.querySelectorAll('button');
let playerSelection = "ERROR: You shoudln't see this...";
let computerSelection = computerPlay();


buttons.forEach((button) => {
    button.addEventListener('click', () =>  {
        playerSelection = button.textContent;
        console.log(playerSelection);

        computerSelection = computerPlay();

        //Creating DOM element, appending to <div>, prints results.
        const resultContainer = document.querySelector('.resultContainer'); 

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = playRound(playerSelection, computerSelection);

        resultContainer.appendChild(content);
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