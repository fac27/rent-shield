describe('/listings page spec', () => {
  it('loads listings available', () => {
    cy.visit('/listings')
    cy.get('.test-class-property').should('be.visible')
  })
})

describe('/search-preferences spec', () => {
  beforeEach(() => {
    cy.visit('/search-preferences')
  })
  it('loads the SearchPreferencesForm', () => {
    cy.get('form').should('be.visible')
  })
  it('submits preferences to the url', () => {
    cy.get('#location').type('hackney')
    cy.get('#max-rooms').invoke('val', 1).trigger('change')
    cy.get('[data-cy="SearchPreferencesForm"] button').click({ multiple: true })
    cy.url().should('include', '&location=hackney')
    cy.url().should('include', '&max_rooms=1')
  })
})
