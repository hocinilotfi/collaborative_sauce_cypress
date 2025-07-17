class Allitems{
    elements={

        menuBoutton : () => cy.get("#react-burger-menu-btn"),
        allItems : () => cy.get("#inventory_sidebar_link"),
        productCards: () => cy.get('.inventory_item'),
         
    };

    CliqueSUrMenu(){
        this.elements.menuBoutton().should('be.visible').click();
    }
    CLiqueSurallItems(){
        this.elements.allItems().should('be.visible').click();
    }
    getNombreDeProduitsVisibles() {
        return this.elements.productCards();
    }
}