class MenuPage {
  goTomenu() {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#about_sidebar_link')
      .should('be.visible')
      .invoke('removeAttr', 'target') // évite nouvelle tab
      .click();

    cy.origin('https://saucelabs.com', () => {
      cy.on('uncaught:exception', () => false);

      const clickIfExists = (selector) => {
        cy.get('body').then(($body) => {
          if ($body.find(selector).length > 0) {
            cy.get(selector).should('be.visible').click({ force: true });
          }
        });
      };

      // Cookies éventuels
      cy.wait(1500);
      clickIfExists('#onetrust-accept-btn-handler');
      cy.wait(1000);
      clickIfExists('#LgbsSe-bN97Pc');

      
      cy.get('.MuiButton-containedAccentGreen', { timeout: 10000 })
        .should('be.visible')
        .scrollIntoView()
        .click({ force: true });

    
    });
  }
}

export default new MenuPage();
