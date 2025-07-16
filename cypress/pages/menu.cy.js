class MenuPage{
    elements={
        menuBoutton : () => cy.get("#react-burger-menu-btn"),
        allItem : () => cy.get("#inventory_sidebar_link"),  
        //logOut : () => cy.get("#logout_sidebar_link"),
        //resetAppState : () => cy.get("#reset_sidebar_link"),
    };

    Menu() {
        this.elements.menuBoutton().should('be.visible').click();
    }
    AllItems(){
        this.elements.allItem().should('be.visible').click();
    }
    /**clickLogOut(){
        this.elements.logOut().click();
    }**/

}
export default new MenuPage();