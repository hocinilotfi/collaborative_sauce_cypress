/// <reference types="cypress" />

import aboutPage from "../pages/about.page";
import loginPage from "../pages/login.page";
import menu from "../pages/menu.page"

describe("Dashboard Menu", () => {
    before( () => cy.fixture("./urls").as("urls"));
    beforeEach(() => {
        loginPage.doLogin();
        menu.ouvrir();
    })

    it("should go to about page", {tags : ['Menu','About','US-13','TC-33']}, () => {
        menu.cliqueMenuAbout();
        aboutPage.isPageReachableAndVisible(urls.aboutURL);
    })
})