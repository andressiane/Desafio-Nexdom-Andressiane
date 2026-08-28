@smoke @paginainicial @Cenario01
Funcionalidade: Acessando a Paginá Inicial NEXDOM
Como usuário do site da NEXDOM
Quero acessar e navegar pela página inicial
Para conhecer a empresa, suas soluções e entrar em contato

@casodeteste-01
Cenário: Verificação da Página Inicial
Dado que o usuário acessa a página inicial do site da NEXDOM
Então a página inicial deve ser exibida corretamente
E o cabeçalho da página deve estar visível
E o logo da página deve estar visível
E o menu "Home" deve ser exibido
E o menu "Sobre nós" deve ser exibido
E o menu "Soluções" deve ser exibido
E o menu "Parceiros" deve ser exibido
E o menu "Carreiras" deve ser exibido
E o menu "Contato" deve ser exibido

Quando o usuário passa o mouse sobre o menu "Soluções"
Então as opções do menu devem ser exibidas
E o menu "Soluções" deve permanecer visível

Quando o usuário fecha o menu "Soluções"
E percorre a página inicial
Então a seção "Nossos números" deve estar visível
E a seção "Nosso vídeo" deve estar visível
E a seção "Conheça nossas soluções" deve estar visível
E a seção "Diferenciais" deve estar visível
E a seção "Nosso propósito" deve estar visível
E a mensagem "Somos uma empresa do Sistema Unimed" deve estar visível

# //OUTROS CASOS DE TESTES PARA AUTOMAÇÕES FUTURAS//

# @Pendente @casodeteste-02 @navegação
# Cenário: Acessar a página "Sobre nós"
# Dado que o usuário está na página inicial da NEXDOM
# Quando o usuário seleciona o menu "Sobre nós"
# Então o usuário deve ser direcionado para a página "Sobre nós"
# E a página "Sobre nós" deve ser exibida corretamente

# @Pendente @casodeteste-03 @parceiros
# Cenário: Acessar a página "Parceiros"
# Dado que o usuário está na página inicial da NEXDOM
# Quando o usuário seleciona o menu "Parceiros"
# Então o usuário deve ser direcionado para a página "Parceiros"
# E a página deve ser exibida corretamente

# @Pendente @casodeteste-04 @carreiras
# Esquema do Cenário: Acessar uma solução pelo menu "Soluções"
# Dado que o usuário está na página inicial da NEXDOM
# Quando o usuário passa o mouse sobre o menu "Soluções"
# E seleciona a opção "<solução>"
# Então o usuário deve ser direcionado para a página "<solução>"

# @Pendente @casodeteste-05 @video
# Cenário: Reproduzir o vídeo institucional
# Dado que o usuário está na página inicial da NEXDOM
# Quando o usuário navega até a seção "Nosso vídeo"
# E seleciona o botão de reprodução
# Então o vídeo institucional deve ser iniciado

# @Pendente @casodeteste-06 @negativo
# Cenário: Validar o comportamento do botão "Saiba mais"
# Dado que o usuário está na página inicial do site da NEXDOM
# E o botão "Saiba mais" está visível
# Quando o usuário seleciona o botão "Saiba mais"
# Então o usuário não deve ser direcionado para uma página inexistente
# E nenhuma mensagem de erro inesperada deve ser apresentada


