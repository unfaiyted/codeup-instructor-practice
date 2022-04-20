'use strict';

/**
 * FOR LOOPS
 * */


/**
 * showMultiplicationTable
 *
 * Accepts a number and console.logs the multiplication
 * table for that number (just multiply by the numbers 1 through 10)
 * @param number - number to multiply with
 */
function showMultiplicationTable(number) {
    var total; //running total accumulation

    // start at 1, going to 10, add 1 at a time
    for(var i = 1; i <= 10; i++) {
        total = i*number; // doubles the value of i
        // outputs something like "5 x 6 = 30"
        console.log(number + ' x ' + i + ' = ' + total);
    }

}

showMultiplicationTable(7);




/**
 * randomValue
 *
 * Returns random integer value between min and max values
 * @param min - smallest possible value
 * @param max - largest possible value
 * @returns {*}
 */
function randomValue(min,max) {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 *  getOddOrEvenRandomNumbers
 *
 *  Use a for loop and the code from the previous lessons to generate 10 random numbers
 *  between 20 and 200 and output to the console whether each number is odd or even. For example:
 * @param numberToGenerate - number of random numbers to generate.
 * @param min - lowest number we will generate
 * @param max - max number we will generate
 */
function getOddOrEvenRandomNumbers(numberToGenerate, min, max) {
    for(var i = 1; i <= numberToGenerate; i++) {
        var random = randomValue(min, max);
        console.log((random % 2 === 0) ? random + ' is even' : random + ' is odd');
    }

}

// 10 Random values between 20 and 200.
getOddOrEvenRandomNumbers(10,20, 200);


/**
 * showDigitsMultipleTimes
 *
 * Shows digits the number of times the digit represents.
 * i.e One 1, Two, 2's...
 * @param max - how many digits out to repeat, 9 will output 1 to 9 digits repeated
 */
function showDigitsMultipleTimes(max) {

    for(var i = 1; i <= max;i++) { // goes from i to max set in function
        // if max is set to 3 it will only go to 3, 3's for example
        var string = i.toString().repeat(i)
        console.log(string);
    }

}

showDigitsMultipleTimes(9);


/**
 * subtractValueFromMax
 *
 * Subtract the value from max and print out the new value till zeroed out
 * @param max - the maxium value that the loop will start at
 * @param subtract - each loop will jump by this amount
 */
function subtractValueFromMax(max, subtract) {
    for (var i = max; i >= 0; i -= subtract) { // subtracting by the value set int subtract(5) below
        console.log(i);
    }
}

subtractValueFromMax(100, 5);


