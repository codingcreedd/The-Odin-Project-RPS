let playerScore = 0, computerScore = 0, rounds = 0, remaining_rounds = rounds;
let playerChoice, computerChoice;
let gameMode = 'none';

let getRounds;
let end = false;

document.querySelector('.player-name').textContent = `${localStorage.getItem('username')}`;


//BUTTONS
const resetButton = document.querySelector('.reset-btn');
const firstToButton = document.querySelector('.firstTo-btn');
const bestOfButton = document.querySelector('.bestOf-btn');
const quitButton = document.querySelector('.quit-btn');

const buttons = document.querySelectorAll('button');
function toggleButton(){
    buttons.forEach((button) => {
        button.classList.remove('toggle-button');
    });
}

/*Event Listeners*/

resetButton.addEventListener('click', () => {
    resetGame();
});

firstToButton.addEventListener('click', () => {
    toggleButton();
    resetGame();

    setTimeout(() => {
        getRounds = promptUserRounds();
    }, 300);
    remaining_rounds = getRounds;
    firstToButton.classList.add('toggle-button');
    gameMode = 'first-to';
});

bestOfButton.addEventListener('click', () => {
    toggleButton();
    resetGame();

    setTimeout(() => {
        getRounds = promptUserRounds();
    }, 300);

    bestOfButton.classList.add('toggle-button');
    gameMode = 'best-of';
});

quitButton.addEventListener('click', () => {
    resetGame();
    window.location.href = 'index.html';
});

//Rock, Paper and Scissors
const rockButton = document.querySelector('#rock-choice');
const paperButton = document.querySelector('#paper-choice');
const scissorsButton = document.querySelector('#scissors-choice');

rockButton.addEventListener('click', () => {
    if(gameMode === 'none'){
        document.querySelector('.firstTo-btn').style.cssText = "border-color: red; color: red;";
        document.querySelector('.bestOf-btn').style.cssText = "border-color: red; color: red";

        setTimeout(() => {
            document.querySelector('.firstTo-btn').style.cssText = "border-color: white; color: white;";
            document.querySelector('.bestOf-btn').style.cssText = "border-color: white; color: white";
        }, 1000);
    }
    else
    {
        playerChoice = 1;
        computerChoice = getComputerChoice();
        const result = compareChoices(computerChoice, playerChoice);
        renderResult(result);
        rounds++;
        remaining_rounds--;
        checkForEnd();

        if(end === true){
            resetGame();
            end = false;
        }
    }
});

paperButton.addEventListener('click', () => {

    if(gameMode === 'none'){
        document.querySelector('.firstTo-btn').style.cssText = "border-color: red; color: red;";
        document.querySelector('.bestOf-btn').style.cssText = "border-color: red; color: red";
        

        setTimeout(() => {
            document.querySelector('.firstTo-btn').style.cssText = "border-color: white; color: white;";
            document.querySelector('.bestOf-btn').style.cssText = "border-color: white; color: white";
        }, 1000);
    }
    else
    {
        playerChoice = 2;
        computerChoice = getComputerChoice();
        const result = compareChoices(computerChoice, playerChoice);
        renderResult(result);
        rounds++;
        remaining_rounds--;
        checkForEnd();

        if(end === true){
            resetGame();
            end = false;
        }
    }
});

scissorsButton.addEventListener('click', () => {

    if(gameMode === 'none'){
        document.querySelector('.firstTo-btn').style.cssText = "border-color: red; color: red;";
        document.querySelector('.bestOf-btn').style.cssText = "border-color: red; color: red";

        setTimeout(() => {
            document.querySelector('.firstTo-btn').style.cssText = "border-color: white; color: white;";
            document.querySelector('.bestOf-btn').style.cssText = "border-color: white; color: white";
        }, 1000);
    }else
    {
        playerChoice = 3;
        computerChoice = getComputerChoice();
        const result = compareChoices(computerChoice, playerChoice);
        renderResult(result);
        rounds++;
        remaining_rounds--;
        checkForEnd();

        if(end === true){
            resetGame();
            end = false;
        }
    }
});


/*FUNCTIONS*/

