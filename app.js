//Game Values
let min = 1, max = 10, winningNum = getWinnigNum(min, max), guessesLeft = 3;
//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');
//Assign UI min and max values
maxNum.textContent = max;
minNum.textContent = min;
//play again
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});
//add event on btn
guessBtn.addEventListener('click', function (e) {
    let guess = parseInt(guessInput.value);
    if (guess > max || guess < min || isNaN()) {
        setMessage(`Please input a no. between ${min} and ${max}`, 'red');
    }
    //check if won
    if (guess === winningNum) {
        //game over won
        gameOver(true, `${winningNum} is correct`);
    } else {
        //Wrong number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //game over lost
            gameOver(false, `Game over, you lost. The correct answer is ${winningNum}`);

        } else {
            guessInput.style.borderColor = 'red';

            //game continues answer wrong
            setMessage(`Guess is not correct, ${guessesLeft} guesses left`, 'red');
            //clear input
            guessInput.value = '';

        }
    }
});
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //Disable input
    guessInput.disabled = true;
    //border color
    guessInput.style.borderColor = color;
    //set message color
    message.style.color = color;
    //set messag
    setMessage(msg);
    //play again
    guessBtn.value = 'Play Again';
    //add class
    guessBtn.className = 'play-again';
}

//Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
//get winning num
function getWinnigNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}