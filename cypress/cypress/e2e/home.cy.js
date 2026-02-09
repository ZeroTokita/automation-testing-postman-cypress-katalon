describe('Home - Automation Exercise', () => {

  it('CP01 - Cargar página principal', () => {
    cy.visit('/');
    cy.url().should('include', 'automationexercise');
    cy.contains('Home').should('be.visible');
  });

  it('CP09 - Footer visible', () => {
    cy.visit('/');
    cy.get('footer').should('be.visible');
  });

  it('CP10 - Validar título de la página', () => {
    cy.visit('/');
    cy.title().should('include', 'Automation Exercise');
  });

});

