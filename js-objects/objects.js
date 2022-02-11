(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Rick",
        lastName: "Sanchez"
    }

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from" + this.firstName + " " + this.lastName;
    }

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach((item) => {
        console.log("Name:", item.name, "Amount:", item.amount, "Discount:", (item.amount > 200) ? item.amount * 0.88 : item.amount)
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(title, author) {
        var name = author.split(" ");
        return {
            title,
            author: {
                firstName: name[0],
                lastName: name[1]
            }
        }
    }

    books.push(createBook("What in the world", "James Miller"));
    books.push(createBook("What in the world", "James Miller"))
    books.push(createBook("What in the world", "James Miller"))
    books.push(createBook("What in the world", "James Miller"))


    books.forEach((item, i) => {
        console.log("Book # ", i + 1);
        console.log("Title: ", item.title)
        console.log("Author: ", item.author.firstName, item.author.lastName);
        console.log("---");
    })



    // Personal Trials
    let testObject = { nest: {}}

    const  nestIt = (input) => {
        return  {
            ...input,
            nest: {
              ...input
        }
      }
    };


    function recursion (input, limit = 50) {
        if(limit <= 0) return input;

        input = nestIt(input);
        return recursion(input, limit-1)
    }


    testObject = recursion(testObject, 40);


    console.log(testObject);


    //displayRecursion = "";

    function startRender (parentObject) {
        // input: get the original object.

        // check object for key, nest.
        const attachTo = document.getElementById("objects");

        let i = 0;
        let children;
        let objectToTravel = Object.assign(parentObject);

        while (objectToTravel.nest) {

            if(i === 0) {
                children = createChild(attachTo,objectToTravel,i);
                objectToTravel = { ...objectToTravel.nest};
                i++;
                continue;
            }


            children = createChild(children ,objectToTravel,i);
            objectToTravel = { ...objectToTravel.nest};

            console.log(i, objectToTravel)
            i++;

        }

        // if present, then create a Child, repeat till nest is no longer present.





        // attach to dom.
        attachTo.appendChild(children)
    }

    function createChild(parent, object, i) {

        if (!object.nest) return;

        console.log(parent, object,i+1 )

        const child = document.createElement("div")
        child.appendChild(document.createTextNode("Nest LVL # " + (i+1) ))
        // append child
        parent.appendChild(child);

        return child
    }


    startRender(testObject);

    // Create a file called objects-mini-exercises.html and include script tags to complete the following mini exercises:
    //     -- Mini Exercise 1
    // Create a few beverage objects and assign values to each object for the following properties:
    //     - brandName
    //     - type
    //     - volumeInLiters
    //     - priceInCents
    //     - expirationDate
    //     - datesOfPreviousSips (use an array of strings)
    // - isOpen
    // Define your objects using both literal syntax to create all properties and
    // values at once and also try defining empty objects and assign property values in separate statements using the dot notation.










})();