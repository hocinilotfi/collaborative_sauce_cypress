class DashboardPage {
    elements = {
      //recupère une liste contenant les noms des produits
      productTitle: () => cy.get(".inventory_item_name"),
      //recupère une liste contenant les prix des produits
      productPrice: () => cy.get(".inventory_item_price"),
      cartNumber: () => cy.get(".shopping_cart_badge"),
      cartIcon: () => cy.get(".shopping_cart_link"),
      sortDropdown: () => cy.get(".product_sort_container"),
      ajouterAuPanierBouton: (nomProduit) => cy.get(`[data-test="add-to-cart-${nomProduit}"]`),//sélecteur dynam pour trouver le bouton d’un produit spécif
      retirerDuPanierBouton: (nomProduit) => cy.get(`[data-test="remove-${nomProduit}"]`),
    };

  cliquerSurProduit(nomProduit) {
    this.elements.productTitle().contains(nomProduit).click();
  }

   ajouterProduitAuPanier(nomProduit) {
    this.elements.ajouterAuPanierBouton(nomProduit).click();
  }
 
  retirerProduitDuPanier(nomProduit) {
    this.elements.retirerDuPanierBouton(nomProduit).click();
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
  
  recuperationListTitreProduit(){
    return this.elements.productTitle();
  }
  recuperationListPrixProduit(){
    return this.elements.productPrice();
  }

}
export default new DashboardPage();
