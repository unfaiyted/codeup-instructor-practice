'use strict';


/**
 * cap - function takes in a string and uppercases the first letter.
 *  additionally it also splits the string if using camel case and converts to words
 * @param string
 * @returns {string}
 */
function cap(string) {
    const result = string.split(/(?=[A-Z])/).join(" ");
    return result.charAt(0).toUpperCase() + result.slice(1);
}


const preFilledObject = [


    {
    title: "Office Administrator",
    hireDate: "2019-11-02",
    name: {
        first: "Pam",
        last: "Beazly"
    },
    age: "33",
    animals: ["dog","cat","fish"],
    profile: {
        email: "teset@name.com",
        address: {
            firstLine: "12222 B. St.",
            state: "TX",
            zipCode: 12111
        }
    }

},
    {
        title: "Salesman",
        hireDate: "2015-11-02",
        name: {
            first: "Jim",
            last: "Halpert"
        },
        age: "35",
        animals: ["lizard","dog","fish"],
        profile: {
            email: "noway@name.com",
            address: {
                firstLine: "12222 B. St.",
                state: "TX",
                zipCode: 12111
            }
        }

    },
]

// // Personal Trials
// const  nestIt = (input) => {
//     return  {
//         ...input,
//         nest: {
//             ...input
//         }
//     }
// };
//
// function recursion (input, limit = 50) {
//     if(limit <= 0) return input;
//
//     input = nestIt(input);
//     return recursion(input, limit-1)
// }
//
// function renderObject (parentObject, id = "objects") {
//     // input: get the original object.
//
//     // check object for key, nest.
//     const attachTo = document.getElementById(id);
//
//     let i = 0;
//     let children;
//     let objectToTravel = Object.assign(parentObject);
//     let firstChild;
//
//
//     if(Object.keys(objectToTravel).length) {
//         firstChild = createChildObjects(attachTo, objectToTravel, i);
//         children = firstChild.child;
//         objectToTravel = { ...objectToTravel};
//         i++;
//     }
//
//     while (Object.keys(objectToTravel).length > 0) {
//
//         children = createChildObjects(children, i).child;
//         objectToTravel = { ...objectToTravel.nest};
//         i++;
//
//
//         // TODO: change this to test for any property
//         if(Object.keys(objectToTravel).length === 0)  {
//             children = createChildObjects(children ,i).child;
//             break;
//         }
//
//     }
//
//     // if present, then create a Child, repeat till nest is no longer present.
//     // attach to dom. Attaching first child, all other children are attached to this one.
//     attachTo.appendChild(firstChild)
// }
//
// // Creates a child object
// function createChildObjects(parent, i) {
//     const child = document.createElement("div")
//     child.appendChild(document.createTextNode("Nest LVL # " + (i+1) ))
//     // append child
//     parent.appendChild(child);
//
//     return {child, parent};
// }
//
//
//
//
//
// // create Child from Array
// function displayChildArray(array) {
//
//     for(const item of array) {
//
//     }
//
//     // create divs for the array
//     // each item in the array is in its own div
//     // has seperate css to identify them.
//
//
// }
//
//
//
// let testObject = { nest: {}}
// testObject = recursion(testObject, 40);

//renderObject(testObject);
//renderObject(preFilledObject);



// 1. Get object
// 2. read all keys
// 3. check if key is an array or an object.
// 4. if an array then... loop over all items in the array
// 5. add them to the renders.
// 6. If any items are sub arrays or sub objects
// 7. repeat till all items are attached.
// 8. Go up a parent level.
// 9. check next key.

const attachTo = document.getElementById("objects");


function getKeys(object, attachTo) {
    const parent = attachTo;

    for (const [key, value] of Object.entries(object)) {
        if (typeof value === "object") {

            const newParent = document.createElement("div");

           const text = createHeader(key, value);

            newParent.appendChild(text);
            newParent.classList.add("object");
            parent.appendChild(newParent);

            getKeys(value, newParent);
            continue;
        }

        parent.appendChild(renderKey(key, value));
    }
}


function renderKey(key, value) {

    let text = createKey(key, value);

    // All others
    let keyElement = document.createElement("div")
    keyElement.classList.add("key")
    keyElement.appendChild(text)

    return keyElement;
}


function createHeader(key, value) {

    const text = document.createElement("p");
    const dataType = document.createElement("span");

    text.appendChild(document.createTextNode(cap(key)));
    dataType.appendChild(document.createTextNode((Array.isArray(value) ? "array" : "object" )))

    text.appendChild(dataType);

    return text;
}


function createKey(key, value) {

    const text = document.createElement("p");
    const dataType = document.createElement("span");
    const assignedValue = document.createElement("span");

    assignedValue.classList.add("assigned-value");
    dataType.classList.add("data-type")

    let type = "unknown";
    //(Array.isArray(value) ? "array" : "object" )

    if (Array.isArray(value))  {
        type = "array"
    } else if (typeof value === "object") {
        type = "object";
    } else {
        type = typeof value;
    }

    text.appendChild(document.createTextNode(cap(key) + ":"));
    assignedValue.appendChild(document.createTextNode(value))
    dataType.appendChild(document.createTextNode(type))


    text.appendChild(assignedValue)
    text.appendChild(dataType);

    return text;


}


getKeys(preFilledObject, attachTo);






