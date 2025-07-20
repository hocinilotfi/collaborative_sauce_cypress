/// <reference types="cypress" />


describe ("Test du Menu avec POM - Saucedemo", () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('verifier le bouton menu' , () => {
        Menu.openMenu();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })
})