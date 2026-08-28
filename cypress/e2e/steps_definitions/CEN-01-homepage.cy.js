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

    //o menu "Soluções" está vísivel
    pages.menuSolucoes();

    //menu "Sobre Nós" deve ser exibido
    cy.contains('Sobre nós').should('be.visible');

    //menu "Soluções" deve ser exibido
    cy.contains('Soluções').should('be.visible');

    //fecha o dropdown
    pages.fechandoDropdwon();

    //menu "Parceiros" deve ser exibido
    cy.contains('Parceiros').should('be.visible');

    //menu "Carreiras" deve ser exibido
    cy.contains('Carreiras').should('be.visible');

    //menu "Contato" deve ser exibido
    cy.contains('Contato').should('be.visible');

    //Visualiza a parte de "Nossos números"
    pages.nossosNumeros();

    //Visualiza a parte de "Nosso vídeo"
    pages.nossoVideo();

    //Visualiza a parte de "Conheça nossas soluções"
    pages.nossasSolucoes();

    //Visualiza a parte de "Diferenciais"
    pages.pgDiferenciais();

    //Visualizar a parte de "Nosso propósito"
    pages.nossoProposito();

    //Valida a mensagem final da página
    cy.contains('Somos uma empresa do Sistema Unimed').should('be.visible');

    //Mensagem de log para avisar que o Cypress concluiu com sucesso
    cy.log('Cypress verificou a página inicial inteira com sucesso"');

  })
})