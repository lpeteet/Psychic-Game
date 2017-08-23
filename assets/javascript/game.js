/* Global Variables??? */
var charGuesses = ["z", "p", "o", "x"] //Thought of using Random Generator but wanted to try out New Array Knowledge!
var currGuessesIdx = 0;
var wins = 0;
var losses = 0;
var guessesAllowed = 9;
var guessesSoFar = []; //Characters already tried. Initialize to Empty Array

// This function is run whenever the user presses a key.
//document.onkeyup = function(event) {
//}
//OR
document.addEventListener("keyup", keyUpProcess, false);
//OR
//Trying version inside my HTML File with Inline Script

//This version will not fire on Page Load when Event Adds and Calls The function in the above version:
//document.addEventListener("keyup", function() { CODE HERE; }, false);
/* window.addEventListener(
    "DOMContentLoaded", keyUpProcess(event) {
        //document.getElementById('date').addEventListener("change", validateDate);
        document.addEventListener("keyup", keyUpProcess, false);
    }
);
 */
//TRY KEYUP!!
//document.onkeyup = function(event) {
    
function keyUpProcess(e) {
    var keyCode = e.keyCode;
    
    var keynum;
    var inputChar;

    console.log("charGuesses: '" + charGuesses + "'");
    console.log("currGuessesIdx: '" + currGuessesIdx + "'");
    console.log("charGuesses[currGuessesIdx]: '" + charGuesses[currGuessesIdx] + "'");
    
    if(window.event) { // IE
        keynum = e.keyCode;
        inputChar = String.fromCharCode(keynum);
    } else if(e.which){ // Netscape/Firefox/Opera
        keynum = e.which;
        inputChar = String.fromCharCode(keynum);
    }
    console.log("inputChar = '" + inputChar + "'");
    inputChar = inputChar.toLowerCase();
    console.log("inputChar.toLowerCase() = '" + inputChar + "'");
    
    //debug
    //alert(inputChar);
    // DO THE ALGORITHM!!
    //
    if (inputChar.toLowerCase() == charGuesses[currGuessesIdx]) {
        console.log("Guessed It!!");
        //THEY GUESSED IT!!
        wins += 1;
        //Done with Array?
        if ( (currGuessesIdx + 1) >= charGuesses.length) {
            console.log("End of Guesses Array!");
            //Reached End of Array so Either End or Play Again
            var playAgain = confirm("Reached End of My Guesses.  Play Again?") //Can be combined, using for debugging currently
            if (playAgain) {
                currGuessesIdx++;
                console.log("New Computer Char: '" + charGuesses[currGuessesIdx] + "'");
                wins = 0;
                losses = 0;
                guessesSoFar = [];
            }
            else {
                alert("Thanks for Playing!!");
                return;
            }
        }
        else {
            //Guess Array not finished, continue after this win!
            currGuessesIdx++;
            guessesSoFar = [];
            console.log("New Computer Char: '" + charGuesses[currGuessesIdx] + "'");
        }
    }
    else {
        //Didn't Guess it, Any Guesses left?
        console.log("Didn't Guess it. Computer: '" + charGuesses[currGuessesIdx] + "'; Your Guess: '" + inputChar.toLowerCase() + "'");
        if ( (guessesSoFar.length + 1) >= guessesAllowed) {
            //No More Guesses Left, Let them try again
            console.log("No More Guesses Allowed on this iteration");
            currGuessesIdx++;
            guessesSoFar = [];
            console.log("New Computer Char: '" + charGuesses[currGuessesIdx] + "'");
            //We call this a Loss
            losses++;
        }
        else {
            //Guesses Left, Push current Guess and Continue As is!
            guessesSoFar.push(inputChar); //Add current character to Guesses So Far Variable
            console.log("Continuing, Guesses So Far after Push: " + guessesSoFar);
        }
    }

    var winsElement = document.getElementById("wins-text");
    var lossesElement = document.getElementById("losses-text");
    var guessesLeftElement = document.getElementById("guessesleft-text");
    var guessesSoFarElement = document.getElementById("guessessofar-text");

    console.log("Repainting Elements");
    winsElement.textContent = "Wins: " + wins;
    lossesElement.textContent = "Losses: " + losses;
    guessesLeftElement.textContent = "Guesses Remaining: " + (guessesAllowed - guessesSoFar.length);

    var tmpString;
    if (guessesSoFar.length == 0) {
        tmpString = "";
    } else {
        tmpString = guessesSoFar[0] + ", ";
    }
    for(var i=1; i < guessesSoFar.length; i++) {
        tmpString += (guessesSoFar[i] + ", ");
     }
    
    guessesSoFarElement.textContent = "Guesses so far: " + tmpString.trim();
}

/* window.addEventListener(
    "DOMContentLoaded", keyUpProcess(event) {
        //document.getElementById('date').addEventListener("change", validateDate);
        document.addEventListener("keyup", keyUpProcess, false);
    }
);
 */
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

