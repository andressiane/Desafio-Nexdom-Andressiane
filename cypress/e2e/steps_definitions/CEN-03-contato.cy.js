/// <reference types="cypress" />
import pages from "../pageObject/pages";
import contatoPage from "../pageObject/contatoPage";

describe('Acessar Página Inicial', () => {

  beforeEach(() => {
    pages.visit();
    pages.menuContato();
  });

  it('Cenário 3 = Submissão do Formulário de Contato ', () => {

    //o campo Nome deve estar visível
    cy.get('[name="form_fields[name]"]')
      .should('be.visible').type(contatoPage.nome);

    // o campo E-mail deve estar visível
    cy.get('[name="form_fields[email]"]')
      .should('be.visible').type(contatoPage.email);

    // o campo Empresa deve estar visível
    cy.get('[name="form_fields[message]"]')
      .should('be.visible').type(contatoPage.empresa);

    // o campo Cargo deve estar visível
    cy.get('[name="form_fields[field_67e0483]"]')
      .should('be.visible').type(contatoPage.cargo);

    // o campo Telefone deve estar visível
    cy.get('[name="form_fields[field_5778e7b]"]')
      .should('be.visible').type(contatoPage.telefone);

    // o campo Assunto deve estar visível
    cy.get('[name="form_fields[field_f77a763]"]')
      .should('be.visible').type(contatoPage.assunto);

    //clicar no checkbox "Li e aceito os termos de uso"
    cy.get('[name="form_fields[field_7651528]"]').should('be.visible').click();

    // //clica no botão Enviar
    // cy.get('.elementor-field-type-submit > .elementor-button').click();

    // // mensagem de sucesso deve ser exibida
    // cy.contains('As suas respostas foram recebidas com sucesso!')
    //   .should('be.visible');

  })


})