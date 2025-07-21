/// <reference types="cypress" />

import DashboardPage from "../pages/dashboard.page"
import loginPage from "../pages/login.page"

describe('Ajouter et supprimer un produit depuis le Dashboard', () => {
    const nomProduit = 'sauce-labs-backpack';
    beforeEach(() => {
    cy.visit("https://saucedemo.com");
    loginPage.doLogin('standard_user', 'secret_sauce');
    });

    it('ajouter un produit au panier', {tags:'@TC-003-01'}, () => {
        DashboardPage.ajouterProduitAuPanier(nomProduit);
        DashboardPage.elements.cartNumber().should('contain', '1');

    })

     it('devrait supprimer un produit du panier', {tags:'@TC-003-02'} , () => {
      // on va prépéarer l'état avec le produit déjà ajouté 
      DashboardPage.ajouterProduitAuPanier(nomProduit);
      DashboardPage.elements.cartNumber().should('contain', '1');
      // le supprimer
      DashboardPage.retirerProduitDuPanier(nomProduit);
      
     });

     it('devrait verifier le nombre darticles ajoutés', {tags:'@TC-003-03'} , () => {
      const productsToAdd = ['Sauce Labs Backpack','Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt']; // produits d'exemple
      //Ajouter chaque produit au panier 
      productsToAdd.forEach((productName) => {
        cy.contains('.inventory_item', productName)
        .find('button')
        .click()
      })

      //Vérifier que l'icone du panier affiche le bon nombre
      cy.get('.shopping_cart_badge').should('contain', productsToAdd.length);
    
     });

})