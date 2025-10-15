describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    // cy.get('[data-cy="aboutButton"]').click()
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click()
  })

})