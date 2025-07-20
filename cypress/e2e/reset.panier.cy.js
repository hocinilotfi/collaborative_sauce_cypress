import Menu from '../pages/menu.page.js';

describe("Réinitialisation du panier", () => {
  it("Devrait vider le panier après avoir cliqué sur Reset App State", () => {
   
    cy.visit('https://www.saucedemo.com/');

   
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    
    cy.url().should('include', '/inventory.html');

  
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    
    cy.get('.shopping_cart_badge').should('exist');

    
    cy.get('#react-burger-menu-btn').click();

  
    Menu.cliqueReset();

    
    cy.get('#react-burger-cross-btn').click();

   
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
