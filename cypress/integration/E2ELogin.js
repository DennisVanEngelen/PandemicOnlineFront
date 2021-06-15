describe('Login Success', () =>{

    
    it('LoginTestSuccess', function() {
       cy.visit('http://localhost:3000/Login')

        cy.get('.username').type('keesje').should('have.value', 'keesje')

        cy.get('.password').type('kareltje').should('have.value', 'kareltje')

        cy.contains('Log-in').click()

        cy.contains('Login Succeeded!').should('be.visible')
   })

}
)

describe('Login Failed', () =>{
    
    it('LoginTestFail', function() {
       cy.visit('http://localhost:3000/Login')

        cy.get('.username').type('pieter').should('have.value', 'pieter')

        cy.get('.password').type('post').should('have.value', 'post')

        cy.contains('Log-in').click()

        cy.contains('Login Failed!').should('be.visible')
   })

}
)