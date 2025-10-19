# Planning Guide

Um mapa interativo e solidário que conecta pessoas em situação de rua com pontos de distribuição gratuita de refeições no Centro do Rio de Janeiro, facilitando o compartilhamento dessas informações vitais através de redes sociais e mensageiros.

**Experience Qualities**:
1. **Acessível** - Interface simples com emojis e texto claro, compreensível mesmo para pessoas com baixa alfabetização
2. **Solidário** - Design caloroso e acolhedor que transmite empatia e apoio à causa social
3. **Prático** - Informações diretas e acionáveis com fácil compartilhamento para ampliar o alcance

**Complexity Level**: Micro Tool (single-purpose)
- O app é uma ferramenta focada com visualização de mapa interativo, marcadores estáticos e funcionalidade de compartilhamento social. Implementado em HTML, CSS e JavaScript puro (sem frameworks) para máxima compatibilidade, leveza e facilidade de manutenção.

## Essential Features

### Mapa Interativo com Leaflet
- **Functionality**: Exibir mapa da região central do Rio (Lapa/Centro/Glória) com marcadores nos locais de distribuição de comida
- **Purpose**: Permitir que usuários visualizem geograficamente onde encontrar refeições gratuitas
- **Trigger**: Carregamento automático da página
- **Progression**: Página carrega → Mapa renderiza centralizado na Lapa → Marcadores aparecem nos 6 locais → Usuário pode navegar/zoom → Clique em marcador abre popup com detalhes
- **Success criteria**: Todos os 6 pontos visíveis no zoom inicial, popups abrem com informações completas (nome, endereço, horário, dias), mapa responsivo em mobile

### Marcadores com Informações Detalhadas
- **Functionality**: Cada local de distribuição tem um marcador clicável que exibe popup com nome, endereço, horários e dias de funcionamento
- **Purpose**: Fornecer informações específicas e atualizadas sobre cada ponto de alimentação
- **Trigger**: Clique/tap no marcador do mapa
- **Progression**: Usuário clica marcador → Popup abre sobre o marcador → Exibe emoji do tipo de refeição + nome do local + endereço + horários + dias da semana → Usuário pode fechar ou clicar em outro marcador
- **Success criteria**: Popups legíveis em mobile e desktop, emojis aparecem corretamente, informações formatadas claramente

### Sistema de Compartilhamento Social
- **Functionality**: Botão flutuante que permite compartilhar o site via Web Share API (mobile) ou links diretos para redes sociais (desktop)
- **Purpose**: Ampliar o alcance das informações permitindo que usuários compartilhem facilmente com pessoas que precisam
- **Trigger**: Clique no botão flutuante de compartilhar (📤)
- **Progression (Mobile com Web Share)**: Usuário clica botão → Web Share API abre menu nativo → Usuário escolhe app (WhatsApp/Instagram/etc) → Compartilha
- **Progression (Desktop/Fallback)**: Usuário clica botão → Painel de ícones sociais aparece → Usuário clica ícone específico → Abre janela/tab de compartilhamento ou copia link → Feedback visual de sucesso
- **Success criteria**: Web Share funciona em mobile (iOS Safari, Chrome Android), fallback funciona em desktop, todos os botões sociais (Facebook, Twitter, WhatsApp, Telegram) abrem corretamente, cópia para clipboard funciona para Instagram/TikTok com feedback

## Edge Case Handling

- **Sem conexão de internet**: Mensagem clara indicando que o mapa precisa de internet para carregar tiles
- **Navegador sem suporte à Clipboard API**: Desabilitar botões de cópia com tooltip explicativo
- **Web Share API indisponível**: Automaticamente mostrar painel de compartilhamento manual
- **Tela muito pequena**: Botão de compartilhar redimensiona mas mantém área de toque mínima de 44px
- **Popups sobrepostos**: Sistema nativo do Leaflet fecha popup anterior ao abrir novo

## Design Direction

O design deve evocar sentimentos de solidariedade, acolhimento e esperança, com uma estética limpa e acessível que prioriza legibilidade e facilidade de uso. Interface minimal mas calorosa, usando cores que transmitam calor humano e apoio, evitando excesso visual que possa confundir usuários.

## Color Selection

Paleta Analogous (cores quentes adjacentes no círculo cromático) para transmitir calor humano, acolhimento e esperança.

