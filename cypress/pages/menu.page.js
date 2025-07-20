class MenuPage {
    elements = {
        burgerButton: () => cy.get('#react-burger-menu-btn'),
        allItemsMenuButton: () => cy.get("#inventory_sidebar_link"),
        aboutButton: () => cy.get("#about_sidebar_link"),
        logoutButton: () => cy.get("#logout_sidebar_link"),
        resetAppStateButton: () => cy.get("#reset_sidebar_link"),
    }
    openMenu() {
        this.elements.burgerButton().click();
    }
     clickallItemsMenuButton() {
        this.elements.allItemsMenuButton().click();
    }
    clickaboutButton() {
        this.elements.aboutButton().click();
    }
    clicklogoutButton() {
        this.elements.logoutButton().click();
    }
    clickresetAppStateButton() {
        this.elements.resetAppStateButton().click();
    }


}