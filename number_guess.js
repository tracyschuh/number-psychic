function numberGuess() {
    var numberInput = document.getElementById("userInput").value;
    var guessOutput = ""; // empty string to hold loop output data
    var guessCompare = "";
    var low;
    var high;
    
    // test for integer
    if (!Number.isInteger(+numberInput)) { // adding '+' to var numberInput changes a string to a number
        swal("Oops!", "You must enter a whole number.", "error");
        return;
    // test for valid input number from 1 to 999
    } else if (numberInput < 1 || numberInput > 999) {
        swal("Oops!", "Your number must be from 1 to 999.", "error");
        return;
    // if number is OK, narrow down guess to range of 100, grab a random number in that range, and proceed with guessing
    } else if (numberInput <= 100) { guess = Math.floor(Math.random() * 100) + 1; low = 1; high = 100;  // Math.random() * number options + starting number
    } else if (numberInput > 100 && numberInput < 201) { guess = Math.floor(Math.random() * 100) + 101; low = 101; high = 200;
    } else if (numberInput > 200 && numberInput < 301) { guess = Math.floor(Math.random() * 100) + 201; low = 201; high = 300;
    } else if (numberInput > 300 && numberInput < 401) { guess = Math.floor(Math.random() * 100) + 301; low = 301; high = 400;
    } else if (numberInput > 400 && numberInput < 501) { guess = Math.floor(Math.random() * 100) + 401; low = 401; high = 500;
    } else if (numberInput > 500 && numberInput < 601) { guess = Math.floor(Math.random() * 100) + 501; low = 501; high = 600;
    } else if (numberInput > 600 && numberInput < 701) { guess = Math.floor(Math.random() * 100) + 601; low = 601; high = 700;
    } else if (numberInput > 700 && numberInput < 801) { guess = Math.floor(Math.random() * 100) + 701; low = 701; high = 800;
    } else if (numberInput > 800 && numberInput < 901) { guess = Math.floor(Math.random() * 100) + 801; low = 801; high = 900;
    } else if (numberInput > 900 && numberInput < 1000) { guess = Math.floor(Math.random() * 99) + 901; low = 901; high = 999;
    } 
        for (x = 1; x < 11; x++) { // guess counter
            // guess vs. input comparison output
            if (guess === +numberInput) { 
                guessCompare = guess + " = " + numberInput;
            } else if (guess > +numberInput) { 
                guessCompare = guess + " > " + numberInput;
            } else if (guess < +numberInput) { 
                guessCompare = guess + " < " + numberInput;
            }
            guessOutput += "<strong>Guess #" + x + ": " + guess + "</strong><br>" + "(" + guessCompare + ")" + "<br><br>"; // each guess goes on first line, comparison on second line
                // figure out the number
                if (guess === +numberInput) {
                    swal("I'm psychic!", "Your number is " + guess + ".", "success");
                    break;
                } else if (x == 10) { // max number of guesses allowed
                    swal("No match found.", "My psychic abilities must be on vacation today.", "error");
                } else 
                    guess = Math.round((low + high)/2); // narrow down the guess range to better ensure success of correct guess
                    if (guess > +numberInput) {
                        high = guess - 1;
                    } else 
                        low = guess + 1;
        } // end for loop      
    document.getElementById("guessResults").innerHTML = "<p>" + guessOutput + "</p>"; // using innerHTML to add HTML to the page in our div tag and concatenating the loop output  
    
} // end function numberGuess()

    