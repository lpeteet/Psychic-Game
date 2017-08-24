/* Global Variables??? */
var charGuesses = ["z", "o", "e", "c"];
var currGuessesIdx = 0;
var wins = 0;
var losses = 0;
var currentWord = "";
var guessesAllowed = 9;
var guessesSoFar = []; //Characters already tried. Initialize to Empty Array

document.addEventListener("keyup", keyUpProcess, false);

function EndOfPlay() {

    console.log("End of Guesses Array!");
    //Reached End of Array so Either End or Play Again
    var playAgain = confirm("Reached End of My Guesses.  Play Again?") //Can be combined, using for debugging currently
    if (playAgain) {
        currGuessesIdx = 0;
        console.log("New Computer Char: '" + charGuesses[currGuessesIdx] + "'");
        wins = 0;
        losses = 0;
        guessesSoFar = [];
        return "a"; //Play Again
    }
    else {
        alert("Thanks for Playing!!");
        return "x"; //Exit
    }
}

function keyUpProcess(e) {
    var keyCode = e.keyCode;
    
    var keynum;
    var inputChar;
    var retVal;

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
    
    if (inputChar.toLowerCase() == charGuesses[currGuessesIdx]) {
        console.log("Guessed It!!");
        //THEY GUESSED IT!!
        wins += 1;
        //Done with Array?
        if ( (currGuessesIdx + 1) >= charGuesses.length) {
            retVal = EndOfPlay();
            if (retVal == "x") {
                //exit();
                document.location.reload();
            }
            //Default is Play Again
        }
        currGuessesIdx++;
    }
    else {
        //Didn't Guess it, Any Guesses left?
        console.log("Didn't Guess it. Computer: '" + charGuesses[currGuessesIdx] + "'; Your Guess: '" + inputChar.toLowerCase() + "'");
        if ( (guessesSoFar.length + 1) >= guessesAllowed) {
            //We call this a Loss
            losses++;
            if ( (currGuessesIdx + 1) >= charGuesses.length) {
                retVal = EndOfPlay();
                if (retVal == "x") {
                    document.location.reload();
                }
                //Default is Play Again
            } else {
                //No More Guesses Left, Let them try again
                console.log("No More Guesses Allowed on this iteration");
                currGuessesIdx++;
                guessesSoFar = [];
                console.log("New Computer Char: '" + charGuesses[currGuessesIdx] + "'");
            }
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

