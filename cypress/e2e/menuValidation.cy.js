import LoginPage from '../support/pages/LoginPage';
import menuPage from '../support/pages/menuPage';

describe('Gestion du menu avec cookies cross-origin', () => {
  before(() => {
    cy.visit('https://www.saucedemo.com');

    cy.get('body').then(($body) => {
      if ($body.find('#onetrust-accept-btn-handler').length > 0) {
        cy.get('#onetrust-accept-btn-handler').click({ force: true });
      }
    });

    LoginPage.saisirUsernam('standard_user');
    LoginPage.saisirPassword('secret_sauce');
    LoginPage.cliqueSurLogin();

    cy.url().should('include', 'inventory');
  });

  it('Doit cliquer sur "Sign up for free" et valider la redirection', () => {
    menuPage.goTomenu();
  });

  Cypress.on('uncaught:exception', (err) => {
    if (
      err.message.includes('appendChild') ||
      err.message.includes('selector is null') ||
      err.message.includes('bannerGroup is undefined') ||
      err.message.includes('Promise')
    ) {
      return false;
    }
  });
});
