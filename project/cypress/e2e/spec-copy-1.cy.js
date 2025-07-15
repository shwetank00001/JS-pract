describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="main-header"]').contains("This is the main page!");
    cy.get('[data-test = "dataIsId-Data1"]').contains("Data1");
    // cy.contains("Log in?!").click()
    cy.get('[data-test="linkToAuth"]').click();
    cy.url().should('include', '/auth');

    cy.contains('Click to login!').click();
    cy.url().should('include', '/people');

    //at people url;

    cy.get('[data-test = "logoutButton"]').click();
    cy.url().should('include', '/auth')



  })

  it('checks the whole auth page in details', () => {
    cy.visit('http://localhost:3000/auth');
    cy.contains('Go to People list').click()
  })
})