describe('Understanding Fixtures',function ()  {

    before(function () {
        cy.fixture('registerdata').then(function (data) {
          this.data = data;
        })
      })

    it('Validate register flow ', function ()  {
      cy.visit('https://shop.demoqa.com/my-account/');


      cy.get("#reg_username").type(this.data.username)
      

       cy.get("#reg_email").type(this.data.emailaddress)
      
       cy.get("#reg_password").type(this.data.weakpassword)
     
     
       cy.get('button[name="register"]').should("be.disabled");

       cy.get('button[name="register"]').should('have.attr', 'disabled', 'disabled');

       cy.get("#reg_password").clear()

       cy.wait(5000)

       cy.get("#reg_password", {timeout:10000}).clear().type(this.data.strongpassword)

       cy.wait(5000)
       
       cy.get('button[name="register"]').click()


      cy.get("#username").should("have.value", this.data.username)

      
      cy.contains(" An account is already registered with your email address. ").should("be.visible")
    })
  
  })