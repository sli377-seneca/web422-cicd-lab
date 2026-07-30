describe("login / logout flow specification", () => {
  it("redirects to /login when visiting a protected page while logged out", () => {
    cy.visit("/vehicles").url().should("include", "/login");
  });

  it("rejects an invalid login and stays on /login", () => {
    cy.visit("/login")
      .get('input[name="username"]')
      .type("bob")
      .get('input[name="password"]')
      .type("wrongPassword{enter}");

    // we are still on the login page, and a warning is shown
    cy.url().should("include", "/login");
    cy.contains("Login failed");
  });

  it("logs a valid user in, shows the vehicles, then logs out", () => {
    cy.visit("/login")
      .get('input[name="username"]')
      .type("bob")
      .get('input[name="password"]')
      .type("myPassword{enter}");

    // a successful login lands on /vehicles and shows the data
    cy.url().should("include", "/vehicles");
    cy.contains("Suzuki");

    // the navbar now offers Logout; clicking it returns us to /login
    cy.get("nav").contains("Logout").click();
    cy.url().should("include", "/login");
  });
});
