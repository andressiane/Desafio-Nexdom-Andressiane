/// <reference types="cypress" />
import pages from "../pageObject/pages";

describe('Acessar Página Inicial', () => {

  beforeEach(() => {
    pages.visit();
  });

  it('Cenário 2 = Navegação da Página de Soluções da NEXDOM', () => {

    //o menu "Soluções" está vísivel e clicar no menu "Soluções"
    pages.menuSolucoes()

    //clicar em "Autorização e Atendimento"
    cy.contains('a', 'Autorização e Atendimento')
      .click({ force: true });

    //deve ser direcionado para a página de "Autorização e Atendimento"
    cy.url()
      .should('include', '/autorizacao-e-atendimento/');

    //verifica se está sendo possível clicar em "Motor de Regra de Negócio"
    cy.contains('Motor de Regra de Negócio').scrollIntoView().should('be.visible').click();

    //verifica se está sendo possível clicar em "Autorizador On-line"
    cy.contains('Autorizador On-line').should('be.visible').click();

    //verifica se está sendo possível clicar em "Auditoria Web"
    cy.contains('Auditoria Web').should('be.visible').click();

    cy.log('Navegação para "Autorização e Atendimento" realizada com sucesso');

  })


})