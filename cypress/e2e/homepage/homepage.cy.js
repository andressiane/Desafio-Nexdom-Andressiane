/// <reference types="cypress" />
import homePage from "../pageObject/homePage";

describe('Acessar Página Inicial', () => {

    beforeEach(() => {
        homePage.visit();
    });

    it('Cenário 1 = Verificação da Página Inicial', () => {
        cy.url().should('eq', 'https://nexdom.tec.br/')

          //o logo da NEXDOM deve estar visível
        homePage.logo.should('be.visible')

        //o menu de navegação deve estar visível
        cy.get('#e-n-menu-title-2393').click();

        //a seção principal da página deve estar visível
          homePage.mainSection.should('be.visible')
        
        //os principais elementos de conteúdo devem estar visíveis
        homePage.mainTitle.should('be.visible')

        homePage.mainButton.should('be.visible')

        // o rodapé deve estar visível
        homePage.footer.should('be.visible')


    })
})