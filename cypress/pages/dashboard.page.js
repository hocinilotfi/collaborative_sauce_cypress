class DashboardPage {
  elements = {
    //recupere index d'un element sur le dashboard
    indexProduct: () => cy.get(".inventory_item"),
    //recupère une liste contenant les noms des produits
    productTitle: () => cy.get(".inventory_item_name"),
    //recupère une liste contenant les prix des produits
    productPrice: () => cy.get(".inventory_item_price"),
    cartNumber: () => cy.get(".shopping_cart_badge"),
    cartIcon: () => cy.get(".shopping_cart_link"),
    sortDropdown: () => cy.get(".product_sort_container"),
    //ajouterAuPanierBouton: (nomProduit) => cy.get(`[data-test="add-to-cart-${nomProduit}"]`),//sélecteur dynam pour trouver le bouton d’un produit spécif
    ajouterAuPanierBouton : (index) =>  cy.get('.inventory_item').eq(index).find('button'),
    //retirerDuPanierBouton: (nomProduit) => cy.get(`[data-test="remove-${nomProduit}"]`),
    retirerDuPanierBouton: (index) => cy.get('.inventory_item').eq(index).find('button'),
    productItems: () => cy.get(".inventory_item"),
  };

  cliquerSurProduit(nomProduit) {
    this.elements.productTitle().contains(nomProduit).click();
  }

  ajouterProduitAuPanier(index) {
    this.elements.ajouterAuPanierBouton(index).click();
  }

  retirerProduitDuPanier(index) {
    this.elements.retirerDuPanierBouton(index).click();
  }

  getCartNumber() {
    return this.elements.cartNumber().should("be.visible");
  }

  allerAuPanier() {
    this.elements.cartIcon().click();
  }

  selectionnerTriPar(valeur) {
    this.elements.sortDropdown().select(valeur);
  }

  recuperationNombreDeProduitsDansLePanier() {
    return this.elements.cartNumber().invoke("text").then((text) => {
      return parseInt(text, 10);
    });
  }

  recuperationListTitreProduit() {
    return this.elements.productTitle();
  }
  recuperationListPrixProduit() {
    return this.elements.productPrice();
  }

   selectRandomProduct() {
    return this.elements.productItems().then((products) => {
      const randomIndex = Math.floor(Math.random() * products.length);
      return cy.wrap(products[randomIndex]);
    });
  }
   recupererNomProduit(product) {
    return cy.wrap(product).find(".inventory_item_name").invoke('text').then(text => text.trim());
  }

  

}
export default new DashboardPage();
