



// Visually represent what MAP, Filter, and Reduce accomplish.


// 1. Create what an object looks like.
// 2. show animation of mapping props to new props.


// visual thought: First you have a list of objects, then those items get translated to new objects..

// VT: filter, has a bunch of objects then you FILTER on somethign and reduce the number  of objects.


// Reduce, takes an array of objects and then reduces them down to a calcualted value based on the function


// Situation: We have an array that looks like this:
console.log(peopleObject);

const cardGroup = (title, cards) => {
    return `
    <div class="card-container">    
        <div class="card-header">${title}</div>
        <div class="cards">${cards.map((card) => card).join("")}</div>        
    </div>`
}

const createCard = ({firstName, lastName, address: {street, city, state, zipCode}, id }) => {
    return `
    <div class="card" >
        <input type="hidden" id="card_${id}" data-id="${id}">
       <div class="header">${lastName}, ${firstName}</div>
       <div class="body">
               
        <ul>
        
            <li class="item">
                <div class="prefix">Street:</div>
                <div class="value">${street}</div>
            </li>
            
            <li class="item">
                <div class="prefix">City:</div>
                <div class="value">${city}</div>
            </li>
            
              <li class="item">
                <div class="prefix">State:</div>
                <div class="value">${state}</div>
            </li>
            
              <li class="item">
                <div class="prefix">Zip Code:</div>
                <div class="value">${zipCode}</div>
            </li>
            
        </ul>   
        
        </div>
        <div class="footer"> </div>
    </div>`
}
// Show all the people objects

// Well the people object isnt quite in the right format for my card!
// What ever will we do?
// MAP It!

// The original object has these

// name: this contains full name
// address, this contains ths full address

// The name field is going to be mappsed to 2 fields
// 1. First Name (firstName)
// 2. Last Name  (lastName)

// The address field is going to be mapped to 4 fields
// 1. Street
// 2. City
// 3. State
// 4. zipCode


// Lets create a new OBJECT using the require fields for the card!

//TODO: const cardPeople = peopleObject.map(mapToCard)

// Here we have the high order function, map . this function expects a function that will resolve the mapping logic.
// We will create the mapToCard function

const mapToCard = (person) => {

    const firstName = person.name.split(" ")[0];
    const lastName = person.name.split(" ")[1];

    const address = person.address.split(",");


    return {
        ...person, // could exclude, if you wont need the original fields
        firstName,
        lastName,
        address: {
            street: address[0].trim(),
            city: address[1].trim(),
            state: address[2].trim(),
            zipCode: address[3].trim()
        }
    }
}

const cardPeople = peopleObject.map(mapToCard);

console.log(cardPeople);

// Alright now we have an object where we have remapped several of the fields so that we can view them on our cards!

// We want to go ahead and find a way to display our cards to the screen!
// So we defined here a way to do that by attaching it to an existing DOM element.
const attachTo = document.getElementById("visual");

// Lets loop through all the cardPeople items and create cards for them

let cards = [];
for(const card of cardPeople) {
     cards.push(createCard(card));
}

attachTo.innerHTML += cardGroup("All People", cards);

//

// Now we visually have all of the people displayed on cards.
// What if we were interested in only displaying people based on
// specific criteria?

// We can use FILTER!

// Filter is a high order function that takes in a function as its argument
// It does not change the original array in any way. It returns a new one.

const filterOn = (person) => {
    if(person.age > 30) return true;
    return false;
}

const ageFilteredPeople = cardPeople.filter(filterOn);

// We now have less people returned, because only some of the
// people were able to meet the criteria.
console.log(ageFilteredPeople);


cards = [];
for(const card of ageFilteredPeople) {
    cards.push(createCard(card));
}


// Only 5 of the cards actually made it on this list
attachTo.innerHTML += cardGroup("People over 30", cards);



// Lets do the filter again but this time we will get under 30
// At this point we have some reusable code that we could clean up
// Lets quickly create a function that handles populating the cards array
// and then appends it to the page element.
const appendCards = (title, array) => {

    const cards = [];

    for(const card of array) {
        cards.push(createCard(card));
    }

    attachTo.innerHTML += cardGroup(title, cards);
}


const filterOnYoung = (person) => {
    if(person.age <= 30) return true;
    return false;
}

const underAgeFilteredPeople = cardPeople.filter(filterOnYoung);
console.log(underAgeFilteredPeople);

appendCards("People under 30 (or equal)", underAgeFilteredPeople)


// So we have now been able to map fields to new fields using the MAP
// function. The MAP function allowed us to then take those fields.
// and display them to the cards that were created.

// We then filtered based on age to get younger and older people as seperate groups.


// Finally we're going to learn about reduce.
// Reduce function literally takes some value and manipulates it to get a total value.

// So lets say that we have this list of people.
// The company would like to get some data from each one of these populated lists.

// The company wants to know a few things.
// 1. The total number of items in the cards list
// 2. The average age of the people in that list
// 3. The total number of friends this group has
// 4. The groups most common favorite fruit.


// Lets start by first getting our original unfiltered array.
// previousValue is the accumulator/
// The accumulator addes the values together and keeps the values
// It will be the value that is eventually returned in some form

const isUniqueToArray = (array, itemToCompare) => {
    for(const item of array) {
        if(item === itemToCompare) return false;
    }
    return true;
}

const getComputedValues = (previousValue, currentValue, index, originalArray) => {

    // Index Zero is the ORIGINAL previousValue value
    if(index === 1) {
        previousValue = {
            totalCards: 1,
            avgAge: previousValue.age / originalArray.length,
            totalFriends: previousValue.friends.length,
            fruitsSeen: [previousValue.favoriteFruit]
        }
    }

    // If its a unique value push it to the array
    if (isUniqueToArray(previousValue.fruitsSeen, currentValue.favoriteFruit)) {
        previousValue.fruitsSeen.push(currentValue.favoriteFruit)
    }

    return {
        totalCards: previousValue.totalCards+1,
        avgAge: previousValue.avgAge + currentValue.age / originalArray.length,
        totalFriends: previousValue.totalFriends+currentValue.friends.length,
        fruitsSeen: previousValue.fruitsSeen
    }
}

const reducedCards = cardPeople.reduce(getComputedValues);
const ageReducedCards = ageFilteredPeople.reduce(getComputedValues);
const underAgeReducedCards = underAgeFilteredPeople.reduce(getComputedValues)

console.log(reducedCards, underAgeReducedCards, ageReducedCards);

