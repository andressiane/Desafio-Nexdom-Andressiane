@smoke @contato
Funcionalidade: Formulário de Contato com a NEXDOM
Como visitante do site da NEXDOM
Quero enviar o formulário de contato
Para entrar em contato com a NEXDOM

@ct-03 @ContatoNexdom
Cenário: Submissão do Formulário de Contato
Dado que o usuário acessa a página de Contato do site da NEXDOM
Quando o usuário preenche os campos obrigatórios do formulário de contato
E o usuário clica no botão "Enviar"
Então o formulário deve ser submetido com sucesso
E uma mensagem de confirmação deve ser exibida ao usuário

//OUTROS CASOS DE TESTE//
@Pendente @ct-04 @negativo
Esquema do Cenário: Campo obrigatório vazio
Dado que o usuário acessa a página de Contato do site da NEXDOM
Quando o usuário preenche o formulário deixando o campo "E-mail" vazio
E o usuário marca o checkbox "Li e aceito os termos de uso"
E e o usuário clica no botão "Enviar"
Então o vanegador deve exibir a validação nativa "Preencha este campo." no campo "E-mail"
E o formulário não deve ser submetido

@Pendente @BUG
Esquema do Cenário: Tentar enviar sem selecionar o checkbox de termos de uso
Dado que o usuário acessa a página de Contato do site da NEXDOM
Quando o usuário preenche o formulário de contato com dados válidos
E o usuário não marca o checkbox "Li e aceito os termos de uso"
E o usuário clica no botão "Enviar"
Então o navegador deve exibir a validação nativa "Preencha este campo." no checkbox de termos de uso
E o formulário não deve ser submetido

@Pendente @ct-06 @negativo
Esquema do Cenário: Tentar enviar com e-mail inválido
Dado que o usuário acessa a página de Contato do site da NEXDOM
Quando o usuário preenche o campo "Nome" com um nome válido
E o usuário preenche o campo "E-mail" com um e-mail inválido
E o usuário preenche o campo "Empresa" com um nome de empresa válido
Então o navegador deve exibir a validação nativa de formato de e-mail inválido
E o formulário não deve ser submetido

