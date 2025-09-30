/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {

    var email = `teste${Date.now()}@teste.com`;

    cy.preencherCadastro('Vitor', 'Alves', email, '11999999999', 'Teste@123')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
  })

  it('Deve validar mensagem de erro com campo de nome inválido', () => {
    cy.preencherCadastro('Vitor123', 'Alves', 'teste23@teste.com', '11999999999', 'Teste@123')

    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar mensagem de erro de e-mail inválido', () => {
    cy.preencherCadastro('Vitor', 'Alves', 'teste23teste.com', '11999999999', 'Teste@123')

    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('Deve validar mensagem de formato de senha inválida', () => {
    cy.preencherCadastro('Vitor', 'Alves', 'teste23@teste.com', '11999999999', 'Teste123')

    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres')
  })
})