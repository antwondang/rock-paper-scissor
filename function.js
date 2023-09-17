// let playerSelection = prompt("Rock, paper or scissor?:");



function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum){
        case 0:
            return 'Rock'; 
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return 'Invalid Choice';
    }
}
// const computerChoice = getComputerChoice();
// console.log('Computer chose: ' + computerChoice);

function pogRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
      return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
      return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
      return 'You Win! Scissors beats Paper';
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
      return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
      return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
      return 'You Lose! Rock beats Scissors';
    } else {
      return 'It\'s a tie!';
    }
  }

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(pogRound(playerSelection, computerSelection));

