/// <reference types="cypress" />

import LoginPage from "../pages/login.page.js";
import Dashboard from "../pages/dashboard.page.js";
import MenuPage from "../pages/menu.page.js";

describe("Test de la fonctionnalité du menu", () => {
  before(function () {
    cy.fixture("login_credentials").then((login_credentials) => {
      this.valid_credential = login_credentials.valid;
    });
  });

  beforeEach(function () {
    const user = this.valid_credential[0];

    cy.visit("https://www.saucedemo.com/");
    LoginPage.doLogin(user.username, user.password);
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

    Dashboard.clickBoutonMenu();
  });

  context("Vérification des éléments du menu", () => {
    it("afficher tous les éléments du menu", { tags: '@menu' }, () => {
      MenuPage.elements.allItemsMenuButton().should("be.visible");
      MenuPage.elements.aboutButton().should("be.visible");
      MenuPage.elements.logoutButton().should("be.visible");
      MenuPage.elements.resetAppStateButton().should("be.visible");
    });
  });

  context("Navigation du menu", () => {
    it("rediriger vers la page d'inventaire en cliquant sur 'All Items'", { tags: '@menuAllItems' }, () => {
      MenuPage.clickallItemsMenuButton();
      cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    });

    it("le lien 'About' doit pointer vers saucelabs.com", { tags: '@menuAbout' }, () => {
      MenuPage.elements.aboutButton()
        .should('have.attr', 'href')
        .and('include', 'saucelabs.com');
    });

    it("permettre de se déconnecter en cliquant sur 'Logout'", { tags: '@menuLogout' }, () => {
      MenuPage.clicklogoutButton();
      cy.url().should("eq", "https://www.saucedemo.com/");
      LoginPage.elements.loginButton().should("be.visible");
    });

    it("réinitialiser l'état de l'application", { tags: '@menuReset' }, () => {
      
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('contain', '1');

      MenuPage.clickresetAppStateButton();

      cy.get('.shopping_cart_badge').should('not.exist');
    });
  });

  context("Test de fermeture du menu", () => {
    it("fermer le menu en cliquant sur le bouton 'X'", { tags: '@menuClose' }, () => {
      MenuPage.clickmenuCloseButton();
      MenuPage.elements.logoutButton().should("not.be.visible");
    });
  });
});
