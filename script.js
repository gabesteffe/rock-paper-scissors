const moveSelections = ["rock", "paper", "scissors"];


playGame();


function playGame(){
    let playerWinCount = 0;
    let computerWinCount = 0;
    for ( i = 0; i < 5 ; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let result = playRound(playerSelection);
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
    }
    console.log("player final score: " + playerWinCount);
    console.log("computer final score: " + computerWinCount);
}


function playRound(playerSelection){
    let playerChoiceNumber = getChoiceNumber(playerSelection.toLowerCase());
    let computerChoiceNumber = Math.floor(Math.random() * 3);
    console.log("Player has selected: " + playerSelection + " and opponent has selected: " + getChoiceName(computerChoiceNumber));
    if (playerChoiceNumber === computerChoiceNumber){
        console.log("This round is a draw.");
        return "draw";
    }
    //if player loses to computer else win
    else if (losesToOpponent(playerChoiceNumber, computerChoiceNumber)){
        console.log("Player loses this round.")
        return "loss";
    }
    else {
        console.log("Player wins this round");
        return "win";
    }

}


//helper function beneath this line ----------------------------------------

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