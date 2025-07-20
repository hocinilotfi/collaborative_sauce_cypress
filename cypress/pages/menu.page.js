/// <reference types="cypress" />

class Menu {
    elements = {
        allItem: () => cy.get("#inventory_sidebar_link"),
        about: () => cy.get("#about_sidebar_link"),
        logout: () => cy.get("#logout_sidebar_link"),
        reset: () => cy.get("#reset_sidebar_link")
    }

    // Actions
    cliqueMenuAllItem() {
        this.elements.allItem().should('be.visible').click();
    }

    cliqueMenuAbout() {
        this.elements.about().should('be.visible').click();
    }

    cliqueLogout() {
        this.elements.logout().should('be.visible').click();
    }

    cliqueReset() {
        this.elements.reset().should('be.visible').click(); // essentiel ici
    }
}

export default new Menu();
