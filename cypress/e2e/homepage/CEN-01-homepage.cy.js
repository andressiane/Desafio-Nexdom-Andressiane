/// <reference types="cypress" />
import pages from "../pageObject/pages";

describe('Acessar Página Inicial', () => {

  beforeEach(() => {
    pages.visit();
  });

  it('Cenário 1 = Verificação da Página Inicial', () => {

    //o cabeçalho da página deve estar visível
    cy.get('.elementor-element-fe789c4').should('be.visible');

    //o logo da página deve estar visível
    cy.get('[data-id="6eeb4ab"]').find('.elementor-icon').should('be.visible');

    // o usuário clica no menu "Soluções"
    pages.menuSolucoes()

    //o elemento "Gestão de planos de saúde" deve estar visível
    cy.contains('Gestão de planos de saúde')
      .should('be.visible');

    cy.log('Cypress encontrou a opção "Gestão de planos de saúde"');

  })
})