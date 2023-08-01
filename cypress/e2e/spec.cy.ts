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

describe('/search-preferences spec', () => {
  it('loads the SearchPreferencesForm', () => {
    cy.visit('http://localhost:3000/search-preferences')
    cy.get('form').should('be.visible')
  })
  it('submits preferences to the url', () => {
    cy.visit('http://localhost:3000/search-preferences')
    cy.get('#location').type('hackney')
    cy.get('#max-rooms').invoke('val', 1).trigger('change')
    cy.get('button').click({ multiple: true })
    cy.url().should('include', '&location=hackney')
    cy.url().should('include', '&max_rooms=1')
  })
})
