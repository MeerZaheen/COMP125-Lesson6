/*
* FileName: app.js
*
* @author Meer
* @date june 7, 2016
*
* StudentID: 300522487
* website: http://comp125-lab3.azurewebsites.net/
* @description: This file is the main javascript file for the website
*/

//var app = {}; // object notation or var app = new Object();
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    /*
    * This function uses the document.title to switch JavaScript function when the page switches
    *
    * @function PageSwitcher
    * @returns {void}
    */
    function PageSwitcher() {

        // for console used for testing
        switch (document.title) {
            case "Home":
                Home();
                break;
            case "About Me":
                About();
                break;
            case "Contact Me":
                Contact();
                break;
            case "Projects":
                Projects();
                break;
        }
    }
    /**
     * This function injects some text into the first paragraph of a page based on it's 
     * document.title property
     * 
     * @function InitialText
     * @returns {void}
     */
    function InitialText() {
        var parentElement = document.querySelector("div.row");

        var secondParagraph = document.createElement("p");
        secondParagraph.textContent = "second paragraph";

        parentElement.appendChild(secondParagraph);       
    }

    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function Home
     * @returns {void}
     */
    function Home() {
        InitialText();

        var firstPargraph = document.querySelectorAll("div.row p")[0];

        firstPargraph.style.color = "red";
    }

    /**
    * This function provides JavaScript code for the About page
    * 
    * @function About
    * @returns {void}
    */
    function About() {
        InitialText();
    }

    /**
    * This function provides JavaScript code for the Contact page
    * 
    * @function Contact
    * @returns {void}
    */
    function Contact() {

    }

    /**
    * This function provides JavaScript code for the Projects page
    * 
    * @function Projects
    * @returns {void}
    */
    function Projects() {
        InitialText();
    }
    // for console used for testing: console.log(document.URL);
    // document.body.onload = PageSwitcher;
    // document.body.addEventListener("load", Pageswitcher);
    window.addEventListener("load", PageSwitcher);

})();