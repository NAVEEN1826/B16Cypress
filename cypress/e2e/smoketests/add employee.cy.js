
import addemployee from '../../pages/Addemployee.pom'

describe("verify add employee functionality", () => {


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

        cy.get('input[placeholder="First Name"]').type("naveenkumar")

        cy.get('input[name="lastName"]').type("D")

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should("be.visible")


    })


    it("verify mandotory details in add emplyee", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[placeholder="Username"]').type("Admin")

        cy.get('input[ name="password"]').type("admin123")

        cy.get('button[type="submit"]').click()

        //Asertions
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains('Dashboard').should("be.visible")
        cy.contains('PIM').click()
        cy.contains('Add Employee').click()
        cy.get('Button[type="submit"]').click()
        cy.contains('Required').should("be.visible")


    })

    it("verify characters limits for first name field", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[placeholder="Username"]').type("Admin")

        cy.get('input[ name="password"]').type("admin123")

        cy.get('button[type="submit"]').click()

        //Asertions
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains('Dashboard').should("be.visible")
        cy.contains('PIM').click()
        cy.contains('Add Employee').click()
        cy.get('input[placeholder="First Name"]').type("djfsdjfjdfjkdshkjfhjdskhfhuhujhlkjljljsdhj")
        cy.contains('Should not exceed 30 characters').should('be.visible')


    })

})