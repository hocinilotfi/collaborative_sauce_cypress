import { productPage } from '../pages/product.page';
import { loginPage } from '../pages/login.page'; 

describe('Tests de la page produit', () => {
  beforeEach(() => {
  
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('devrait ouvrir la fiche produit après clic sur un produit', () => {
    productPage.clickOnBackpack();

   
    cy.url().should('include', '/inventory-item.html');

    
    productPage.getProductTitle().should('contain', 'Sauce Labs Backpack');

    
    productPage.getAddToCartButton().should('be.visible');
  });

  it('devrait retourner à la liste de produits avec le bouton "Back to products"', () => {
    productPage.clickOnBackpack();

    
    productPage.clickBackToProducts();

   
    cy.url().should('include', '/inventory.html');
  });
});
