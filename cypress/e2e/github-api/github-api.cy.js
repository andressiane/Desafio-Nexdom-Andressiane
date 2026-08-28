describe('Testes de API Rest com o Github', () => {
    const baseUrl = 'https://api.github.com';
    const repoName = `repo-teste-cypress-${Date.now()}`;

    let issueNumber;
    let headers;
    let username;

    before(() => {
        cy.env(['GITHUB_TOKEN', 'GITHUB_USERNAME']).then(({ GITHUB_TOKEN, GITHUB_USERNAME }) => {
            username = GITHUB_USERNAME;

            headers = {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: 'application/vnd.github+json',
            };
        });
    });

    it('Criação de um repositório no Github', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/user/repos`,
            headers,
            body: {
                name: repoName,
                description: 'Repositório criado automaticamente pelo Cypress',
                private: false,
            },
        }).then((response) => {
            // 201 = criado com sucesso
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq(repoName);
        });
    });

    it('Consulta do repositório criado', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/repos/${username}/${repoName}`,
            headers,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(repoName);
        });
    });

    it('Criar uma issue no repositório recém-criado', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/repos/${username}/${repoName}/issues`,
            headers,
            body: {
                title: 'Issue de teste criada via Cypress',
                body: 'Conteúdo de exemplo para validar a criação de issue.',
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.title).to.eq('Issue de teste criada via Cypress');

            // Guarda o número da issue para usar no próximo teste
            issueNumber = response.body.number;
        });
    });

    it('Consultar a issue criada', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/repos/${username}/${repoName}/issues/${issueNumber}`,
            headers,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.number).to.eq(issueNumber);
            expect(response.body.title).to.eq('Issue de teste criada via Cypress');
        });
    });

    it('Excluir o repositório', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/repos/${username}/${repoName}`,
            headers,
        }).then((response) => {
            // 204 = excluído com sucesso, sem conteúdo de retorno
            expect(response.status).to.eq(204);
        });
    });

    it('Consulta para confirmar se o repositório foi excluído', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/repos/${username}/${repoName}`,
            headers,
            failOnStatusCode: false,
        }).then((response) => {
            // 404 = não encontrado
            expect(response.status).to.eq(404);
        });
    });
});
