describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="main-header"]').contains("This is the main page!")
  })
})