describe('Viajes pages', () => {
  it('should load the viajes pictures', () => {
    cy.visit('/viajes');

    cy.get('.picture-list').should('have.length.greaterThan', 0);
  });
});
