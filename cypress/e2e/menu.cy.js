/// <reference types="cypress" />

import MenuPage from "../pages/menu.page"

describe("Menu", () => {
    const menu = new MenuPage();
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.get("#user-name").type("standard_user");
        cy.get("#password").clear().type("secret_sauce");
        cy.get("#login-button").click();
        cy.url().should('eq', "https://www.saucedemo.com/inventory.html");
        menu.open();
    })

    it("User logs out from app", function () {
        menu.logout();
        cy.url().should('eq', "https://www.saucedemo.com/");
    })
})