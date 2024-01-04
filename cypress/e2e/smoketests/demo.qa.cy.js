describe('verify the functionality textbox for demo.qa', () => {
  it('verify the full name and email and current address and perenmentaddress ', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get('input[placeholder="Full Name"]').type("naveen")
    cy.get('input[type="email"]').type("dnaven123@gmail.com")
    cy.get(' textarea[placeholder="Current Address"]').type("8th main nagasandra ")
    cy.get('textarea[id="permanentAddress"]').type("4thmain bagalagunte")
    cy.get('button[id="submit"]').click()
  })
})