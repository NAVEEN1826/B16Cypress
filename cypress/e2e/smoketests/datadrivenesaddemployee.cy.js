
const availablefixtures = [
    {
        "name": "addemployee",
        "context": "arun"
    },
    
    {
        "name": "addemployeekiran",
        "context": "kiran"
    },

    {
        "name": "addemployeerajesh",
        "context": "rajesh"
    },
   
    {
        "name": "addemployeesurya",
        "context": "surya"
    },


]


describe('verify add employee functionality', function () {
     
    availablefixtures.forEach((afixture) => {

        describe(afixture.context, () => {

            before(function () {

                cy.fixture(afixture.name).then(function (data) {
                    
                    this.data = data;
                })
            })

            it("verify mandotory details in add emplyee", function ()  {

                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
                cy.get('input[placeholder="Username"]').type("Admin")
        
                cy.get('input[ name="password"]').type("admin123")
        
                cy.get('button[type="submit"]').click()
        
                //Asertions
                cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        
                cy.contains('Dashboard').should("be.visible") 
        
               cy.contains('PIM').click()
        
                cy.contains('Add Employee').click()
        
                cy.get('input[placeholder="First Name"]').type(this.data.firstname)

                cy.get('input[placeholder="Middle Name"]').type(this.data.middlename)
        
                cy.get('input[name="lastName"]').type(this.data.lastname)
                
                cy.get('button[type="submit"]').click()
        
                cy.contains('Successfully Saved').should("be.visible")
        
        
        
            })
    })
})

})
