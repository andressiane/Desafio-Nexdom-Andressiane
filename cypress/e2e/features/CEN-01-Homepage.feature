@smoke @paginainicial
Funcionalidade: Acessando a Paginá Inicial NEXDOM
Como usuário do site da NEXDOM
Quero navegar e interagir com as páginas principais
Para conhecer a empresa, suas soluções e entrar em contato

@ct-01
Cenário: Verificação da Página Inicial
Dado que o usuário acessa a página inicial do site da NEXDOM
Então a página inicial deve ser exibida corretamente
E o cabeçalho da página deve estar visível
E o logo da página deve estar visível
Quando o usuário clicar para abrir o menu "Soluções"
Então o menu de soluções deve ser exibido
E o menu "Sobre Nós" deve ser exibido

@ct-02 @secoes
Cenário: Verificar as principais seções da página inicial
Quando o usuário navega pela página inicial
Então a seção "Nossos números" deve estar visível
E a seção "Nosso vídeo" deve estar visível
E a seção "Conheça nossas soluções" deve estar visível
E a seção "Diferenciais" deve estar visível
E a seção "Nosso propósito" deve estar visível

# //OUTROS CASOS DE TESTE//
# @Pendente @ct-03
# Esquema do Cenário: Verificar opções do menu de navegação
# Dado que o usuário acessa a página inicial da NEXDOM
# Então o menu "Home" deve estar visível
# E o menu "Sobre nós" deve estar visível
# E o menu "Soluções" deve estar visível
# E o menu "Parceiros" deve estar visível
# E o menu "Carreiras" deve estar visível
# E o menu "Contato" deve estar visível

# @Pendente @ct-04
# Esquema do Cenário: Verificar informações do banner principal
# Dado que o usuário acessa a página inicial da NEXDOM
# Então o texto principal do banner deve estar visível
# E o botão 'Saiba mais' deve estar visível
# E o botão 'Saiba mais' deve estar habilitado
