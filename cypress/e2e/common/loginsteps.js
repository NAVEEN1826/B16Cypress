import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import login from "../../pages/loginpage.pom"

import dashboard from '../../pages/dashboardpage.pom'


Given('User launch the application', () => {
    cy.visit("/web/index.php/auth/login")
  })

When('User enter the username as {string}', (username)=>{

   cy.get(login.usernameInput()).type(username)

})


And('User enter the password as {string}', (password)=>{

    cy.get(login.passwordInput()).type(password)
 
 })

 And('Clicks on the login button', ()=>{

   cy.get(login.loginBtn()).click()

 })

 Then('User should be navigated to dashbaord page', ()=>{

      cy.contains(dashboard.dashboardmenu()).should('be.visible')
      cy.url().should("include", "/web/index.php/dashboard/index")
      cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
 })

 Then('User should get error message',()=>{
     
     cy.contains(login.errormessage()).should('be.visible')

 })
