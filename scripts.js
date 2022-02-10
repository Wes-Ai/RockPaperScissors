console.log("Hello werld!!!");

function computerPlay() {
    const hand = ["Rock", "Paper", "Scissors"];
    return hand[Math.floor(Math.random()*hand.length)];
}
