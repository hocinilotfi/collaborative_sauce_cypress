import loginPage from '../pages/Login.page';  // Importation de l'instance unique

describe('Login Test - SauceDemo', () => {
  
  beforeEach(() => {
    loginPage.visit();  // Utilisation de l'instance existante
  });

  it('should successfully login with valid credentials and redirect to inventory page', () => {
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('should display error when an invalid username is entered with a valid password', () => {
    loginPage.login('wrong_user', 'secret_sauce');
    loginPage.getErrorMessage().should('be.visible')
      .and('contain', 'Username and password do not match');
  });

  it('should display error when an invalid password is entered with a valid username', () => {
    loginPage.login('standard_user', 'wrong_password');
    loginPage.getErrorMessage().should('be.visible')
      .and('contain', 'Username and password do not match');
  });
});
