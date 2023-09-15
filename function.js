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

function pogRound(playerSelection, computerSelection){
    if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'You Lose! Paper beats Rock';
    } 
}

function game(){
    
}
