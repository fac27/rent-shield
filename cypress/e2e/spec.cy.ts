describe('/ page spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
  });
});

describe('/listings page spec', () => {
  it('loads listings available', () => {
    cy.visit('http://localhost:3000/listings');
    cy.get('.test-class-property').should('be.visible');
  });
});

describe('/search-preferences spc', () => {
  it('loads the SearchPreferenceForm component on the page', () => {
    cy.visit('http://localhost:3000/search-preferences?locations=hackney');
    cy.get('[data-cy="SearchPreferencesForm"]').should('be.visible');
    cy.get('button').click
    cy.url().should('include', '&billsIncluded=');
  });
});
