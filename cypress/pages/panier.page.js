/// <reference types="cypress" />

class PanierPage{
    //locators
    elements = {
        remonveBackpackElement: ()=>  cy.get("#remove-sauce-labs-backpack"),
        remonveBikeLightElement: ()=>  cy.get("#remove-sauce-labs-bike-light"),
        remonveBoltTshirtElement: ()=>  cy.get("#remove-sauce-labs-bolt-t-shirt"),
        remonveFleeceJacketElement: ()=>  cy.get("#remove-sauce-labs-fleece-jacket"),
        remonveOnsieElement: ()=>  cy.get("#remove-sauce-labs-onesie"),
        remonveTestAllTheThingsElement: ()=>  cy.get("#remove-test.allthethings()-t-shirt-(red)"),

        checkoutElement: ()=> cy.get("#checkout"),
        continueShoppingElement: ()=>  cy.get("#continue-shopping"),

    }


}