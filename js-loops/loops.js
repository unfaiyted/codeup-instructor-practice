'use strict';

// TODO: Daily Meetings
// Break at 1000.
// Break at 11:45
// Lunch at 12:30-130
// Break at 230
// Break at 4

// introduce yourself
//- Dane Miller, codeup grad 2018 from ulysses, veteran us army, worked at multiple fortune 500 companies including usaa, chase
// I love web design and coding since a young age, and I really look forward to getting to teach you guys today.


// TODO: While Loops Examples:

// OK Lets look at the first example of a while loop

// A loop is setup in this way.

while (condition) {
    // code we are going to run
}

// so what is condition? Condition is a boolean statement
// lets say we setup this condition as a variable
var condition = true;

while (condition) {
    // code we are going to run
}

// The code inside of the block will run as long as the condition is true.

while (true) {
    // this is the same thing
}

while (condition === true) {
    // this is the long form of that.
}


var isMomHome = true;
// never runs if mom is false when this line gets read.
while (isMomHome) {
    // Do the chores cuz mom is home!

    // if mom leaves early i'll quit doing my chores and play video games.
    console.log("I'm doing chores!")

}

var count = 10;

while (count <= 100) {
    if(count %2 ) console.log(count)
} // ASK: What will this do? What iwll print out?


while ((count <= 100) === true) // these two are the same thing.



// These are example of while statements.
// questions... ASK?














// TODO: DO-While:

// A do while is different in that it always runs the code block at least once! Always.
// Why is this?

do {
    // This part of the code is read first
} while (); // then we check to see if meets the criteria for the condition


condition = true;

do {
 // If condition is true it will run more than once. Or until its not true
} while (condition)


var count = 50;

do {
    console.log(count + "going down");
    count--;
} while (count > 0);


do {
    console.log(count + "going up!")
} while (count < 50)

// Both while and do whiles can hanle more than one conditon like this

count = 10;

do {
    // this creates a between logic
    // if count is over 50  or less then 100
    count ++;
} while (count > 50 && count < 100)




// TODO: Simple syntax version
condition = true;

do {
    // If condition is true it will run more than once. Or until its not true
} while (condition)




// TODO: Between  two values Example (range)
var count = 40;
do {
    // this creates a between logic
    // if count is over 50  or less then 100
    count ++;
} while (count > 50 && count < 100)



// TODO: Complex multi variable one

// Lets say we want to start our chores, but we only want to do them if mom is home, otherwise
// were total slackers and are going to play vidoe games or something

var choreCount = 10;
var isMomHome = false;
// so lets make that in code
do {
    console.log("doing my chores ")
    choreCount--;

} while (isMomHome || choreCount > 0);

console.log("count:", count)

// So count is not in the range, yet it increments one time.... what do we think about this.





















// TODO:  FOR Loops

for (/*initialization*/; /*condition*/; /*increment*/) {
    // body
}

// the for loop is only 3 statements. Should be the 3 loop maybe

// This is what it looks like
// for(var i = 0; i<= 10; i++) {
//     console.log("i:", i);
// }


//use fori  shorthand....
//TODO: simple loop example

/*
for (var j = 0; j < 100; j+=2) {
    console.log("j:", j)
}
*/

// can start anywhere
// for (var k = 50; k < 60 ; j++) {
//     console.log("k:", k)
// }

// weird and uncommon loops
// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }



// Lets look at the totalChores exampes again.
// var totalChores = 10;
//
// for (var i = 0; i <= totalChores; i++) {
//     if (!isMomHome) i = totalChores;
//     // ok nvm not doing this, moms not here. // could use break. later.
//     var choresLeft = totalChores - i;
//
//     console.log("Mom I have " + choresLeft + " till im done");
//     // Do the chores till they are all done
//     // Once the count gets to the totalChores it will end.
//
// }

// Break Examples

var numberToBreakAt = 90;
var numberToContinueAt = 50;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToContinueAt) {
        console.log("Going to the next iteration")
        continue;
    }

    if (i === numberToBreakAt) {
        console.log('Going to kill the loop!');
        break;
        console.log('You will never see this line.');
    }
}

// count to 10 skip 5;
var count = 0;
while (count < 10) {
    count++;
    if(count === 5) continue; // moves to the next iteration of the loop
    console.log("count", count);
}

// stop loop at 3
count = 0;
do {
    if(count === 3) break; // ENDS THE LOOP
} while (count < 10)


for(var i = 0; i <=100; i++) {

    var isDivisibleBy2 = (i %2 === 0); // returns a boolean
    var isDivisibleBy5 = (i %5 === 0); // returns a boolean

    if(isDivisibleBy5 && isDivisibleBy5) console.log("BOTH");
    if(isDivisibleBy2 && !isDivisibleBy5) console.log(i);
    if(isDivisibleBy5 && !isDivisibleBy2) console.log(i);

    if(!isDivisibleBy2 && !isDivisibleBy5) console.log(i,"NOT PRINTED");

}

var total = 0;
for (var i = 0; i < 50; i++) {
    total += i;
    console.log("accumulating total:", total)
}
console.log("total:", total)

























// Ok so lets look at the while loop

// again the while loop runs WHILE something is true

// it looks somethign like this


var condition = true;

while (condition) {
// same as: while (condition === true)

    // some code is going to happen here.
    // and we will see that

    alert("hello condition!");
    condition = false;

    // When will this loop end? ]
    // How many times will it run?

}

// another while example


var totalItems = 10;

while (totalItems > 0) {
    // while ((totalItems > 0) === true) { }

    console.log("totalItems left :", totalItems);
    // let's decrement the total items now
    // so here we have:
    totalItems--;

    // So what is this going to output?
    // How many times is this loop going to run?
    // When will the loop end?
}

// while loop example #3


do {
    // do this thing at least once and then....

    // check if the condition is true to run it again
} while (condition)

// So lets imagine why you would need a do-while?
// Anytime someone is making code where you want the block to run once

var i = true;
do {
    console.log("run count" + i) // will output the total count
    i++; //incrementor
} while(i < 10) //  this is the same as while((i <10) === true)

// what will i equal when this loop completes?

// Lets look at that...


//
// 4 loop dissected
// for
//     ( var i = 0;  // this is where we define the value we will use as part of the loop
//       i < 10; // this is the condition
//      i++ ) { // operation to play on the variable ///adding 1 to the value
// The 4 loop has 3 statements inside it, variable declaration, conditional, and the increment operation
for(var i = 0; i < 10; i++) {
    // the code here runs until the
    // condition is no longer true
}

// The 4 loop has 3 statements inside it, variable declaration, conditional, and the increment operation
for(var i = 0; i < 10; i++) {
    console.log("Loop has ran " + i + "times");
}


var numberToBreakAt = 90;
var numberToContinueAt = 50;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToContinueAt) {
        console.log("Going to the next iteration")
        continue;
    }

    if (i === numberToBreakAt) {
        console.log('Going to kill the loop!');
        break;
        console.log('You will never see this line.');
    }
}



// TODO: While Loops Examples:



// TODO: DO While Loop Examples:

var isMomHome = true;
var totalChores = 10;

do { // will always run once.
    //start chores

    console.log("totalChores :", totalChores); // prints out the chores list so far.
    totalChores--; //decrement the chores
    console.log("Mom, I'm working on a chore. I have " + totalChores + " left");

    if(totalChores === 0) { // if block runs when we get to zero chores left.
        console.log("Mom is leaving now that the chores are done")
        isMomHome = false; // sets mom home to false, since mom is going to leave.
    }

} while (isMomHome); // oh, wait moms not home. I'm not doing these chores.

