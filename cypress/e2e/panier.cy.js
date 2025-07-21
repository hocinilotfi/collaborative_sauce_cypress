/// <reference types="cypress" />
import dashboardPage from '../pages/dashboard.page';
import loginPage from '../pages/login.page';
import { panierPage } from '../pages/panier.page';

describe ('Verifier l ajout ou la suppression d un produit dans le panier',{tags:['@tc-005','@panier','@regression']}, ()=> {
    const indexProduit = 1;
    let nomProduit = '';
    beforeEach (()=>{
        cy.visit('https://www.saucedemo.com/');
        loginPage.doLogin('standard_user','secret_sauce');

        
    dashboardPage.elements.productItems().eq(indexProduit)
      .find('.inventory_item_name')
      .invoke('text')
      .then((text) => {
        nomProduit = text.trim();
      });
    });
    it('Ajout du produit et verifie qu il est bien ajoutee ', {tags : ['@ajout','@tc-005-01']}, () =>{
        
        dashboardPage.ajouterProduitAuPanier(indexProduit);
        dashboardPage.elements.cartNumber().should('have.text','1');

        dashboardPage.allerAuPanier();
        cy.get('.inventory_item_name').should('contain.text', nomProduit);
    })
    it('Supprime le produit du panier et verifie qu il est retiree', {tags : ['@supression','@tc-006-02'] },() => {
        dashboardPage.ajouterProduitAuPanier(indexProduit);
        dashboardPage.allerAuPanier();
        cy.get('.cart_item .inventory_item_name').should('contain.text', nomProduit);

        cy.get('.cart_item')
        .contains(nomProduit)
        .parents('.cart_item')
        .find('button')
        .click();

        cy.get('.cart_item .inventory_item_name').should('not.exist');
        dashboardPage.elements.cartNumber().should('not.exist');

    });


    
})