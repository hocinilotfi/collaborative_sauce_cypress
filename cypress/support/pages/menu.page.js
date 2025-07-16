<reference types="cypress" />

export class MenuPage {

    get burgerBtn() {
        return cy.get(".bm-burger-button");
    }
    get closeBtn() {
        return cy.get(".bm-cross-button");
    }
    get logoutLink(){
        return cy.get("#logout_sidebar_link");
    }
    get resetAppStateLink(){
        return cy.get(".reset_sidebar_link");
    }

    open = () => this.burgerBtn.click();
    close = () => this.closeBtn.click();

    logout = () => this.logoutLink.click();
    emptyCart = () => this.resetAppStateLink.click();
}