import Login from '/page/login.page'

describe("Login avec identifiants invalides", { tags: '@invalidLogin' }, () => {

    before(function () {
        cy.fixture("login_cridentials").then(function (data) {
            this.data = data.invalid;
        });
    });

    it("Affichage d’erreur pour chaque mauvais login", function () {
        this.data.forEach((user) => {
            cy.visit("https://www.saucedemo.com/");
            Login.saisirUsername(user.username);
            Login.saisirPassword(user.password);
            Login.cliqueButton();
            Login.isDisplayedError();
        });
    });

});
