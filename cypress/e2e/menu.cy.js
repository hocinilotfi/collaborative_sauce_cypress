/// <reference types="cypress" />

import loginPage from "../pages/login.page";
import menuPage from "../pages/menu.page";

describe(' Test Menu',{ tags: ['menu']}, ()=>{
    beforeEach(() => {

    cy.visit("https://www.saucedemo.com/");
    loginPage.doLogin('standard_user', 'secret_sauce');
  });
  it(' les éléments de menu doivent etre visible',{tags : ['menu' , 'visibilite']}, ()=> {
        cy.get('#react-burger-menu-btn').click();
        menuPage.elements.allItem().should('be.visible');
        menuPage.elements.about().should('be.visible');
        menuPage.elements.logout().should('be.visible');
        menuPage.elements.reset().should('be.visible');


  });


});
