console.log("Hello werld!!!");

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


const playerSelection = "Scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));