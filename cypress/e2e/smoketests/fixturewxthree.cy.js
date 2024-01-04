import data from '../../fixtures/registerdata.json'
describe('Understanding Fixtures', function () {


  it('Validate register flow ', function () {

    cy.visit('https://shop.demoqa.com/my-account/');


    cy.get("#reg_username").type(data.username)


    cy.get("#reg_email").type(data.emailaddress)

    cy.get("#reg_password").type(data.weakpassword)


    cy.get('button[name="register"]').should("be.disabled");

    cy.get('button[name="register"]').should('have.attr', 'disabled', 'disabled');

    cy.get("#reg_password").clear()

    cy.wait(10000)

    cy.get("#reg_password", { timeout: 10000 }).clear().type(data.strongpassword)

    cy.wait(9000)

    cy.get('button[name="register"]').click()


    cy.get("#username").should("have.value", data.username)


    cy.contains(" An account is already registered with your email address. ").should("be.visible")
  })

})