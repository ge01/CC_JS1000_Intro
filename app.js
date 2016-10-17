// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript":
// console.log("JavaScript".substring(0,4));
console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,13));
console.log("Hamburgers".substring(3,10));

// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "The United States of America";

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,4));

// Check if the user is ready to play!
confirm("I am ready to play!");
var age = prompt("What's your age");
if(age < 13)
{
    console.log("You are allowed to play but we take no resposiblity");
}
else
{
    console.log("Good luck and persist until you succeed");
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");
console.log(userAnswer);

if(userAnswer==="yes")
{
console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");

    }

var feedback = prompt("Please rate the game out of 10");
if (feedback > 8)
{
    console.log("Thank you! We should race at the next concert!");
    }
else
{
    console.log("I'll keep racticing coding and racing.");
    }
