describe("Signing in", () => {
  before(() => {
    cy.signup("user@email.com", "12345678", "user");
  });

  it("with valid credentials, redirects to '/posts'", () => {
    cy.visit("/login");
    cy.get("#email").type("user@email.com");
    cy.get("#password").type("12345678");
    cy.get("#submit").click();

    cy.url().should("include", "/posts");
  });

  it("with missing password, redirects to '/login'", () => {
    cy.visit("/login");
    cy.get("#email").type("user@email.com");
    cy.get("#submit").click();

    cy.url().should("include", "/login");
  });

  it("with missing email, redirects to '/login'", () => {
    cy.visit("/login");
    cy.get("#password").type("12345678");
    cy.get("#submit").click();

    cy.url().should("include", "/login");
  });
});
