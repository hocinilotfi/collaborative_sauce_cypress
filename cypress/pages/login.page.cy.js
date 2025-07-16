/// <reference types="cypress" />

class Login {
    elements = {
        userName: ()=>  cy.get("#user-name"),
        password: ()=> cy.get("#password"),
        loginButton: ()=> cy.get("#login-button"),
        erreurMessage: ()=> cy.get('[data-test="error"]')
    }

    //actions
saisirUsername(username){
   this.elements.userName().clear().type(username);
}

saisirPassword(password){
    this.elements.password().clear().type(password);
}

cliqueButton(){
    this.elements.loginButton().click();
}

accederDashboard(){
    cy.url().then((url) => {
            expect(url).to.equal('https://www.saucedemo.com/inventory.html');
            });
}

genererErreur(){
    this.elements.erreurMessage().should(
            'have.text',
            'Epic sadface: Username and password do not match any user in this service'
        );
}

doLogin(username,password){
    this.saisirUsername(username);
    this.saisirPassword(password);
    this.cliqueButton();
}

}

module.exports = new Login();
export default Login;