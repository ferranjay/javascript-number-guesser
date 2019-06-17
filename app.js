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
    winNumber = getRandomNum(min, max),      // we will create a function that changes this number
                        // we make this a random number by creating a function getRandomNum
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

// play again event Listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play again'){
        window.location.reload();
}
});

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
    // game over - won
        // disable input
        guessInput.disabled = true;
        // change border color 
        guessInput.style.borderColor = 'green';
        // set message 
        setMessage(`${winNumber} is correct!, YOU WIN!`, 'green');

// the above can be written shorter by making a function and referring to it 
// gameOver(true, `${winNumber} is correct, YOU WIN!`);



}   else {
    // wrong number 
    // guessesLeft -= 1;
    guessesLeft = guessesLeft - 1;

    if(guessesLeft === 0){
        // game over lost
         // disable input
    guessInput.disabled = true;
    // change border color 
    guessInput.style.borderColor = 'red';
    // set message 
    setMessage(`Game over, you lost. The correct number was ${winNumber}`, 'red');
    } else {
        // game continues - answer wrong

        // change border color
        guessInput.style.borderColor = 'red';

        // clear input 
        guessInput.value = '';

        // tell user its the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }

}
});




// game over 
function gameOver(won, msg){
    let color; 
    won === true ? color = 'green' : color = 'red';

    // disable input
    guessInput.disabled = true;
    // change border color 
    guessInput.style.borderColor = 'color';
    // set style color
    message.style.color = color;
    // set message 
    setMessage(msg);

    // play again?
    guessBtn.value = 'play again';
    guessBtn.className += 'play-again';

}


//  get winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


// set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}