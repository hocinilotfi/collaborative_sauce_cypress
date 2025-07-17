/// <reference types="cypress" />

import { panierPage } from '../page/panier.page'

describe('Tests sur la page Panier', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

   
    cy.get('.shopping_cart_link').click()
  })

  it('Supprimer un article du panier', { tags: '@panier @suppression' }, () => {
    panierPage.remonveBackpack()
    panierPage.removeBikeLight()
    cy.get('.cart_item').should('have.length', 1) 
  })

  it('Continuer vos achats depuis le panier', { tags: '@panier @navigation' }, () => {
    panierPage.continueShopping()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  it('Valider le panier (checkout)', { tags: '@panier @checkout' }, () => {
    panierPage.checkout()
    cy.url().should('include', '/checkout-step-one')
  })
})
