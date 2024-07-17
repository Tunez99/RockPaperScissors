
// Promt the user for an input,
// Get computer input
// compare the inputs
// append the scores
// append the round up -> 5

let humanScore = 0
let computerScore = 0

function playGame(){
    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
        console.log(humanScore, computerScore);
    }
    if (humanScore > computerScore) {
        console.log("Player: ", humanScore, "Computer", computerScore)
        console.log("you won!");
    } else if (humanScore === computerScore) {
        console.log("Player: ", humanScore, "Computer", computerScore)
        console.log("you drew!");
    }  else{
        console.log("Player: ", humanScore, "Computer", computerScore)
        console.log("you lost!");
    }
}
//rock = 1 paper = 2 sissors = 3
function playRound(human, computer){
    if (human === computer){
        console.log("Draw!")
    } else if (human === 1 && computer === 2){
        console.log("You lost!")
        computerScore += 1
    } else if (human === 1 && computer === 3){
        console.log("You won!")
        humanScore += 1
    } else if (human === 2 && computer === 1){
        console.log("You won!")
        humanScore += 1
    } else if (human === 2 && computer === 3){
        console.log("You lost!")
        computerScore += 1
    } else if (human === 3 && computer === 1){
        console.log("You lost!")
        computerScore += 1
    } else if (human === 3 && computer === 2){
        console.log("You won!")
        humanScore += 1
    }
}

function getComputerChoice(){
    let computerNum = 0
    computerNum = Math.floor(Math.random() * 3) + 1;
    const choices = ["rock", "paper", "sissors"]
    const choice = choices[computerNum - 1]
    console.log(`Computer chose: ${choice}`)
    return computerNum
}

function getHumanChoice(){
    let check = true
    let choice = ""
    let human = 0
    do {
        choice = prompt("Enter 'rock','paper','sissors'");
        choice = choice.toLowerCase();
        if (choice === "rock"){
            human = 1;
            check = false;
        } else if (choice === "paper"){
            human = 2;
            check = false;
        } else if (choice === "sissors"){
            human = 3;
            check = false;
        } else {
            console.log("Invalid input")
        }
    }
    while (check);
    console.log(`You picked: ${choice}`);
    return human
}

playGame()