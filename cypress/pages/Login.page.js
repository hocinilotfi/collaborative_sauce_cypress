class LoginPage {
  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get('#user-name').should('be.visible').type(username);
  }

  fillPassword(password) {
    cy.get('#password').should('be.visible').type(password);
  }

  clickLogin() {
    cy.get('#login-button').should('be.visible').click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}

// Création d'une instance de la classe et exportation
const loginPage = new LoginPage();
export default loginPage;
