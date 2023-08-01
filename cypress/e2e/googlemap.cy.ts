describe('Google Maps API', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', '**/autocomplete/**', (req) => {
      if (req.url.includes('london')) {
        req.reply([
          {
            description: 'London, UK',
            place_id: 'some_place_id',
          },
        ])
      }
    })
  })

  it('correctly locates center', () => {
    cy.get('#default-search')
      .should('be.visible')
      .type('london')
      .wait(2000)
      .type('{downarrow}')
    cy.get('body').click(0, 0)
    cy.get('#default-search').invoke('val').should('equal', 'London, UK')
  })
})
