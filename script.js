document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultDisplay = document.getElementById('result');
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const resetButton = document.getElementById('reset');
    const playerMoveDisplay = document.getElementById('player-move');
    const computerMoveDisplay = document.getElementById('computer-move');

    let playerScore = 0;
    let computerScore = 0;

    function playGame(playerChoice) {
        const options = ['rock', 'paper', 'scissors'];
        const computerChoice = options[Math.floor(Math.random() * 3)];

        playerMoveDisplay.innerHTML = getChoiceEmoji(playerChoice);
        computerMoveDisplay.innerHTML = getChoiceEmoji(computerChoice);

        let result = '';
        let resultClass = '';

        if (playerChoice === computerChoice) {
            result = "It's a tie!";
            resultClass = 'tie';
        } else {
            switch(playerChoice) {
                case 'rock':
                    if (computerChoice === 'scissors') {
                        result = 'You win! Rock beats Scissors';
                        resultClass = 'win';
                    } else {
                        result = 'You lose! Paper beats Rock';
                        resultClass = 'lose';
                    }
                    break;
                case 'paper':
                    if (computerChoice === 'rock') {
                        result = 'You win! Paper beats Rock';
                        resultClass = 'win';
                    } else {
                        result = 'You lose! Scissors beat Paper';
                        resultClass = 'lose';
                    }
                    break;
                case 'scissors':
                    if (computerChoice === 'paper') {
                        result = 'You win! Scissors beat Paper';
                        resultClass = 'win';
                    } else {
                        result = 'You lose! Rock beats Scissors';
                        resultClass = 'lose';
                    }
                    break;
            }
        }

        if (resultClass === 'win') {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else if (resultClass === 'lose') {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }

        resultDisplay.textContent = result;
        resultDisplay.className = 'result-message ' + resultClass;
    }

    function getChoiceEmoji(choice) {
        switch(choice) {
            case 'rock': return '✊';
            case 'paper': return '✋';
            case 'scissors': return '✌️';
            default: return '?';
        }
    }

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.getAttribute('data-choice');
            playGame(playerChoice);
        });
    });

    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = '0';
        computerScoreDisplay.textContent = '0';
        resultDisplay.textContent = 'Choose your move to start!';
        resultDisplay.className = 'result-message';
        playerMoveDisplay.innerHTML = '?';
        computerMoveDisplay.innerHTML = '?';
    });
});
