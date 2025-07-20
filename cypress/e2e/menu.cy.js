/// <reference types="cypress" />

import LoginPage from "../../pages/login.page.js"
import Dashboard from "../../pages/dashboard.page.js"
import MenuPage from "../../pages/menu.page.js"

describe("Test de la fonctionnalité du menu", () => {
    before(() => {
        cy.fixture("login_credentials").then(function (login_credentials) {
            this.valid_credential = login_credentials.valid
        })
    })

    beforeEach(function () {
        const user = this.valid_credential[0]
       
        cy.visit("https://www.saucedemo.com/")
        LoginPage.doLogin(user.username, user.password)
        cy.url().should("eq", "https://www.saucedemo.com/inventory.html")

        Dashboard.clickBoutonMenu()
    })

    context("Vérification des éléments du menu", () => {
        it("afficher tous les éléments du menu", { tags : '@menu'}, () => {
            MenuPage.elements.allItemsMenuButton().should("be.visible")
            MenuPage.elements.aboutButton().should("be.visible")
            MenuPage.elements.logoutButton().should("be.visible")
            MenuPage.elements.resetAppStateButton().should("be.visible")
        })
    })

    context("Navigation du menu", () => {
        it("rediriger vers la page d'inventaire en cliquant sur 'All Items'", { tags : '@menuAllItems'} , () => {
            MenuPage.clickallItemsMenuButton()
            cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
        })

        it("rediriger vers la page 'About' en cliquant sur 'About'", { tags : '@menuAbout'}, () => {
            MenuPage.clickaboutButton()
            cy.origin('https://saucelabs.com', () => {
              cy.url().should("eq", "https://saucelabs.com/");
            })

        })

        it("permettre de se déconnecter en cliquant sur 'Logout'", { tags : '@menuLogout'}, () => {
            MenuPage.clicklogoutButton()
            cy.url().should("eq", "https://www.saucedemo.com/")
            LoginPage.elements.loginButton().should("be.visible")
        })

        it("Devrait pouvoir cliquer sur 'Reset App State'",{ tags : '@menuReset'}, () => {
            MenuPage.clickresetAppStateButton()
            MenuPage.elements.resetAppStateButton().should("be.visible")
        })
    })

    context("Test de fermeture du menu", () => {
        it("fermer le menu après avoir cliqué sur 'All Items'", { tags : '@menuClose'}, () => {
            MenuPage.clickallItemsMenuButton()
            MenuPage.clickmenuCloseButton()
            MenuPage.elements.logoutButton().should("not.be.visible")
        })
    })
})