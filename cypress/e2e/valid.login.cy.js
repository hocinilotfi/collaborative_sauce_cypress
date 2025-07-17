import loginpage from '/pages/loginpage'

describe("Login avec identifiants valides", () => {
    before(function () {
        cy.fixture("login_cridentials").then(function (data) {
            this.data = data.valid;
        });
    });

    it("Login avec chaque utilisateur valide",{ tags: '@verification'}, function () {
        this.data.forEach((user) => {
            cy.visit("https://www.saucedemo.com/")
            LoginPage.saisirUsernam(user.username)
            LoginPage.saisirPassword(user.password)
            LoginPage.cliqueSurLogin()
            cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
            cy.clearCookies(); 
            cy.wait(4000);
        });
    });
});
