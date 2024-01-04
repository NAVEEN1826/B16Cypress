import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import dashboard from '../../pages/dashboardpage.pom'
import addemployee from '../../pages/Addemployee.pom'

import data from '../../fixtures/addjobtitle.json'

Given('User login as admin',() =>{

     cy.login(data.username, data.password)

})

And('User clicks on the PIM module', ()=>{
   
    cy.contains(dashboard.pimmenu()).click()

})

And('User clicks on the Add employee submenu', ()=>{
   
    cy.contains(addemployee.addEmployeeSubmenu()).click()

})

And('User enter firstname as {string} and lastname as {string}', (firstname, lastname)=>{
   
    cy.get(addemployee.firstnameInput()).type(firstname)
    cy.get(addemployee.lastnameInput()).type(lastname)
})

And('User clicks on the save button', ()=>{
   
    cy.get(addemployee.saveButton()).click()

})

Then('User should get successfully added message', ()=>{
   
    cy.contains(addemployee.successmessage()).should('be.visible')

})
