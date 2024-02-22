import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that the user visits the homepage", () => {
  cy.visit("/");
  cy.get('h1').contains('Learn to code by watching others');
});

Given("that the user enters valid data", () => {
  cy.get('#firstName').type('fred');
  cy.get('#lastName').type('vis');
  cy.get('#email').type('fred@example.com');
  cy.get('#password').type('Fr3d1234');
});

When("the user clicks the submit button", () => {
  cy.get('.submit-button').click();
});

Then("the success-page is shown", () => {
  cy.get('h1').contains('Thank you for registering');
});
