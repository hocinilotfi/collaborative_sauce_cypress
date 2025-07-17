export class ProductPage {
  visitLoginPage() {
    cy.visit('https://www.saucedemo.com/');
  }

  login() {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  }

  clickOnBackpack() {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click();
  }

  getProductTitle() {
    return cy.get('.inventory_details_name');
  }

  getAddToCartButton() {
    return cy.get('[data-test="add-to-cart"]');
  }

  clickBackToProducts() {
    cy.get('[data-test="back-to-products"]').click();
  }
}
