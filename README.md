# Mapa de Distribuição de Comida Solidária 🍛

Este projeto é uma página web interativa que mostra locais que oferecem **refeições gratuitas** para pessoas em situação de rua na cidade do Rio de Janeiro (região central - Lapa, Centro e Glória). 

## 🎯 Funcionalidades

### Mapa Interativo
- **Mapa interativo** construído com [Leaflet](https://leafletjs.com) mostrando marcadores nos endereços dos pontos de distribuição de comida (cozinhas solidárias, projetos sociais, etc.)
- Clique nos marcadores para ver nome do local, endereço e horários de atendimento
- Navegação fluida com zoom e pan, otimizado para dispositivos móveis

### Sistema de Compartilhamento
- **Fácil compartilhamento** da página através de um botão flutuante
- Em **celulares**: utiliza a *Web Share API* para abrir o menu nativo de compartilhamento (permitindo enviar pelo WhatsApp, Instagram, Facebook, etc.)
- Em **computadores**: oferece botões diretos para Facebook, Twitter/X, WhatsApp, Telegram, além de opções para copiar o link para Instagram e TikTok
- Feedback visual confirmando ações de compartilhamento

### Design Responsivo e Acessível
- Interface responsiva que funciona perfeitamente em smartphones e desktops
- Uso de emojis e ícones para facilitar a compreensão
- Cores quentes e acolhedoras que transmitem solidariedade
- Texto claro e legível, acessível para pessoas com diferentes níveis de alfabetização

## 📍 Locais Mapeados

1. **🍛 Cozinha Solidária da Lapa (MTST)**
   - 📌 Av. Mem de Sá, 25 – Lapa
   - 🕐 Almoço, doações 11h–18h
   - 📅 Todos os dias (inclui fins de semana e feriados)

2. **🥣 Reviver Obras Sociais**
   - 📌 Rua Riachuelo, 19 – Lapa
   - 🕐 Noite (~20h)
   - 📅 Sábados e feriados conforme demanda

3. **🍽 Refettorio Gastromotiva**
   - 📌 Rua da Lapa, 108 – Lapa
   - 🕐 Almoço 11h30–15h / jantar social
   - 📅 Segunda a sexta (não abre fds/feriado)

4. **🥣 Projeto VOAR**
   - 📌 Praça Nossa Senhora da Glória – Glória
   - 🕐 Café da manhã por volta das 8h
   - 📅 Segunda, quarta e quinta-feiras

5. **🍲 Tenda Franciscana (SEFRAS)**
   - 📌 Largo da Carioca – Centro
   - 🕐 Almoço aproximadamente 12h–13h
   - 📅 Dias úteis (segunda a sexta)

6. **🙏 Fraternidade na Rua (Fraternidade sem Fronteiras)**
   - 📌 Rua do Senado, 50 – Lapa
   - 🕐 Almoço por volta das 11h
   - 📅 Segunda a sexta-feira

> ⚠️ **Observação**: Os horários podem variar conforme disponibilidade de voluntários e doações. Recomendamos confirmar diretamente com os responsáveis locais.

## 🚀 Como Usar

### Acessar Online
A página está hospedada e pode ser acessada diretamente pelo navegador. Basta abrir o link e começar a explorar o mapa!

### Navegar no Mapa
- **No celular**: Use os dedos para arrastar o mapa e gesto de pinça para dar zoom
- **No computador**: Use o mouse para arrastar e a roda (scroll) para zoom
- **Clique/toque** em qualquer marcador 📍 para ver os detalhes do local

### Compartilhar
1. Clique no botão de compartilhar (📤) no canto inferior direito
2. **No celular**: Escolha o aplicativo que deseja usar (WhatsApp, Instagram, etc.) no menu que aparecer
3. **No computador**: Clique no ícone da rede social desejada ou copie o link para Instagram/TikTok

## 💻 Tecnologias Utilizadas

- **React 19** - Framework JavaScript para construção da interface
- **TypeScript** - Superset tipado do JavaScript para código mais robusto
- **Leaflet.js** - Biblioteca JavaScript de mapas interativos de código aberto
- **OpenStreetMap** - Fornecimento dos dados do mapa de fundo (© OpenStreetMap contributors)
- **Tailwind CSS v4** - Framework CSS utilitário para estilização
- **shadcn/ui** - Componentes de UI acessíveis e customizáveis
- **Phosphor Icons** - Biblioteca de ícones para interface
- **Vite** - Build tool e servidor de desenvolvimento rápido
- **Web Share API** - API nativa do navegador para compartilhamento

## 🛠 Desenvolvimento Local

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/mapa-solidario.git
cd mapa-solidario
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador em `http://localhost:5173`

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Você pode ajudar de várias formas:

### Adicionar Novos Locais
Se você conhece outros pontos de distribuição de refeições:

1. Faça um **Fork** do projeto
2. Edite o arquivo `src/components/FoodMap.tsx`
3. Adicione o novo local no array `foodLocations` com:
   - Nome do local (com emoji apropriado)
   - Endereço completo
   - Horários de atendimento
   - Dias da semana
   - Coordenadas (latitude e longitude)
4. Teste localmente para garantir que o marcador aparece corretamente
5. Abra um **Pull Request** com uma descrição clara

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
- **MTST** - Movimento dos Trabalhadores Sem Teto
- **Gastromotiva** - Instituto Gastromotiva
- **SEFRAS** - Serviço Franciscano de Solidariedade
- **Fraternidade sem Fronteiras**
- **Reviver Obras Sociais**
- **Projeto VOAR**

### Comunidade Open Source
- **OpenStreetMap** - Pela disponibilização de dados cartográficos abertos
- **Leaflet** - Pela excelente biblioteca de mapas (BSD-2-Clause License)
- **Comunidade React e TypeScript** - Por ferramentas incríveis de desenvolvimento

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
