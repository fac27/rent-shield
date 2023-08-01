describe('carousel stress tests', () => {
  it('should change the image when arrows are clicked', () => {
    cy.visit('/listings');
    cy.get('[data-id="listing-1"] #carousel > [alt="image-1"]').should(
      'be.visible',
    );
    cy.wait(150)
    cy.get('#left-arrow').trigger("click");
    cy.get('[data-id="listing-1"] #carousel > :last-child()').should(
      'be.visible',
    );
    cy.wait(150)
    cy.get('#right-arrow').trigger("click");
    cy.wait(150)
    cy.get('#right-arrow').trigger("click");
    cy.get('[data-id="listing-1"] #carousel > [alt="image-2"]').should(
      'be.visible',
    );
  });
  it('should change the image when the dots are clicked', () => {
    cy.visit('/listings');
    cy.get('[data-id="listing-1"] [alt="image-1"]').should('be.visible');
    cy.wait(150)
    cy.get('#slide-2').trigger("click");
    cy.get('[data-id="listing-1"] [alt="image-2"]').should('be.visible');
    cy.wait(150)
    cy.get('#slide-1').trigger("click");
    cy.get('[data-id="listing-1"] [alt="image-1"]').should('be.visible');
  });
});
