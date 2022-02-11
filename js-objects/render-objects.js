'use strict';


function cap(string) {
    const result = string.split(/(?=[A-Z])/).join(" ");

    return result.charAt(0).toUpperCase() + result.slice(1);
}


const preFilledObject = {
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

}

// Personal Trials
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

function renderObject (parentObject, id = "objects") {
    // input: get the original object.

    // check object for key, nest.
    const attachTo = document.getElementById(id);

    let i = 0;
    let children;
    let objectToTravel = Object.assign(parentObject);
    let firstChild;


    if(Object.keys(objectToTravel).length) {
        firstChild = createChildObjects(attachTo, objectToTravel, i);
        children = firstChild.child;
        objectToTravel = { ...objectToTravel};
        i++;
    }

    while (Object.keys(objectToTravel).length > 0) {

        children = createChildObjects(children, i).child;
        objectToTravel = { ...objectToTravel.nest};
        i++;


        // TODO: change this to test for any property
        if(Object.keys(objectToTravel).length === 0)  {
            children = createChildObjects(children ,i).child;
            break;
        }

    }

    // if present, then create a Child, repeat till nest is no longer present.
    // attach to dom. Attaching first child, all other children are attached to this one.
    attachTo.appendChild(firstChild)
}

// Creates a child object
function createChildObjects(parent, i) {
    const child = document.createElement("div")
    child.appendChild(document.createTextNode("Nest LVL # " + (i+1) ))
    // append child
    parent.appendChild(child);

    return {child, parent};
}





// create Child from Array
function displayChildArray(array) {

    for(const item of array) {

    }

    // create divs for the array
    // each item in the array is in its own div
    // has seperate css to identify them.


}



let testObject = { nest: {}}
testObject = recursion(testObject, 40);

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
            newParent.appendChild(document.createTextNode(cap(key)));
            newParent.classList.add("object");
            parent.appendChild(newParent);

            getKeys(value, newParent);
            continue;
        }

        parent.appendChild(renderKey(key, value));
    }
}


function renderKey(key, value) {
    console.log(`${key}: ${value}`);

    if (Array.isArray(value)) console.log(value);
    if (typeof value === "object") console.log(value);

    // All others
    let keyElement = document.createElement("div")
    keyElement.classList.add("key")
    keyElement.appendChild(document.createTextNode(cap(key) +": " +value))

    return keyElement;
}





getKeys(preFilledObject, attachTo);






