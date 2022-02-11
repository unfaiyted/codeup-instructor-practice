(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    console.log(planetsArray)

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    // Works, not using document api.

    // let planetString2 = planetsString.replaceAll("|","<br/>");
    //
    // console.log(planetString2);
    //
    // const planetString3 = planetsString.replaceAll("|","</li><li>")
    //
    // const unorderedList = "<ul><li>" + planetString3 + "</ul>"
    //
    // console.log(unorderedList)
    //
    //
    // document.getElementById("unorderedList").innerHTML = unorderedList


    /**
     * ArrayToList is used to take an array and map each item to a listElement
     * @param array
     * @param type
     * @returns {HTMLUListElement}
     */
    function arrayToList(array, type = 'ul') {
        let list = document.createElement(type)

        for(const item of array) {
            let liElement = document.createElement("li");
            liElement.appendChild(document.createTextNode(item));
            list.appendChild(liElement);
        } //could also use forEach

       /*
        array.forEach((item) => {
            // for-of block loop code above
        })
        */

        return list;
    }

    const list = arrayToList(planetsString.split("|"));
    document.getElementById("unorderedList").appendChild(list);


})();