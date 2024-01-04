
describe('cypress Hooks', ()=>{

    beforeEach("before Each ", ()=>{

        cy.log("Before Each it block this line should print")

    })

    after("After All", ()=>{

        cy.log("After all this line should print")

    })

    before("Before All", ()=>{

        cy.log("Before all this line should print")

    })


    afterEach("After each", ()=>{

        cy.log("After Each it block this line should print")

    })

   

    it('1st test case', ()=>{

        cy.log("this is first it block body")

    })


    it('2nd test case', ()=>{

        cy.log("this is second it block body")
    })


    it('3rd test case', ()=>{


        cy.log("this is third it block body")

    })

})