///<reference types="cypress" />

export default class MenuPage {

    get burgerBtn() {
        return cy.get(".bm-burger-button");
    }
    get closeBtn() {
        return cy.get(".bm-cross-button");
    }
    get aboutLink() {
        return cy.get("#about_sidebar_link");
    }
    get logoutLink(){
        return cy.get("#logout_sidebar_link");
    }
    get resetAppStateLink(){
        return cy.get(".reset_sidebar_link");
    }

    open = () => this.burgerBtn.click();
    close = () => this.closeBtn.click();

    goToAbout = () => {
        this.aboutLink.click();
    }
    logout = () => this.logoutLink.click();
    emptyCart = () => this.resetAppStateLink.click();
}