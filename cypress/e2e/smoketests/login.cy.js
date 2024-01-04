describe('verify login functionality', () => {

  it('verify login with valid username and valid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[placeholder="Username"]').type("Admin")

    cy.get('input[ name="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    //Asertions
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.contains('Dashboard').should("be.visible")
  })

  it('verify login with invalid username and valid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[placeholder="Username"]').type("Adminassaa")

    cy.get('input[ name="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")

  })

  it('verify login with valid username and invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[placeholder="Username"]').type("Admin")

    cy.get('input[ name="password"]').type("xcdsadadmin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })

  it('verify login with invalid username and invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[placeholder="Username"]').type("xssaAdmin")

    cy.get('input[ name="password"]').type("adcsadsadmin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })
})