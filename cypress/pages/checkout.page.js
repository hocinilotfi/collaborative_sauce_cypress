/// <reference types="cypress" />

class CheckoutPage {

  elements = {
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    firstname: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    pageheader:() =>  cy.get('.complete-header')

  }


  startCheckout(firstName, lastName, postalCode) {
    this.elements.checkoutButton().click();
    this.elements.firstname().type(firstName);
    this.elements.lastName().type(lastName);
    this.elements.postalCode().type(postalCode);
    this.elements.continueButton().click();
    this.elements.finishButton().click();
  }

  verifyCheckoutComplete() {
  this.elements.pageheader().should('contain', 'Thank you');
  }
}

export default new CheckoutPage();