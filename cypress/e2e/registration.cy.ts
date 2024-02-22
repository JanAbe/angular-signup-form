describe('Registration', () => {
  it('title on home page gets displayed correctly', () => {
    cy.visit('/');
    cy.get('h1').contains('Learn to code by watching others');
  });

  it('should redirect to the success page after a form is submitted successfully', () => {
    cy.visit('/');
    cy.get('#firstName').type('fred');
    cy.get('#lastName').type('vis');
    cy.get('#email').type('fred@example.com');
    cy.get('#password').type('Fr3d1234');

    cy.get('.submit-button').click();

    cy.get('h1').contains('Thank you for registering');
  });

})
