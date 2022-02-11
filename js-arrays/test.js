'use strict'

const testString = "This is a string of text that I want to reverse!"

function reverseEachWord(str) {

    const arr1 = str.split(" ");
    let arr2 = [];

    for(const word of arr1) {
        let reverseWord = word.split("").reverse("").join("")
        arr2.push(reverseWord)
    }

    return arr2.join(" ");
}


console.log(reverseEachWord(testString));