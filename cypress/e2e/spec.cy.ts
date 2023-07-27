describe('/ page spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('/listings page spec', () => {
  it('loads listings available', () => {
    cy.visit('http://localhost:3000/listings')
    cy.get('.test-class-property').should('be.visible')
  })
})
