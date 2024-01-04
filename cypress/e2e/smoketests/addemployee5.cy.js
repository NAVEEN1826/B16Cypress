import data from '../../fixtures/addemployeekiran.json'

describe('verify add employee with valid', function () {

            it("verify add employee with valid", () => {

                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
                cy.get('input[placeholder="Username"]').type("Admin")
        
                cy.get('input[ name="password"]').type("admin123")
        
                cy.get('button[type="submit"]').click()
        
                //Asertions
                cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        
                cy.contains('Dashboard').should("be.visible") 
        
               cy.contains('PIM').click()
        
                cy.contains('Add Employee').click()
        
                cy.get('input[placeholder="First Name"]').type(data.firstname)

                cy.get('input[placeholder="Middle Name"]').type(data.middlename)
        
                cy.get('input[name="lastName"]').type(data.lastname)
                
                cy.get('button[type="submit"]').click()
        
                cy.contains('Successfully Saved').should("be.visible")
        
        
            })
    })