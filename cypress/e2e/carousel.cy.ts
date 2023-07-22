describe('carousel stress tests', () => {
  it('should change the image when arrows are clicked', () => {
    cy.visit('/');
    cy.get('[alt="image-1"]').should('be.visible');
    cy.get('#right-arrow').click();
    cy.wait(100);
    cy.get('[alt="image-2"]').should('be.visible');
    cy.get('#right-arrow').click();
    cy.wait(100);
    cy.get('[alt="image-1"]').should('be.visible');
    cy.get('#left-arrow').click();
    cy.wait(100);
    cy.get('[alt="image-2"]').should('be.visible');
  });
  it('should change the image when the dots are clicked', () => {
    cy.visit('/');
    cy.get('[alt="image-1"]').should('be.visible');
    cy.wait(100);
    cy.get('#slide-2').click();
    cy.get('[alt="image-2"]').should('be.visible');
    cy.wait(100);
    cy.get('#slide-1').click();
    cy.get('[alt="image-1"]').should('be.visible');
  });
});
