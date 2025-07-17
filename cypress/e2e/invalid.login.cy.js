import loginpage from '/pages/loginpage'

describe("Login avec identifiants invalides", () => {
    before(function () {
        cy.fixture("login_cridentials").then(function (data) {
            this.data = data.invalid;
        });
    });

    it("Affichage d’erreur pour chaque mauvais login", function () {
        this.data.forEach((user) => {
            cy.visit("https://www.saucedemo.com/")
            LoginPage.saisirUsernam(user.username)
            LoginPage.saisirPassword(user.password)
            LoginPage.cliqueSurLogin()
            LoginPage.elements.errorMessage().should("be.visible")
        });
    });
});
