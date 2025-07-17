/// <reference types="cypress" />

class Menu {
    elements = {
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
        this.elements.reset().click();
    }

}

export default new Menu();