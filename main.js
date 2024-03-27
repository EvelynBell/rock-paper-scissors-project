//Function standardizes input and checks if the user has made a valid selection before returning their choice
var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        console.log('Invalid choice! Please select rock, paper, or scissors.');
    }
};

//Function generates a random number 0-2 and uses this to return either rock, paper, or scissors
var getComputerChoice = function () {
    computerInput = Math.floor(Math.random() * 3);
 
    if(computerInput === 0) {
        return('rock');
    } else if(computerInput === 1) {
        return('paper');
    } else if(computerInput === 2) {
        return('scissors');
    }
};

//Determine game end state logically using user's and computer's choices
var determineWinner = function (userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return('The game was a tie!');
    }

    if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return('The computer wins this round!');
        } else {
            return('You win the round!');
        }
    }

    if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return('The computer wins this round!');
        } else {
            return('You win the round!');
        }
    }

    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return('The computer wins this round!');
        } else {
            return('You win the round!');
        }
    }
};

//Calls previous functions to display who won the round
var playGame = function () {
    var userChoice = getUserChoice('paper');
    var computerChoice = getComputerChoice();

    console.log(`Player: ${userChoice} | Computer: ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
