const moveSelections = ["rock", "paper", "scissors"];
let playerWinCount = 0;
let computerWinCount = 0;
let playCount = 0;
const gameCounter = document.querySelector("#gameCounter")
const gameStatus = document.querySelector("#gameStatus")
const roundResult = document.querySelector("#roundResult")
const finalResult = document.querySelector("#finalResult")

function playRound(e){
    let choice = e.target.getAttribute("data-key");
    let playerChoiceNumber = getChoiceNumber(choice);
    let computerChoiceNumber = Math.floor(Math.random() * 3);
    if (playerChoiceNumber === computerChoiceNumber){
        roundResult.textContent = "This round is a draw";
        updateScore("draw")
    }
    //if player loses to computer else win
    else if (losesToOpponent(playerChoiceNumber, computerChoiceNumber)){
        roundResult.textContent = "Player loses this round";
        updateScore("loss")
    }
    else {
        roundResult.textContent = "Player wins this round";
        updateScore("win")
    }

    //update the UI to reflect the most recent status of the game
    gameCounter.textContent = "Number of games played: " + playCount;
    gameStatus.textContent = "Player has selected: " + choice + " and opponent has selected: " + getChoiceName(computerChoiceNumber);
}

function updateScore(result){
    playCount++;
    switch (result){
        case "draw":
            break;
        case "loss":
            computerWinCount++;
            break;
        case "win":
            playerWinCount++;
            break;
    }
    if (playCount >= 5){
        finalResult.textContent = "player final score: " + playerWinCount + " computer final score: " + computerWinCount;
    }
}

function losesToOpponent(choice1, choice2){
    return (choice1 == 2 && choice2 == 0) || (choice2 - choice1 == 1) ?  true : false;
}

function getChoiceNumber(choice){
    let result;
    switch(choice){
        case "rock":
            result = 0;
            break;
        case "paper":
            result = 1;
            break;
        case "scissors":
            result = 2;
            break;
    }
    return result;
}
function getChoiceName(choice){
    let result;
    switch(choice){
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }
    return result;
}

//event listeners
const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => button.addEventListener('click', playRound));