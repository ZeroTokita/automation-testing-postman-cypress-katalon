describe('Registro de usuario', () => {

  it('CP04 - Registro de usuario', () => {
    cy.visit('/login');

    cy.get('[data-qa="signup-name"]').type('Nuevo QA');
    cy.get('[data-qa="signup-email"]').type(`qa${Date.now()}@mail.com`);
    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');
  });

});
