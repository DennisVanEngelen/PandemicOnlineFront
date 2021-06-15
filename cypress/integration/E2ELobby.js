describe('JoinLobby', () =>{
   
    it('LobbyJoinTest', function() {
       cy.visit('http://localhost:3000/Lobby')

        cy.contains("Lobby 2")

        cy.contains('Join Lobby').click()

        cy.contains('Oeps, er is iets foutgegaan!').should('be.visible')
   })

}
)