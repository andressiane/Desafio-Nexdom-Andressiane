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

    //o menu "Soluções" está vísivel e clicar no menu "Soluções"
    pages.menuSolucoes();

    //o elemento "Gestão de planos de saúde" deve estar visível
    cy.contains('a', 'Gestão de planos de saúde')
      .should('be.visible');

    //fecha o dropdown
    cy.get('body').click(500, 700);

    cy.wait(3000);

    //Visualiza a parte de "Nossos números"
    cy.get('[data-id="7dc5b97"]')
      .scrollIntoView().should('be.visible');

    cy.wait(3000);

    //Visualiza a parte de "Nosso vídeo"
    cy.get('[data-id="92ca598"]')
      .scrollIntoView().should('be.visible');

    cy.wait(3000);

    //Visualiza a parte de "Conheça nossas soluções"
    cy.get('[data-id="156e92c"]')
      .scrollIntoView().should('be.visible');

    cy.wait(3000);

    //Visualiza a parte de "Diferenciais"
    cy.get('[data-id="5094aad"]')
      .scrollIntoView().should('be.visible');

    cy.wait(3000);
    //Visualizar a parte de "Nosso propósito"
    cy.get('[data-id="336a425"]')
      .scrollIntoView().should('be.visible');


    cy.log('Cypress verificou a página inicial inteira"');

  })
})