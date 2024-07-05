/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest");
const buttonClick = require("../button");

// loads the mock DOM with the mock features required for test before any tests run. Use as boilerplate.
beforeAll(() => {
    // document.body.innerHTML = '<p id="par" ></p>'; //do this if just testing a small part of a web page
    let fs = require('fs'); //load the 'fs' file system handling module that is built into node.js
    let fileContents = fs.readFileSync('index.html', 'utf-8'); //saves html to variable using utf-8 character set
    //attaching the html to the mock DOM. 
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test('h1 should exist', () => {
        //gets all h1 elements and puts in array with .length counting # of items in array
        expect(document.getElementsByTagName('h1').length).toBe(1);
    })
})