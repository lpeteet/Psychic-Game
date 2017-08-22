/* Global Variables??? */
var charGuesses = ["z", "p", "o", "x"] //Thought of using Random Generator but wanted to try out New Arrar Knowledge!
var currGuessesIdx = 0;
var wins = 0;
var losses = 0;
var guessesAllowed = 9;
var guessesSoFar = []; //Characters already tried. Initialize to Empty Array

//CHANGE THIS TO INPUTCHAR???
/* CODE FROM
    https://stackoverflow.com/questions/9689109/how-to-display-javascript-variables-in-a-html-page-without-document-write
*/

document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    
/*     if (keyCode==13) {
        alert("You hit the enter key.");
    } else {
        alert("Oh no you didn't.");
    }
*/

    var keynum;
    var inputChar;

    if(window.event) { // IE
        keynum = e.keyCode;
        inputChar = String.fromCharCode(keynum);
    } else if(e.which){ // Netscape/Firefox/Opera
        keynum = e.which;
        inputChar = String.fromCharCode(keynum);
    }

    //debug
    //alert(inputChar);
    // DO THE ALGORITHM!!
    //
    if (inputChar.toLowerCase() == charGuesses[currGuessesIdx] ) {
        console.log("Guessed It!!");
        //THEY GUESSED IT!!
        wins += 1;
        if (currGuessesIdx > charGuesses.length() - 1) {
            console.log("");
            //Reached End of Array so Either End or Play Again
            var playAgain = confirm("Reached End of My Guesses.  Play Again?") //Can be combined, using for debugging currently
            if (playAgain) {
                currGuessesIdx = 0;
                wins = 0;
                losses = 0;
                guessesSoFar = [];
            }
            else {
                alert("Thanks for Playing!!");
                return;
            }
        }
    }
    else {
        //Didn't Guess it, Any Guesses left?
        losses += 1;
        if (losses >= guessesAllowed) {
            //GAME OVER, TOO MANY LOSSES
            //Reset
            losses = 0;
            guessesSoFar = [];
            alert("Too Many Losses; Game Over, Man!");
        }
        else {
            //Debugging
            alert("Debug: Keep Guessing");
            //More Guesses allowed
            guessesSoFar.push(inputChar); //Add current character to Guesses So Far Variable
        }
}

// Increment Character to Guess Array Index
currGuessesIdx += 1;
}

// JQuery example
/*
var $jsName = document.querySelector('.name');
var $jsValue = document.querySelector('.jsValue');

$jsName.addEventListener('input', function(event){
  $jsValue.innerHTML = $jsName.value;
}, false);


// var $jqName = $('.name');
var $jqValue = $('.jqValue');

$jqName.on('input', function(event){
  $jqValue.html($jqName.val());
});

 function myKeyPress(e) {
    var keynum;
    var inputChar;

    if(window.event) { // IE
      keynum = e.keyCode;
      inputChar = String.fromCharCode(keynum);
    } else if(e.which){ // Netscape/Firefox/Opera
      keynum = e.which;
      inputChar = String.fromCharCode(keynum);
    }
    
    alert(inputChar);
    // DO THE ALGORITHM!!
    if (inputChar.toLowerCase() == charGuesses[currGuessesIdx] ) {
        //THEY GUESSED IT!!
        wins += 1;
        if (currGuessesIdx > charGuesses.length() - 1) {
            //Reached End of Array so Either End or Play Again
            var playAgain = confirm("Reached End of My Guesses.  Play Again?")
            if (playAgain) {
                currGuessesIdx = 0;
                wins = 0;
                losses = 0;
                guessesSoFar = [];
            }
            else {
                alert("Thanks for Playing!!");
                return;
            }
        }
    }
    else {
        losses += 1;
        if (losses >= guessesAllowed) {
            //GAME OVER, TOO MANY LOSSES
            //Reset
            losses = 0;
            guessesSoFar = [];
        }
        else {
            guessesSoFar.push(inputChar);
        }
    }

    // Increment Character to Guess Array Index
    currGuessesIdx += 1;
}
*/

