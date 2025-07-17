import { ProductPage } from '../pages/product.page';

const productPage = new ProductPage();

describe('Test simple de la page produit', () => {
  beforeEach(() => {
    productPage.visitLoginPage();
    productPage.login();
  });

  it('ouvre la page du produit après clic sur le backpack', () => {
    productPage.clickOnBackpack();

    cy.url().should('include', '/inventory-item.html');
    productPage.getProductTitle().should('contain', 'Sauce Labs Backpack');
    productPage.getAddToCartButton().should('be.visible');
  });

  it('retourne à la page d’accueil avec le bouton "Back to products"', () => {
    productPage.clickOnBackpack();
    productPage.clickBackToProducts();
    cy.url().should('include', '/inventory.html');
  });
});
