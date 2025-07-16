import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

describe('Login Test - SauceDemo', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('1️⃣ should login with valid credentials', () => {
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('2️⃣ should show error for invalid username', () => {
    loginPage.login('wrong_user', 'secret_sauce');
    loginPage.getErrorMessage().should('be.visible')
      .and('contain', 'Username and password do not match');
  });

  it('3️⃣ should show error for invalid password', () => {
    loginPage.login('standard_user', 'wrong_password');
    loginPage.getErrorMessage().should('be.visible')
      .and('contain', 'Username and password do not match');
  });
});
