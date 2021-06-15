describe('Register Success', () =>{

    
     it('RegisterTestSuccess', function() {
        cy.visit('http://localhost:3000/Register')
         cy.get('.username').type('keesje').should('have.value', 'keesje')
         
         cy.get('.password').type('kareltje').should('have.value', 'kareltje')

         cy.get('.email').type('keeskarel@gmail.com').should('have.value', 'keeskarel@gmail.com')

         cy.contains('Register').click()

         cy.contains('User is toegevoegd!').should('be.visible')
    })

}
)
describe('Register Failed', () =>{
   
     it('RegisterTestFail', function() {
        cy.visit('http://localhost:3000/Register')
         cy.get('.username').type('keesje').should('have.value', 'keesje')
         
         cy.get('.password').type('kareltje').should('have.value', 'kareltje')

         cy.get('.email').type('keeskarel@gmail.com').should('have.value', 'keeskarel@gmail.com')

         cy.contains('Register').click()

         cy.contains('Oeps, er is iets foutgegaan!').should('be.visible')
    })

}
)