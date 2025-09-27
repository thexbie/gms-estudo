/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('Bruno')
    cy.get('#signup-lastname').type('Teste')
    cy.get('#signup-email').type('teste3@example.com')
    cy.get('#signup-password').type('Senha@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
  })
})