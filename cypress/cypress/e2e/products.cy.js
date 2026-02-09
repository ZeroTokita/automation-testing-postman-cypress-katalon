describe('Productos y carrito', () => {

  it('CP05 - Navegar a productos', () => {
    cy.visit('/');
    cy.contains('Products').click();
    cy.url().should('include', '/products');
  });

  it('CP06 - Ver detalle de producto', () => {
  cy.visit('/products'); // ← MUY IMPORTANTE
  cy.get('a[href^="/product_details"]')
    .first()
    .should('be.visible')
    .click();
  cy.url().should('include', 'product_details');
});


  it('CP07 - Agregar producto al carrito', () => {
  cy.visit('/products');
  cy.contains('Add to cart')
    .first()
    .click({ force: true });
  cy.contains('View Cart').click();
  cy.url().should('include', '/view_cart');
});


});
