/// <reference types="cypress" />

import aboutPage from "../pages/about.page";
import loginPage from "../pages/login.page";
import menu from "../pages/menu.page"

describe("Dashboard Menu", () => {
    before( () => cy.fixture("login.datas/urls").as("urls"));
    beforeEach(() => {
        loginPage.doLogin();
        menu.ouvrir();
    })

    it("should go to about page", function () {
        menu.cliqueMenuAbout();
        aboutPage.isPageReachableAndVisible();
    })
})