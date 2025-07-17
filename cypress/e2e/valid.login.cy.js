import Login from '/page/login.page'

describe("Login avec identifiants valides", () => {
    before(function () {
        cy.fixture("login_cridentials").then(function (data) {
            this.data = data.valid;
        });
    });

    it("Login avec chaque utilisateur valide", { tags: '@validlogin' }, function () {
        this.data.forEach((user) => {
            cy.visit("https://www.saucedemo.com/")
            Login.saisirUsername(user.username)
            Login.saisirPassword(user.password)
            Login.cliqueButton()
            cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
            cy.clearCookies(); 
            cy.wait(4000);
        });
    });
});
