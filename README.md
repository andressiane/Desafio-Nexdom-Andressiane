# Desafio - Desafio técnico: Analista de QA Pleno com Cypress
Projeto de automação de testes End-to-End desenvolvido com Cypress e JavaScript como parte
do desafio técnico da NEXDOM.

## Tecnologias utilizadas:
Node.js
Cypress
JavaScript
Git

## Como fazer o Download:
No terminal, execute:
git clone <https://github.com/andressiane/Desafio-Nexdom-Andressiane.git>

## Acesse a pasta do projeto:
cd Desafio-Nexdom-Andressiane

## Dependências
Execute no terminal npm install para instalar as dependências
npm install

## Execução dos testes com Cypress:

**Execute:**
npm run cy:open
ou
npx cypress open

Em seguida, aparecerá uma janela com duas opções, clique em:
E2E Testing

Selecione o navegador desejado e clique em "Start E2E Testing in Chrome" 
(opção utilizada nos testes)

Selecione o teste que deseja executar.
Os Cenários de Testes executáveis estão em "..\cypress\e2e\steps_definitions".

## Casos de testes:
Os Casos de Testes em Gherkin estão em "..\cypress\e2e\features".

## Bugs encontrados:
Os bugs encontrados estão em Bugs_Encontrados.md
E a evidências em "..\cypress\e2e\evidencias

## Testes de API
Os testes automatizados de API estão documentados abaixo ou no arquivo separado README-API.md

///

# Desafio - Testes de API REST (GitHub) com Cypress
Testes automatizados de API REST desenvolvidos com Cypress para validar endpoints da API do GitHub.

## Tecnologias utilizadas:
Node.js
Cypress
JavaScript
GitHub REST API

## Como fazer o Download:
No terminal, execute:
git clone <https://github.com/andressiane/Desafio-Nexdom-Andressiane.git>

## Acesse a pasta do projeto:
cd Desafio-Nexdom-Andressiane

## Dependências
Execute no terminal npm install para instalar as dependências
npm install

## Execução dos testes API REST com Cypress

## Como executar:
Os testes utilizam um Personal Access Token (Tokens(Classic)) do GitHub para autenticação nas requisições.

O token não deve ser inserido diretamente nos arquivos de teste ou versionado no Git.

Crie ou configure o arquivo de exemplo e preencha com seus próprios dados:
*cypress.env.json.example*

Depois edite o `cypress.env.json` criado com um Personal Access Token Tokens(Classic) válido:
   {
     "GITHUB_TOKEN": "seu_personal_access_token",
     "GITHUB_USERNAME": "seu_usuario_do_github"
   }

O token deve ser um Personal Access Token **classic** 
(GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)), com os escopos *repo* (criar/consultar/excluir repositório e issues) e *delete_repo*
(necessário especificamente para o passo de exclusão do repositório).

## Execução dos testes com Cypress:

**Execute:**
npm run cy:open
ou
npx cypress open

Em seguida, aparecerá uma janela com duas opções, clique em:
E2E Testing

Selecione o navegador desejado e clique em "Start E2E Testing in Chrome" 
(opção utilizada nos testes)

*Selecione o teste de API Rest que se encontra em:*
Na pasta "github-api" e para executar github.api
Caminho:  "..\cypress\e2e\github-api"