function promptUserRounds(){
    const rounds = parseInt(prompt('Rounds: '));
    return rounds;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    updatePlayerScore();
    updateComputerScore();
    rounds = 0;
    remaining_rounds = 0;
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice(){
    return getRandomNumber(1, 3);
}

function compareChoices(computerChoice, playerChoice){
    
    switch (computerChoice) {
    case 1:
        switch (playerChoice) {
            case 1:
                return 'Tie';
            case 2:
                return 'Player Wins';
            default:
                return 'Computer Wins';
        }
        break;

    case 2:
        switch (playerChoice) {
            case 1:
                return 'Computer Wins';
            case 2:
                return 'Tie';
            default:
                return 'Player Wins';
        }
        break;

    default:
        switch (playerChoice) {
            case 1:
                return 'Player Wins';
            case 2:
                return 'Computer Wins';
            default:
                return 'Tie';
        }
    }
}

function Result() {
    const gameSectionBefore = document.querySelector('.before-choice');
    const gameSectionAfter = document.querySelector('.after-choice');
    gameSectionBefore.style.display = 'none';

    gameSectionAfter.style.display = 'flex';
    const playerDiv = document.querySelector('.player-choice');
    const computerDiv = document.querySelector('.computer-choice');

    if (playerChoice === 1) {
        playerDiv.setAttribute('id', 'rock-choice');
        playerDiv.lastElementChild.setAttribute('src', 'Images-icons/fist.png');
    } else if (playerChoice === 2) {
        playerDiv.setAttribute('id', 'paper-choice');
        playerDiv.lastElementChild.setAttribute('src', 'Images-icons/hand-paper.png');
    } else {
        playerDiv.setAttribute('id', 'scissors-choice');
        playerDiv.lastElementChild.setAttribute('src', 'Images-icons/scissors.png');
    }

    playerDiv.querySelectorAll('span').forEach((SPAN) => {
        SPAN.style.display = 'block';
    });

    // Computer div
    if (computerChoice === 1) {
        computerDiv.setAttribute('id', 'rock-choice');
        computerDiv.lastElementChild.setAttribute('src', 'Images-icons/fist.png');
    } else if (computerChoice === 2) {
        computerDiv.setAttribute('id', 'paper-choice');
        computerDiv.lastElementChild.setAttribute('src', 'Images-icons/hand-paper.png');
    } else {
        computerDiv.setAttribute('id', 'scissors-choice');
        computerDiv.lastElementChild.setAttribute('src', 'Images-icons/scissors.png');
    }

    computerDiv.querySelectorAll('span').forEach((SPAN) => {
        SPAN.style.display = 'block';
    });

    setTimeout(() => {
        gameSectionAfter.style.display = 'none';
        gameSectionBefore.style.display = 'flex';
    }, 2000);

}


function renderResult(result){
    if(result === 'Tie'){
        Result();
    }else if(result === 'Player Wins'){
        playerScore++;
        updatePlayerScore();
        Result();
    }else{
        computerScore++;
        updateComputerScore();
        Result();
    }
}

function updatePlayerScore(){
    document.querySelector('.player-score').textContent = `${playerScore}`;
}

function updateComputerScore(){
    document.querySelector('.computer-score').textContent = `${computerScore}`;
}

function checkForEnd(){
    const endResultContainer = document.querySelector('.end-result-container');
    const endResultDiv = document.querySelector('.end-result-div');
    if(gameMode === 'first-to' && (playerScore === getRounds || computerScore === getRounds)){
        endResultContent(endResultContainer, endResultDiv);
        end = true;
    }

    if(gameMode === 'best-of' && (playerScore > Math.floor(getRounds / 2) || computerScore > Math.floor(getRounds / 2) || rounds === getRounds))
    {
        endResultContent(endResultContainer, endResultDiv);
        end = true;
    }

    
}

function endResultContent(endResultContainer, endResultDiv){
    endResultContainer.classList.remove('hide');

        (playerScore > computerScore) ? endResultDiv.firstElementChild.textContent = 'You Win' 
        : (computerScore > playerScore) ? endResultDiv.firstElementChild.textContent = 'You lose'
        : endResultDiv.firstElementChild.textContent = 'Tie';

        endResultDiv.lastElementChild.textContent = `${playerScore} - ${computerScore}`;
        setTimeout(() => {
            endResultContainer.classList.add('hide');
        }, 3000);
        resetGame();
}