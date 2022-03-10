"use strict";

$(document).ready(function() {
    // 1. CHECK FONT SIZE!!!!
    // 2. GO SLOW!!!
    // 3. GO SLOW!!!
    // 4.

    // Merge Justins Pull
    // pull latest
    // git checkout -b jquery-selectors



    /**
     * INTRO:
     * What are we doing!? (https://java.codeup.com/jquery/selectors/)
     * We will be reviewing the Selectors Exercise.
     *
     * We are going to use multiple types of selectors in this exercise
     * 1. ID Selectors
     * 2. Class Selectors
     * 3. Element Selectors (TAGS)
     * 4. Multiple Selectors
     *
     * Our goal is to ensure you have an understanding of selectors in JQUERY
     */

    // Ok so for this. first we are going to open the custom JS file that we created in the first exercise.
    // My first step is to copy the instructions into my code as a comment. I want to do this so that I can
    // save time swapping between the two things. This is a time saver method. You could also split the screen
    // or do something else.

    // INSERT JAVASCRIPT CODE SAMPLE HERE
    alert("Dom has finished loading!!g");


    // 1. CHECK FONT SIZE!!!!
    // 2. GO SLOW!!!
    // 3. GO SLOW!!!

    //TODO: Copy the instructions from the original instructions file

    // Id Selectors

    // TODO: Create content in your HTML file using at least the following elements: h1, p, ul, li, div.
    // TODO: Add several attributes to your elements; you will need both id and class attributes.

    /**
     * In HTML:
     * Add the following using Emmet for shortcut html creation
     * div#container>h1#header{text inside of the h1}+p#id$.text{$ text inside of p tags $}*3+ul#group>li#item$.item.codeup{text$}*5
     */

    // Use jQuery to select an element by the id. Alert the contents of the element.


    //similar to: document.getElementById("header").innerHTML;
        // or : document.querySelector("#header").innerHTML;

     var contentOfHeader = $("#header").html();
     alert(contentOfHeader);

    /**
     * ASK:
     * What if we select a grouping that has HTML elements?
     */

    // Update the jQuery code to select and alert a different id.
     var contentOfHeader = $("#group").html();
     alert(contentOfHeader);

    /**
     * SAY:
     * The HTML elements are also included here. This is because we used the
     * html() function  which acts very similary to innerHTML method we've seen
     * previously.
     *
     * ASK:
     * What would be want to do if we only wanted the text?
     * .text()
     */

    // Use the same id on 2 elements. How does this change the jQuery selection?

    var contentOfHeader = $("#id1").html();
    alert(contentOfHeader);

    // TODO: Change ID on the main html page

    /**
     * SAY:
     *
     * It only returned the first item. Because the id selector
     * expects to only be able to select one item as an ID is supposed to be
     * unique. If it's not unique you will see that intellj warns you as well.
     *
     *
     */

    // TODO: Remove the duplicate id. Each id should be unique on that page.

    // Class Selectors

    // Remove your custom jQuery code from previous exercises.
    // TODO: comment out javascript code above


    // Update your code so that at least 3 different elements have the same class named codeup.
    // TODO: Change html li classes to add class: codeup*3.

    // Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
    $(".codeup").css("border","1px dashed red");

    /**
     * SAY:
     * Lets check what this looks like in the source code
     *
     * SAY:
     * We can see from the code that this css() function has been used and it adds
     * inline styles to the elements.
     *
     * ASK:
     * Can anyone think of any advantages or disadvantages to this?
     */


    // Remove the class from one of the elements. Refresh and test that the border has been removed.

    // Function way:
    $(".codeup").first().removeClass("codeup");

    // Selector way:
    $(".codeup:first").removeClass("codeup");

    /**
     * EXPLAIN:
     * Ok, so we used first(). This will select the first element of a group in
     * jquery().
     * If you used regular js it would look like this maybe:
     * document.getElementsByClassName("codeup")[0]
     *
     * DO:
     * Lets check the source code to see if that class was removed.
     *
     * SAY:
     * No it did not change!! Even after the class was removed
     *
     * ASK:
     * Well the reason is INLINE styles.
     * The above code adds inline styles to each of the elements with
     * the class "codeup"
     */


    // Give another element an id of codeup. Does this element get a border now?
    // TODO: Set the 4th LI element to id="codeup"


    /**
     * CHANGE:
     * EX:  <li id="item4" id="codeup" class="item">text4</li>
     */

    /**
     * SAY:
     * We can see that the id has been added, but this does not change the border
     * status.
     *
     * ASK:
     * Doe anyone know why?
     *
     * This is because of the class was targeted and the ID of codeup (#codeup) !== CLASS (.codeup)
     * #codeup != .codeup
     * # = single
     * . one to many
     */


    // Element Selectors
    // Remove your custom jQuery code from previous exercises.

    // TODO: Comment out above code

    // Using jQuery, set the font-size of all li elements to 20px.

    $("li").css("font-size","20px");

    /**
     * SAY:
     * Here we use the tag name selector, you can see that it does not have
     * either a period or a hashtag before the text. This is because it is
     * targeting the tag name (a, p, li)
     *
     * The CSS function here adds an inline style of 20px for ALL li elements
     *
     *
     *
     */

    // Craft selectors that highlight all the h1, p, and li elements.
    //
    $("h1").css("background-color","yellow");
    $("p").css("background-color","yellow");
    $("li").css("background-color","yellow");

    /**
     * SAY:
     * Here we have created 3 separate selectors.
     *
     * SAY:
     * Each of these selectors are targeting a specific tag name.
     * All of them are adding the css style inline for background color.
     *
     * DO:
     * check in browser
     */

    // Create a jQuery statement to alert the contents of your h1 element(s).
    var h1Elements = $("h1").html();
    alert(h1Elements);

    alert($("h1").html())

    /**
     * SAY:
     * Here we have assigned a variable to the value returned from all h1 Elements.
     *
     * ASK:
     * What would happen if we aded another h1 element to this page?
     *
     * DO:
     * Add H1 Element
     *
     * SaY:
     * We still only get the first one, why is that?
     * We have to create some sort of loop to loop over them to get all of the items.
     *
     * Jquery Loop: https://api.jquery.com/each/#each-function
     */

    // var h1Elements = $("h1");
    //
    // function getH1Elements(index, element) {
    //     // console.log($(this).html())
    //     // alert(index + $(this).html())
    //     // or
    //     alert(index + $(element).html())
    //
    //     // this, is the scope. THIS in THIS context refers to the specific h1
    //     // element that it is current on.
    //     // .each is similar to .forEach we've used earlier
    //     // .each is specific to jquery.
    //
    // }
    //
    // h1Elements.each(getH1Elements)


    // Multiple Selectors
    // Combine your selectors that highlight all the h1, p, and li elements.
    $("h1, p, li").css("background-color","yellow");

    /**
     * SAY:
     *
     * We have been able to reduce the 3 selectors above to one.
     */


    /**
     * RECAP:
     * Ok, so heres what we accomplished today.
     *
     * 1. We used JQUERY to select different types of elements
     *
     * 2. We target elements by:
     *     - the tag name, by the class name, and by the id.
     *
     * 3. We were reminded that ID's are supposed to be unique
     *
     * 4. We can used jquery to modify the inline CSS of an object using the
     *    css() function
     *      - The CSS function will apply to all elements found in the selector
     *
     * 5.  To alert multiple tags elements we will need to use a loop
     *      - each() function in jquery allows us to do that similar to forEach
     *
     * At this point you should have a basic understanding of jquery Selectors.
     *
     * I always expect that I will check the documentation on any new framework.
     * If you have time to read through the function definitions or at least the
     * names, sometimes it will help you later when trying to come up with
     * a solutiuon to another problem
     *
     *
     * More tools in the toolbox!
     * */



    //Id Selectors
    //
    // Create content in your HTML file using at least the following elements: h1, p, ul, li, div.
    //
    // Add several attributes to your elements; you will need both id and class attributes.
    //
    // Use jQuery to select an element by the id. Alert the contents of the element.
    //
    // Update the jQuery code to select and alert a different id.
    //
    // Use the same id on 2 elements. How does this change the jQuery selection?
    //
    // Remove the duplicate id. Each id should be unique on that page.

    // Class Selectors
    //
    // Remove your custom jQuery code from previous exercises.
    //
    // Update your code so that at least 3 different elements have the same class named codeup.
    //
    // Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
    //
    // Remove the class from one of the elements. Refresh and test that the border has been removed.
    //
    // Give another element an id of codeup. Does this element get a border now?

    // Element Selectors
    //
    // Remove your custom jQuery code from previous exercises.
    //
    // Using jQuery, set the font-size of all li elements to 20px.
    //
    // Craft selectors that highlight all the h1, p, and li elements.
    //
    // Create a jQuery statement to alert the contents of your h1 element(s).

    // Multiple Selectors
    //
    // Combine your selectors that highlight all the h1, p, and li elements.

});



