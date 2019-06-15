/* Game functions

- player must guess a number between a min and max
- player gets a certain amount of guesses 
- notify player of guesses remaining
- notify player the correct answer if he/she looses
- let player choose to play again

*/

// game values

let min = 1,
    max = 10,
    winNumber = 2,      // we will create a function that changes this number
    guessesLeft = 3;


// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener('click', function(){
    //console.log(guessInput.value);
    // the console gives the number from the input in the color black which means it is a string
    // we need it to be a number so we parse it and make it into a variable
    let guess = parseInt(guessInput.value);
    
    // validate
    if(isNaN || guess < min || guess > max){
    // if any of the above is true we dont want the game to continue and send msg
        setMessage(`please enter a number between ${min} and ${max}`, 'red');
    }


// check if won 
if(guess === winNumber){
    // disable input
    guessInput.disabled = true;
    // change border color 
    guessInput.style.borderColor = 'green';
    // set message 
    setMessage(`${winNumber} is correct!, YOU WIN!`, 'green');

}   else {

}
});

// set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}