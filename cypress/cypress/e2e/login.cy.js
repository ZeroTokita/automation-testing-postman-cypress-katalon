describe('Login y Logout', () => {

  it('CP02 - Login exitoso', () => {
    cy.visit('/login');

    cy.get('[data-qa="login-email"]').type('testqa_01@mail.com');
    cy.get('[data-qa="login-password"]').type('Test12345');
    cy.get('[data-qa="login-button"]').click();

    cy.contains('Logged in as').should('be.visible');
  });

  it('CP03 - Login inválido', () => {
    cy.visit('/login');

    cy.get('[data-qa="login-email"]').type('testqa_01@mail.com');
    cy.get('[data-qa="login-password"]').type('incorrecta');
    cy.get('[data-qa="login-button"]').click();

    cy.contains('Your email or password is incorrect').should('be.visible');
  });

  it('CP08 - Logout', () => {
    cy.contains('Logout').click();
    cy.url().should('include', '/login');
  });

});