- **Primary Color**: Laranja quente (oklch(0.68 0.15 45)) - representa calor, alimentação, solidariedade e ação comunitária
- **Secondary Colors**: Amarelo dourado (oklch(0.85 0.12 85)) para destaques positivos; terracota suave (oklch(0.60 0.10 35)) para elementos secundários
- **Accent Color**: Vermelho coral vibrante (oklch(0.65 0.20 25)) para CTAs e botão de compartilhar, transmitindo urgência positiva e importância
- **Foreground/Background Pairings**:
  - Background (Bege claro oklch(0.97 0.01 75)): Texto primário escuro (oklch(0.25 0.02 45)) - Ratio 12.8:1 ✓
  - Card (Branco oklch(1 0 0)): Texto primário (oklch(0.25 0.02 45)) - Ratio 14.2:1 ✓
  - Primary (Laranja oklch(0.68 0.15 45)): Texto branco (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Secondary (Dourado oklch(0.85 0.12 85)): Texto escuro (oklch(0.25 0.02 45)) - Ratio 10.5:1 ✓
  - Accent (Coral oklch(0.65 0.20 25)): Texto branco (oklch(1 0 0)) - Ratio 4.8:1 ✓
  - Muted (Bege médio oklch(0.90 0.02 75)): Texto médio (oklch(0.50 0.02 45)) - Ratio 6.2:1 ✓

## Font Selection

Tipografia humanista e altamente legível que transmita clareza e acessibilidade, priorizando leitura fácil em telas pequenas. Uso de Inter (sans-serif) para toda a interface pela sua excelente legibilidade em todos os tamanhos e pesos.

- **Typographic Hierarchy**:
  - H1 (Título principal): Inter Bold/32px/tight letter-spacing/-0.02em/leading-tight
  - H2 (Subtítulos no popup): Inter SemiBold/18px/normal spacing/leading-snug
  - Body (Texto de endereço/horários): Inter Regular/15px/normal spacing/leading-relaxed
  - Small (Atribuições): Inter Regular/13px/tight spacing/leading-normal
  - Button Labels: Inter Medium/14px/normal spacing/uppercase

## Animations

Animações sutis e propositais que guiam a atenção sem atrasar ou distrair, mantendo leveza e responsividade. Movimento discreto para reforçar ações de compartilhamento e interação com o mapa.

- **Purposeful Meaning**: Animações de fade-in suave para popups (200ms) reforçam a revelação de informação; escala suave (scale 0.95→1.0) no botão de compartilhar ao aparecer transmite presença não intrusiva
- **Hierarchy of Movement**: Botão de compartilhar tem hover/tap feedback imediato (100ms scale pulse); painel de ícones sociais slide-in lateral (250ms) para entrada dramática mas não agressiva; popups do mapa fade natural do Leaflet

## Component Selection

- **Components**: 
  - Botões nativos HTML com estilização CSS customizada para máxima compatibilidade
  - Sistema de cards CSS puro para painel de compartilhamento flutuante
  - Tooltips via atributos aria-label para acessibilidade
  - Toasts customizados em JavaScript puro para notificações
- **Customizations**: 
  - Botão flutuante de compartilhar com position fixed e border-radius circular
  - Ícones SVG inline para redes sociais (Facebook, X/Twitter, WhatsApp, Telegram, Instagram, TikTok, Compartilhar)
  - Container customizado para mapa Leaflet com height 100vh
  - Sistema de toast notification personalizado para feedback de cópia
- **States**: 
  - Botão compartilhar: default (sombra suave), hover (escala 1.05 + sombra elevada), active (escala 0.95)
  - Ícones sociais: transparente por padrão, hover com background subtle + cor da rede social, active com feedback visual
  - Popups do mapa: aberto/fechado controlado pelo Leaflet
  - Toasts: animação de entrada (slide-in-down) e saída (fade-out)
- **Icon Selection**: 
  - SVG Phosphor Icons inline para compartilhar e redes sociais
  - Emojis nos marcadores e informações do mapa para máxima compatibilidade
- **Spacing**: 
  - Padding interno de cards/botões: 12-16px
  - Gap entre ícones sociais: 8px
  - Margin do botão flutuante das bordas: 24px desktop / 16px mobile
  - Padding dos popups do mapa: 14px 16px
- **Mobile**: 
  - Botão de compartilhar reduz para 48px×48px (mantém 44px+ de área de toque)
  - Painel de ícones em mobile adapta grid (2 colunas para sociais, 3 para copiar)
  - Mapa ocupa 100% da viewport com controles do Leaflet adaptados para touch
  - Font-sizes mantidos para legibilidade mobile
  - Toasts adaptam largura para mobile (calc(100vw - 32px))
  - Mobile-first design com breakpoint em 768px para adaptações desktop
