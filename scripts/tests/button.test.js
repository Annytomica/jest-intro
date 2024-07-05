/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest");
const buttonClick = require("../button");

// loads the mock DOM with the mock features required for test before any tests run
beforeAll(() => {
    document.body.innerHTML = '<p id="par" ></p>';
});

describe('DOM tests', () => {
    test('expects p content to change', () => {
        buttonClick(); // simulates button being clicked as needed for test
        expect(document.getElementById("par").innerHTML).toEqual('You Clicked');
    })
})