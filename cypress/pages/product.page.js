export class ProductPage {
  //  Tous les locators sont ici, en haut du fichier
  backpackTitle = '.inventory_item_name';
  productName = '.inventory_details_name';
  addToCartButton = '[data-test="add-to-cart"]';
  backToProductsButton = '[data-test="back-to-products"]';

  // Méthodes d'action

  clickOnBackpack() {
    cy.contains(this.backpackTitle, 'Sauce Labs Backpack').click();
  }

  getProductTitle() {
    return cy.get(this.productName);
  }

  getAddToCartButton() {
    return cy.get(this.addToCartButton);
  }

  clickBackToProducts() {
    cy.get(this.backToProductsButton).click();
  }
}

