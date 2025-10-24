# Mapa de Distribuição de Comida Solidária 🍛

Este projeto é uma página web interativa que mostra locais que oferecem **refeições gratuitas** para pessoas em situação de rua na cidade do Rio de Janeiro (região central - Lapa, Centro e Glória). 

**Site totalmente em HTML, CSS e JavaScript puro - sem frameworks!**

## 🎯 Funcionalidades

### Mapa Interativo
- **Mapa interativo** construído com [Leaflet](https://leafletjs.com) mostrando marcadores nos endereços dos pontos de distribuição de comida (cozinhas solidárias, projetos sociais, etc.)
- Clique nos marcadores para ver nome do local, endereço e horários de atendimento
- Navegação fluida com zoom e pan, otimizado para dispositivos móveis
- **Filtro por dia da semana** para encontrar locais abertos em dias específicos

### Sistema de Compartilhamento
- **Fácil compartilhamento** da página através de um botão flutuante
- Em **celulares**: utiliza a *Web Share API* para abrir o menu nativo de compartilhamento (permitindo enviar pelo WhatsApp, Instagram, Facebook, etc.)
- Em **computadores**: oferece botões diretos para Facebook, Twitter/X, WhatsApp, Telegram, além de opções para copiar o link para Instagram e TikTok
- Feedback visual confirmando ações de compartilhamento
- **Tooltips contextuais** que descrevem cada ícone no hover (desktop) ou em toque/tap (mobile)

### Contribuição Rápida
- Ícone fixo de contribuição no canto do mapa abre o formulário de issue no GitHub para sugerir novos locais solidários
- O tooltip do atalho explica a ação antes de abrir o GitHub, ajudando quem está em dispositivos móveis

### Design Responsivo e Acessível
- Interface responsiva que funciona perfeitamente em smartphones e desktops
- Uso de emojis e ícones para facilitar a compreensão
- Cores quentes e acolhedoras que transmitem solidariedade
- Texto claro e legível, acessível para pessoas com diferentes níveis de alfabetização
- **Favicon customizado** com ícone de tigela de comida quente representando a solidariedade alimentar

## 🚀 Como usar

Basta abrir o arquivo `index.html` em qualquer navegador web moderno. Não requer instalação de dependências ou servidor web.

### Acessar Online
A página está hospedada no GitHub Pages, o que significa que você pode acessá-la diretamente pelo navegador. Basta abrir [este link](https://marco-jardim.github.io/mapa-de-refeicoes-rj/) e começar a explorar o mapa!

### Navegar no Mapa
- **No celular**: Use os dedos para arrastar o mapa e gesto de pinça para dar zoom
- **No computador**: Use o mouse para arrastar e a roda (scroll) para zoom
- **Clique/toque** em qualquer marcador 📍 para ver os detalhes do local

### Compartilhar
1. Clique no botão de compartilhar (📤) no canto inferior direito
2. **No celular**: Escolha o aplicativo que deseja usar (WhatsApp, Instagram, etc.) no menu que aparecer
3. **No computador**: Clique no ícone da rede social desejada ou copie o link para Instagram/TikTok

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica da página
- **CSS3** - Estilização customizada e responsiva
- **JavaScript Puro (Vanilla JS)** - Lógica da aplicação (sem frameworks!)
- **Leaflet.js** - Biblioteca JavaScript de mapas interativos de código aberto
- **OpenStreetMap** - Fornecimento dos dados do mapa de fundo (© OpenStreetMap contributors)
- **Web Share API** - API nativa do navegador para compartilhamento
- **Phosphor Icons** - Ícones SVG inline para interface

## 🛠 Desenvolvimento Local

### Pré-requisitos
- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação necessária!

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/marco-jardim/mapa-de-refeicoes-rj.git
cd mapa-de-refeicoes-rj
```

2. Abra o arquivo `index.html` diretamente no navegador!

### Estrutura de Arquivos

```
mapa-solidario/
├── index.html       # Estrutura HTML principal
├── styles.css       # Estilos CSS personalizados
├── app.js           # Lógica JavaScript (vanilla)
├── package.json     # Metadados do projeto
├── README.md        # Esta documentação
├── SECURITY.md      # Política de Segurança
└── LICENSE          # Licença MIT
```

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Você pode ajudar de várias formas:

### Adicionar Novos Locais
Se você conhece outros pontos de distribuição de refeições:

1. Faça um **Fork** do projeto
2. Edite o arquivo `app.js`
3. Adicione o novo local no array `foodLocations` com:
   - Nome do local (com emoji apropriado)
   - Endereço completo
   - Horários de atendimento
   - Dias da semana
   - Coordenadas (latitude e longitude)
4. Teste localmente para garantir que o marcador aparece corretamente
5. Abra um **Pull Request** com uma descrição clara

> 💡 Também é possível clicar no novo ícone flutuante "contribuir" dentro do próprio mapa para abrir uma issue de sugestão diretamente no GitHub.

### Atualizar Informações
Se alguma informação estiver desatualizada:

1. Abra uma **Issue** descrevendo o problema
2. Ou faça um **Pull Request** com a correção

### Melhorias no Código
- Correções de bugs
- Melhorias de acessibilidade
- Otimizações de performance
- Novos recursos

### Diretrizes
- Mantenha o foco em locais verificáveis e públicos de ajuda alimentar
- Use formatação consistente (emojis para tipos de refeição, etc.)
- Teste suas mudanças antes de submeter
- Escreva mensagens de commit claras e descritivas

## 📄 Licença

Este projeto é distribuído sob a licença [MIT](LICENSE). Isso significa que você pode:

- ✅ Usar comercialmente
- ✅ Modificar
- ✅ Distribuir
- ✅ Uso privado

Desde que mantenha a atribuição aos autores originais e inclua uma cópia da licença.

## 🙏 Agradecimentos

Este projeto é uma humilde contribuição para ampliar o alcance de informações vitais. Agradecemos especialmente:

### Organizações Sociais
Às organizações que realizam o verdadeiro trabalho de solidariedade na rua:
- **Gastromotiva** - Instituto Gastromotiva
- **SEFRAS** - Serviço Franciscano de Solidariedade
- **Fraternidade sem Fronteiras**
- **Reviver Obras Sociais**
- **Projeto VOAR**
- **Café da Manhã Solidário do Hely (Peruquinha)**
- **Ação da Cidadania** - Pelo combate à fome e à miséria
- **Missionárias da Caridade Lapa**
- **Movimento Nacional de População de Rua do Rio de Janeiro - MNPR/RJ**

### Comunidade Open Source
- **OpenStreetMap** - Pela disponibilização de dados cartográficos abertos
- **Leaflet** - Pela excelente biblioteca de mapas (BSD-2-Clause License)
- **Phosphor Icons** - Pelos ícones SVG utilizados na interface

## 📞 Contato

- **Issues**: Use a [página de Issues](https://github.com/seu-usuario/mapa-solidario/issues) para reportar problemas ou sugerir melhorias
- **Discussões**: Para conversas gerais sobre o projeto

---

**Vamos juntos ampliar a rede de solidariedade!** 💜

Se este projeto foi útil para você, considere:
- ⭐ Dar uma estrela no repositório
- 📢 Compartilhar com outras pessoas
- 🤝 Contribuir com novos locais ou melhorias
- 💰 Apoiar diretamente as organizações que fazem o trabalho no dia a dia
