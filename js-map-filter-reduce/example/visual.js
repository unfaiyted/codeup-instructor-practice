// Visually represent what MAP, Filter, and Reduce might do in a practical example

/**
 * mapToCard
 * Takes an instance of a person from an  array of people and maps the elements needed to display the card.
 * @param person
 * @returns {*&{firstName: *, lastName: *, address: {zipCode: string, city: string, street: string, state: string}}}
 */
const mapCardProperties = (person) => {
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
const people = peopleObject.map(mapCardProperties);

console.log("people:", people)

// Alright now we have an object where we have remapped several of the fields so that we can view them on our cards!

// We want to go ahead and find a way to display our cards to the screen!
// So we defined here a way to do that by attaching it to an existing DOM element.
const attachTo = document.getElementById("visual");

const generateAllCards = () => {
// Let's loop through all the cardPeople items and create cards for them
    let cards = people.map((person) => createUserCard(person))
    attachTo.innerHTML += cardGroup("All People", cards,"all");
}

const generateFilteredCards = (filterValue, isOver) => {
    const filterOver = (person) => person.age <= filterValue;
    const filterUnder = (person) => person.age > filterValue;

    const filteredPeople = people.filter((isOver) ?  filterOver : filterUnder)

    const overUnder = (isOver) ? "over" : "under";

    const cards = filteredPeople.map((person) => createUserCard(person));
    attachTo.innerHTML += cardGroup(`People ${overUnder} ${filterValue} ${(isOver)? "(or equal)" : "" }`, cards, overUnder);

    // console.log("filteredPeople:", filteredPeople)

    return filteredPeople;

}

// So we have now been able to map fields to new fields using the MAP
// function. The MAP function allowed us to then take those fields.
// and display them to the cards that were created.

// We then filtered based on age to get younger and older people as separate groups.

// Finally we're going to learn about reduce.
// Reduce function literally takes some value and manipulates it to get a total value.

// So lets say that we have this list of people.
// The company would like to get some data from each one of these populated lists.

// The company wants to know a few things.
// 1. The total number of items in the cards list
// 2. The average age of the people in that list
// 3. The total number of friends this group has
// 4. The groups most common favorite fruit.

const generateSummaryCards = (ageFilteredPeople, underAgeFilteredPeople) => {


    // IF I was going to reuse this we could move it outside this
    // function changing the scope and allowing us to access it.
    const getSummaryValue = (previousValue, currentValue, index) => {
        const {fruitsSeen, totalCards, totalFriends, avgAge} = previousValue; // could move into the function definition

        if (fruitsSeen.indexOf(currentValue.favoriteFruit) === -1) fruitsSeen.push(currentValue.favoriteFruit)

        console.log("currentValue:", currentValue, index);

        return {
            totalCards: totalCards + 1,
            avgAge: ((avgAge * index) + currentValue.age) / (index + 1),
            totalFriends: totalFriends + currentValue.friends.length,
            fruitsSeen
        }
    }

    const initialValue = {
        totalCards: 0,
        avgAge: 0,
        totalFriends: 0,
        fruitsSeen: []
    };

    console.log("ageFilteredPeople:", ageFilteredPeople)
    console.log("underAgeFilteredPeople:", underAgeFilteredPeople)

    // JSON Parse is to prevent it from modifying the fruitsSeen value between runs.

    const reducedCards = people.reduce(getSummaryValue,  JSON.parse(JSON.stringify(initialValue)));
    const ageReducedCards = ageFilteredPeople.reduce(getSummaryValue, JSON.parse(JSON.stringify(initialValue)));
    const underAgeReducedCards = underAgeFilteredPeople.reduce(getSummaryValue,  JSON.parse(JSON.stringify(initialValue)))

    console.log("ageReducedCards:", ageReducedCards)
    // Appends Summary Cards to DOM, after the title
    document.querySelector("#all > .card-header")
        .insertAdjacentHTML("afterend", createSummaryCard(reducedCards, "Summary"))
    document.querySelector("#over > .card-header")
        .insertAdjacentHTML("afterend", createSummaryCard(ageReducedCards, "Summary"))
    document.querySelector("#under > .card-header")
        .insertAdjacentHTML("afterend", createSummaryCard(underAgeReducedCards, "Summary"))

}

const reset = () => {
    attachTo.innerHTML = "";
}


// Listening for changes to the Filter value
document.getElementById("ageRequirement").addEventListener("change", (e) => {
    console.log("e.target:", e.target.value)

    //Removes cards from screen
    reset();

    // Generates all the cards
    generateAllCards();

    const over = generateFilteredCards(e.target.value, true);
    const under = generateFilteredCards(e.target.value, false)

    // Creates Summary Cards
    generateSummaryCards(over, under)

})