import loginpage from '../../pages/loginpage.pom'
import dashboard from '../../pages/dashboardpage.pom'
import jobtitle from '../../pages/jobtitle.pom'
import data from '../../fixtures/addjobtitle.json'


describe('Verify add job title functionality', () => {


  before(function(){

    cy.fixture('addjobtitile').then(function(data){
      this.data =data;
    })
  })

    it('verify Add job title with valid input details', () => {


       cy.login("Admin", "admin123")
  
        cy.contains(dashboard.adminmenu()).click()

        cy.contains(jobtitle.jobsubmenu).click()

        cy.contains(jobtitle.jobtitlesoption).click()

        cy.get(jobtitle.addbutton).click()
        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get(jobtitle.jobtitleinput()).type(data.jobtitle+r)

        cy.get(jobtitle.jobdescriptioninput()).type(data.jobdescription)

        cy.get(jobtitle.savebutton()).click()

        cy.contains(jobtitle.successmessage).should('be.visible')
        
      })

    })

  