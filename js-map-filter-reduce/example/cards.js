const camelToTitleCase = (string) => {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}

/**
 * card
 * Creates a card html
 * @param id
 * @param header
 * @param main
 * @param footer
 * @param className
 * @returns {`
    <div class="card ${string}"  id="card_${string}" data-id="${string}">
            <div class="header"> </div>
            <div class="body">

            </div>
            <div class="footer"> </div>
    </div>`}
 */
const card = (id, header = '', main = '', footer = '', className) => {
    return `
    <div class="card ${className}"  id="card_${id}" data-id="${id}">
            <div class="header"> ${header}</div>
            <div class="body">
               ${main}
            </div>
            <div class="footer"> ${footer}</div>
    </div>`
}

/**
 * createCard
 * Generates a single Card to display a person
 * @param firstName
 * @param lastName
 * @param street
 * @param city
 * @param state
 * @param zipCode
 * @param id
 * @returns {string}
 */
const createUserCard = ({firstName, lastName, address: {street, city, state, zipCode}, id}) => {
    const header = `${lastName}, ${firstName}`
    const main = ` 
        <ul>
              ${createCardLi("Street", street)}
              ${createCardLi("City", city)}
              ${createCardLi("State", state)}
              ${createCardLi("Zip Code", zipCode)}
        </ul> `
    const footer = "Put Animals"
    return card(id, header, main, footer);
}

/**
 * createSummaryCard
 * @param totalCards
 * @param avgAge
 * @param avgAge
 * @param totalFriends
 * @param fruitsSeen
 * @returns {string}
 */
const createSummaryCard = (totalCards, avgAge) => {

    //TODO: Create map for the createCardLi
   const main = ` <ul>
                    ${createCardLi("Total Cards", totalCards)}
                    ${createCardLi("Average Age", avgAge.toFixed(2))}
                    ${createCardLi("Total Friends", totalFriends)} 
                </ul>`
    const footer = `<span>Fruit:</span> ${fruitsSeen.map((fruit) => `<span>${fruit}</span> `).join("")}`
    return card(id, avgAge, main, footer, "summary")

}
// Show all the people objects

/**
 * cardGroup
 * Creates a group of Cards
 * @param title
 * @param cards
 * @returns {`
    <div class="card-container">
        <div class="card-header">${string}</div>
        <div class="cards">${*}</div>
    </div>`}
 */
const cardGroup = (title, cards, id) => {
    return `
    <div class="card-container" id="${id}">    
        <div class="card-header">${title}</div>
        <div class="cards">${cards.map((card) => card).join("")}</div>        
    </div>`
}

/**
 * createCardLi
 * Creates a single List Item to be displayed
 * @param prefix
 * @param value
 * @returns {`  <li class="item">
                <div class="prefix">${string}:</div>
                <div class="value">${string}</div>
            </li>`}
 */
const createCardLi = (prefix, value) => {
    return `<li class="item">
                <div class="prefix">${prefix}:</div>
                <div class="value">${value}</div>
            </li>`
}
