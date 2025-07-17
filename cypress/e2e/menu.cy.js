/// <reference types="cypress" />

import MenuPage from "../pages/menu.page"
import loginPage from "../pages/login.page"

describe('[@menu] Test Menu', ()=>{
    beforeEach(() => {

    loginPage.visit();
    loginPage.doLogin('standard_user', 'secret_sauce');
  });
  it(' [@menu] les éléments de menu doivent etre visible',()=> {
        cy.get('#react-burger-menu-btn').click();
        MenuPageenuPage.elements.allItem().should('be.visible');
        MenuPage.elements.about().should('be.visible');
        MenuPage.elements.logout().should('be.visible');
        MenuPageenuPage.elements.reset().should('be.visible');


  });


});
