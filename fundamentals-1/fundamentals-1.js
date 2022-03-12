// 1. Setting and Swapping
//Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = "Jomel";
var tempHolder = "";

var myNumber = myName;
var myName = tempHolder;

console.log(myNumber); // Jomel
console.log(myName); // 42

// 2. Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

for (i=-52; i <= 1066; i++) {
    console.log(i);
}

// 3. Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful() {
    console.log("good morning!");
}

for (i=1; i <= 98; i++) {
    beCheerful();
}

// 4. Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (i=-300; i <=0; i++) {
    if ((i % 3) == 0) {
        if ((i == -3) || (i == -6)) {continue;}
        console.log(i);
    }
}

// 5. Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
var i = 2000;
while (i <= 5280) {
    console.log(i);
    i++;
}

// 6. You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

function birthday(month, day) {
    if (month == 7 && day == 28) {
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}

birthday(7, 28); // "How did you know?"
birthday(1, 1); // "Just another day..."