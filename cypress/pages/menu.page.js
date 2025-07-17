/// <reference types="cypress" />

class Menu {
    elements = {
        burgerIcon: ()=> cy.get("#react-burger-menu-btn"),
        closeIcon: ()=> cy.get("#react-burger-cross-btn"),
        allItem: ()=>  cy.get("#inventory_sidebar_link"),
        about: ()=> cy.get("#about_sidebar_link"),
        logout: ()=> cy.get("#logout_sidebar_link"),
        reset: ()=> cy.get('#reset_sidebar_link')
    }

    //actions
    cliqueMenuAllItem(){
        this.elements.allItem().click();
    }

    cliqueMenuAbout(){
        this.elements.about().click();
    }

    cliqueLogout(){
        this.elements.logout().click();
    }

    cliqueReset(){
        this.elements.logout().click();
    }

}

export default new Menu();