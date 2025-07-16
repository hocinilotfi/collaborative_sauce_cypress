<reference types="cypress" />

export class MenuPage {

    get burgerBtn() {
        return cy.get("#bm-burger-button");
    }
    get closeBtn() {
        return cy.get("#bm-burger-button");
    }

    open = () => this.burgerBtn.click();
    close = () => this.closeBtn.click();
}