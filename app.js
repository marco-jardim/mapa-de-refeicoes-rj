// Dados dos locais de distribuição de comida
const foodLocations = [  
  {
    "name": "🥣 Reviver Obras Sociais - Igreja Batista Farol da Lapa",
    "address": "📌 Rua Riachuelo, 19 – Lapa",
    "hours": "🕐 Noite (~20h)",
    "days": "📅 Sábados e feriados conforme demanda",
    "daysOfWeek": [
      "sab"
    ],
    "lat": -22.9138874,
    "lng": -43.1809197
  },
  {
    "name": "🍽 Refettorio Gastromotiva",
    "address": "📌 Rua da Lapa, 108 – Lapa",
    "hours": "🕐 Almoço 11h30–15h / jantar social",
    "days": "📅 Segunda a sexta (não abre fds/feriado)",
    "daysOfWeek": [
      "seg",
      "ter",
      "qua",
      "qui",
      "sex"
    ],
    "lat": -22.915677, 
    "lng": -43.177751,
  },
  {
    "name": "🍛 Missionárias da Caridade – Lapa",
    "address": "📌 Travessa do Mosqueira – Lapa",
    "hours": "🕐 Almoço 16h",
    "days": "📅 Segunda a sexta",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex"],
    "lat": -22.914208,
    "lng": -43.179252
  },
  {
    "name": "🍲 Tenda Franciscana (SEFRAS)",
    "address": "📌 Visconde da Gávea, 136 – Gamboa",
    "hours": "🕐 Almoço aproximadamente 12h–13h",
    "days": "📅 Dias úteis (segunda a sexta)",
    "daysOfWeek": [
      "seg",
      "ter",
      "qua",
      "qui",
      "sex"
    ],
    "lat": -22.899720,
    "lng": -43.190432
  },
  {
    "name": "🙏 Cinquentinha - Fraternidade na Rua (Fraternidade sem Fronteiras)",
    "address": "📌 Rua do Senado, 50 – Lapa",
    "hours": "🕐 Almoço por volta das 11h",
    "days": "📅 Segunda a sexta-feira",
    "daysOfWeek": [
      "seg",
      "ter",
      "qua",
      "qui",
      "sex"
    ],
    "lat": -22.909159,
    "lng": -43.184191
  },
  {
    "name": "⛪ Catedral Metropolitana do Rio de Janeiro",
    "address": "📌 Catedral Metropolitana do Rio de Janeiro",
    "hours": "🕐 Café da manhã, 7h",
    "days": "📅 Domingo",
    "daysOfWeek": [
      "dom"
    ],
    "lat": -22.910669,
    "lng": -43.180798
  },
  {
    "name": "🍞 Café da manhã do Hely (Peruquinha)",
    "address": "📌 Avenida Presidente Antônio Carlos, 615 – Centro",
    "hours": "🕐 Café da manhã às 7h; quarta-feira também almoço 15h30",
    "days": "📅 Terça, quarta e sexta",
    "daysOfWeek": [
      "ter",
      "qua",
      "sex"
    ],
    "lat": -22.9077771,
    "lng": -43.1729739
  },
  {
    "name": "🍽 ACVM – Associação de Comunidades de Vida Mariana",
    "address": "📌 Rua Bela, 795 – São Cristóvão",
    "hours": "🕐 Almoço",
    "days": "📅 Dias não especificados",
    "daysOfWeek": ["qua"],
    "lat": -22.888759,
    "lng": -43.224570
  },
  {
    "name": "🍛 Praça da Medalha Milagrosa",
    "address": "📌 Praça da Medalha Milagrosa – São Cristóvão",
    "hours": "🕐 Almoço",
    "days": "📅 Sábado",
    "daysOfWeek": [
      "sab"
    ],
    "lat": -22.916256,
    "lng": -43.212502
  },
  {
    "name": "🥐 Café da manhã Projeto VOAR – Aterro do Flamengo",
    "address": "📌 Aterro do Flamengo em frente à Rua Dois de Dezembro",
    "hours": "🕐 Café da manhã, 7h30",
    "days": "📅 Segunda",
    "daysOfWeek": [
      "seg"
    ],
    "lat": -22.930019,
    "lng": -43.173957
  },
  {
    "name": "🥐 Café da manhã Projeto VOAR – Praça São Salvador",
    "address": "📌 Praça São Salvador – Laranjeiras",
    "hours": "🕐 Café da manhã, 8h30",
    "days": "📅 Quarta",
    "daysOfWeek": [
      "qua"
    ],
    "lat": -22.9339083,
    "lng": -43.179838
  },
  {
    "name": "🥐 Café da manhã Projeto VOAR – Praça Metrô da Glória",
    "address": "📌 Praça do Metrô da Glória",
    "hours": "🕐 Café da manhã",
    "days": "📅 Quinta",
    "daysOfWeek": [
      "qui"
    ],
    "lat": -22.92065,
    "lng": -43.17671
  },
  {
    "name": "🍲 Dona Ana (Defensoria Pública)",
    "address": "📌 Rua Uruguaiana, 174 – Centro",
    "hours": "🕐 Distribuição às 17h",
    "days": "📅 Segunda",
    "daysOfWeek": [
      "seg"
    ],
    "lat": -22.902301,
    "lng": -43.181061
  },
  {
    "name": "⛪ Paróquia Matriz de Nossa Senhora da Glória",
    "address": "📌 Largo do Machado – Rio de Janeiro",
    "hours": "🕐 Café da manhã, 8h30",
    "days": "📅 Domingo",
    "daysOfWeek": [
      "dom"
    ],
    "lat": -22.931285,
    "lng": -43.180438
  },
  {
    "name": "⛪ Jantar solidário na Candelária",
    "address": "📌 Praça Pio X, s/n - Centro",
    "hours": "🕐 Jantar, 19h",
    "days": "📅 Sábado",
    "daysOfWeek": [
      "sab"
    ],
    "lat": -22.901039,
    "lng": -43.178201,
  },
  {
    "name": "Projeto RUAS",
    "address": "📌 Praça Serzedelo Correia, em frente à igreja - Copacabana",
    "hours": "🕐 Noite, 20h–22h30",
    "days": "📅 Terça-feira",
    "daysOfWeek": [
      "ter"
    ],
    "lat": -22.968917,
    "lng": -43.183490
  },
  {
    "name": "🍝 Macarrão na Gonzaga Bastos",
    "address": "📌 Rua Gonzaga Bastos, 296 – Vila Isabel",
    "hours": "🕐 Manhã, 9h30",
    "days": "📅 Domingo",
    "daysOfWeek": [
      "dom"
    ],
    "lat": -22.918034,
    "lng": -43.241500
  },
  {
    "name": "Projeto Só Vamos",
    "address": "📌 Rua Moncorvo Filho, 71 – Centro",
    "hours": "🕐 Almoço, 12h",
    "days": "📅 Sábado",
    "daysOfWeek": [
      "sab"
    ],
    "lat": -22.909085,
    "lng": -43.191850
  },
  {
    "name": "021 Nossas Histórias",
    "address": "📌 República do Paraguai, Centro – Rio de Janeiro – RJ",
    "hours": "🕐 Café da manhã, 7h30",
    "days": "📅 Segundo domingo do mês",
    "daysOfWeek": ["dom"],
    "lat": -22.910672,
    "lng": -43.1796819
  },
  {
    "name": "Casa de Passagem",
    "address": "📌 Estrada Velha do Pilar, Figueira – Duque de Caxias – RJ",
    "hours": "🕐 24h",
    "days": "📅 Todos os dias",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex", "sab", "dom"],
    "lat": -22.64509,
    "lng": -43.31188
  },
  {
    "name": "Centro de Estudos Espíritas Allan Kardec",
    "address": "📌 Rua Duarte Teixeira 195 – Quintino Bocaiúva – Rio de Janeiro – RJ",
    "hours": "🕐 7h às 9h",
    "days": "📅 Sábado",
    "daysOfWeek": ["sab"],
    "lat": -22.89046,
    "lng": -43.32256
  },
  {
    "name": "Centro de Referência Especializado para População de Rua (Duque de Caxias)",
    "address": "📌 Estrada Velha do Pilar s/n – Figueira – Duque de Caxias – RJ",
    "hours": "🕐 24h",
    "days": "📅 Todos os dias",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex", "sab", "dom"],
    "lat": -22.64509,
    "lng": -43.31188
  },
  {
    "name": "Centro de Referência Especializado para População em Situação de Rua (Duque de Caxias)",
    "address": "📌 Estrada Velha do Pilar s/n – Figueira – Duque de Caxias – RJ",
    "hours": "🕐 8h às 17h",
    "days": "📅 Segunda a sexta-feira",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex"],
    "lat": -22.64509,
    "lng": -43.31188
  },
  {
    "name": "Centro de Referência Especializado para População em Situação de Rua (Maricá)",
    "address": "📌 Rua João Batista Deminicis 95, quadra 94 lote 80 – Jardim Miramar – Maricá – RJ",
    "hours": "🕐 8h às 17h",
    "days": "📅 Segunda a sexta-feira",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex"],
    "lat": -22.92906,
    "lng": -42.81472
  },
  {
    "name": "Centro POP Araruama",
    "address": "📌 Travessa Carmelita de Oliveira 03 – Centro – Araruama – RJ",
    "hours": "🕐 8h às 17h",
    "days": "📅 Segunda a sexta-feira",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex"],
    "lat": -22.87107,
    "lng": -42.33692
  },
  {
    "name": "Comunidade Olhar Misericordioso",
    "address": "📌 Vale da Misericórdia Boca do Leão – Resende – RJ",
    "hours": "🕐 Período integral",
    "days": "📅 Todos os dias",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex", "sab", "dom"],
    "lat": -22.47697,
    "lng": -44.44809
  },
  {
    "name": "Comunidade Projeto Amigos da Rua Resende",
    "address": "📌 Rua 3 nº 31 – Toyota I – Resende – RJ",
    "hours": "🕐 Sem horário fixo",
    "days": "📅 Domingo ou segunda-feira",
    "daysOfWeek": ["dom", "seg"],
    "lat": -22.47525,
    "lng": -44.5016
  },
  {
    "name": "Centro de Referência Especializado de Assistência Social (Piraí)",
    "address": "📌 Rua Bulhões de Carvalho 233 – Casa Amarela – Piraí – RJ",
    "hours": "🕐 8h às 17h",
    "days": "📅 Segunda a sexta-feira",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex"],
    "lat": -22.62917,
    "lng": -43.89806
  },
  {
    "name": "CREAS de Quatis",
    "address": "📌 Rua Professora Ana Ferreira de Oliveira 47 – Bondarovsky – Quatis – RJ",
    "hours": "🕐 8h às 17h",
    "days": "📅 Segunda a sexta-feira",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex"],
    "lat": -22.41533,
    "lng": -44.26048
  },
  {
    "name": "Fraternidade Sem Fronteiras",
    "address": "📌 Rua do Senado 50 – Centro – Rio de Janeiro – RJ",
    "hours": "🕐 Sem horário fixo",
    "days": "📅 Todos os dias",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex", "sab", "dom"],
    "lat": -22.91001,
    "lng": -43.18726
  },
  {
    "name": "Igreja Presbiteriana do Grajaú nas Ruas",
    "address": "📌 Rua Nossa Senhora de Lourdes 20, casa 4 – Grajaú – Rio de Janeiro – RJ",
    "hours": "🕐 Horário de almoço",
    "days": "📅 Quarta-feira",
    "daysOfWeek": ["qua"],
    "lat": -22.91290,
    "lng": -43.20030
  },
  {
    "name": "Novo Rumo Obras Sociais",
    "address": "📌 Rua Getúlio 14 – Todos os Santos – Rio de Janeiro – RJ",
    "hours": "🕐 10h às 16h30 (fevereiro a dezembro)",
    "days": "📅 Segunda a sexta-feira",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex"],
    "lat": -22.89339,
    "lng": -43.27906
  },
  {
    "name": "Paróquia Nossa Senhora da Conceição",
    "address": "📌 Praça Doutor Oliveira Botelho s/n – Centro – Resende – RJ",
    "hours": "🕐 14h às 17h",
    "days": "📅 Segunda a sexta-feira",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex"],
    "lat": -22.47859,
    "lng": -44.45401
  },
  {
    "name": "Paróquia Nossa Senhora de Fátima",
    "address": "📌 Rua Cantídio Jesuíno da Costa 105 – Paraíso – Resende – RJ",
    "hours": "🕐 9h às 17h",
    "days": "📅 Segunda a sábado",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex", "sab"],
    "lat": -22.47050,
    "lng": -44.45090
  },
  {
    "name": "Pastoral de Pessoa em Situação de Rua",
    "address": "📌 Paróquia Sagrada Família s/n – Cidade Alegria e Itapuca – Resende – RJ",
    "hours": "🕐 Sem horário fixo",
    "days": "📅 3º sábado do mês",
    "daysOfWeek": ["sab"],
    "lat": -22.48157,
    "lng": -44.49068
  },
  {
    "name": "Projeto Gramachinhos",
    "address": "📌 Rua Tocantins 11 – Jardim Gramacho – Duque de Caxias – RJ",
    "hours": "🕐 Sem horário fixo",
    "days": "📅 Todos os dias",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex", "sab", "dom"],
    "lat": -22.75256,
    "lng": -43.28969
  },
  {
    "name": "Projeto Prato Feito Carioca 1",
    "address": "📌 Rua Visconde de Niterói 1072 – Quadra da Mangueira – Rio de Janeiro – RJ",
    "hours": "🕐 Sem horário fixo",
    "days": "📅 Todos os dias",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex", "sab", "dom"],
    "lat": -22.90338,
    "lng": -43.24085
  },
  {
    "name": "Secretaria de Assistência Social e Direitos Humanos",
    "address": "📌 Rua Coronel Abílio Godoy 127, 2º andar – Paraíso – Resende – RJ",
    "hours": "🕐 8h às 17h",
    "days": "📅 Segunda a sexta-feira",
    "daysOfWeek": ["seg", "ter", "qua", "qui", "sex"],
    "lat": -22.45577,
    "lng": -44.43618
  },
  {
    "name": "SÓ VAMOS RJ",
    "address": "📌 Rua do Matoso 22 – Praça da Bandeira – Rio de Janeiro – RJ",
    "hours": "🕐 Sem horário fixo",
    "days": "📅 Sábado e domingo",
    "daysOfWeek": ["sab", "dom"],
    "lat": -22.91255,
    "lng": -43.21332
  },
  {
    "name": "Projeto Servir",
    "address": "📌 Praça Seans Pena – Rio de Janeiro – RJ",
    "hours": "🕐 7h",
    "days": "📅 Sábado",
    "daysOfWeek": ["sab"],
    "lat": -22.924586, 
    "lng": -43.232349
  },
  {
    "name": "Projeto Servir",
    "address": "📌 Em frente ao Castelinho do Flamengo – Rio de Janeiro – RJ",
    "hours": "🕐 8h",
    "days": "📅 Sábado",
    "daysOfWeek": ["sab"],
    "lat": -22.930019,
    "lng": -43.173957
  }

];

// Variáveis globais
let map;
let markers = [];
let selectedDay = 'todos';

// Inicializar o mapa
function initMap() {
  map = L.map('map').setView([-22.917, -43.178], 14);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  
  updateMarkers();
}

// Atualizar os marcadores no mapa
function updateMarkers() {
  // Remover marcadores existentes
  markers.forEach(marker => marker.remove());
  markers = [];
  
  // Filtrar locais
  const filteredLocations = selectedDay === 'todos' 
    ? foodLocations 
    : foodLocations.filter(loc => loc.daysOfWeek.includes(selectedDay));
  
  // Adicionar novos marcadores
  filteredLocations.forEach(location => {
    const popupContent = `
      <b>${location.name}</b><br>
      ${location.address}<br>
      ${location.hours}<br>
      ${location.days}
    `;
    
    const marker = L.marker([location.lat, location.lng])
      .addTo(map)
      .bindPopup(popupContent);
    
    markers.push(marker);
  });
}

// Configurar filtro de dias
function setupDayFilter() {
  const dayButtons = document.querySelectorAll('.day-btn');
  
  dayButtons.forEach(button => {
    button.addEventListener('click', () => {
      const day = button.dataset.day;
      
      // Remover classe active de todos os botões
      dayButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      
      // Adicionar classe active ao botão clicado
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      
      // Atualizar dia selecionado e marcadores
      selectedDay = day;
      updateMarkers();
    });
  });
}

// Controle do painel de compartilhamento
let showPanel = false;

// Exibir notificações toast
function showToast(type, title, description) {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    ${description ? `<div class="toast-description">${description}</div>` : ''}
  `;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('fadeout');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Copiar texto para área de transferência
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('success', 'Link copiado!', 'Cole no Instagram ou TikTok para compartilhar');
  } catch (err) {
    showToast('error', 'Erro ao copiar link', 'Tente novamente');
  }
}

// Alternar painel de compartilhamento
function toggleSharePanel() {
  const panel = document.getElementById('share-panel');
  showPanel = !showPanel;
  
  if (showPanel) {
    panel.classList.remove('hidden');
  } else {
    panel.classList.add('hidden');
  }
}

async function handleShare() {
  const shareUrl = window.location.href;
  const shareTitle = 'Mapa Solidário - Distribuição de Comida RJ';
  const shareText = 'Veja locais de distribuição gratuita de refeições para pessoas em situação de rua no Rio de Janeiro';

  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl
      });
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Erro ao compartilhar:', err);
      }
    }
  } else {
    toggleSharePanel();
  }
}

// Configurar todos os eventos
function setupEventListeners() {
  const shareBtn = document.getElementById('share-btn');
  shareBtn.addEventListener('click', handleShare);

  const socialBtns = document.querySelectorAll('[data-social]');
  socialBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const social = btn.getAttribute('data-social');
      const shareUrl = window.location.href;
      const shareText = 'Veja locais de distribuição gratuita de refeições para pessoas em situação de rua no Rio de Janeiro';
      
      let url;
      switch (social) {
        case 'facebook':
          url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
          break;
        case 'twitter':
          url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
          break;
        case 'whatsapp':
          url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
          break;
        case 'telegram':
          url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
          break;
      }
      
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });

  const copyBtns = document.querySelectorAll('[data-copy]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      copyToClipboard(window.location.href);
    });
  });

  document.addEventListener('click', (e) => {
    const shareContainer = document.getElementById('share-container');
    const shareBtn = document.getElementById('share-btn');
    
    if (showPanel && !shareContainer.contains(e.target) && e.target !== shareBtn) {
      toggleSharePanel();
    }
  });
}

function setupTooltips() {
  const triggers = document.querySelectorAll('[data-tooltip]');
  let activeTooltip = null;
  let activeTrigger = null;
  let hideTimer = null;
  const coarsePointerQuery = window.matchMedia('(pointer: coarse)');

  const clearTooltip = () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }

    if (activeTooltip && activeTooltip.parentNode) {
      const tooltipToRemove = activeTooltip;
      const trigger = activeTrigger;
      tooltipToRemove.classList.remove('visible');
      activeTooltip = null;
      activeTrigger = null;

      setTimeout(() => {
        if (tooltipToRemove.parentNode) {
          tooltipToRemove.parentNode.removeChild(tooltipToRemove);
        }
      }, 150);

      if (trigger) {
        trigger.removeAttribute('aria-describedby');
      }
    }
  };

  const scheduleHide = (delay = 0) => {
    if (!activeTooltip) {
      return;
    }

    if (hideTimer) {
      clearTimeout(hideTimer);
    }

    if (delay <= 0) {
      clearTooltip();
    } else {
      hideTimer = setTimeout(() => {
        clearTooltip();
      }, delay);
    }
  };

  const showTooltip = (trigger) => {
    const text = trigger.getAttribute('data-tooltip');
    if (!text) {
      return;
    }

    if (activeTrigger !== trigger) {
      clearTooltip();
    }

    if (activeTrigger === trigger && activeTooltip) {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      return;
    }

    const bubble = document.createElement('div');
    bubble.className = 'tooltip-bubble';
    bubble.setAttribute('role', 'tooltip');
    const tooltipId = `tooltip-${Date.now()}`;
    bubble.id = tooltipId;
    bubble.textContent = text;
    trigger.appendChild(bubble);
    trigger.setAttribute('aria-describedby', tooltipId);

    requestAnimationFrame(() => {
      bubble.classList.add('visible');
      
      // Ajustar posição para não extrapolar os limites da tela
      const rect = bubble.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      let arrowOffset = 0;
      
      // Verificar se extrapola à esquerda
      if (rect.left < 8) {
        const offset = 8 - rect.left;
        arrowOffset = -offset;
        bubble.style.left = `calc(50% + ${offset}px)`;
        bubble.style.transform = `translate(-50%, 0)`;
      }
      
      // Verificar se extrapola à direita
      if (rect.right > viewportWidth - 8) {
        const offset = rect.right - (viewportWidth - 8);
        arrowOffset = offset;
        bubble.style.left = `calc(50% - ${offset}px)`;
        bubble.style.transform = `translate(-50%, 0)`;
      }
      
      // Ajustar posição da seta (dente) do tooltip
      if (arrowOffset !== 0) {
        const arrow = document.createElement('style');
        arrow.textContent = `#${tooltipId}::after { 
          left: calc(50% + ${arrowOffset}px);
        }`;
        document.head.appendChild(arrow);
      }
      
      // Verificar se extrapola no topo
      if (rect.top < 8) {
        bubble.style.bottom = 'auto';
        bubble.style.top = 'calc(100% + 12px)';
        bubble.style.transform = 'translate(-50%, 0)';
        
        // Inverter a seta para baixo
        const arrowFlip = document.createElement('style');
        arrowFlip.textContent = `#${tooltipId}::after { 
          top: auto; 
          bottom: 100%; 
          border-color: transparent transparent rgba(33, 33, 33, 0.92) transparent;
          ${arrowOffset !== 0 ? `left: calc(50% + ${arrowOffset}px);` : ''}
        }`;
        document.head.appendChild(arrowFlip);
      }
    });

    activeTooltip = bubble;
    activeTrigger = trigger;
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'mouse') {
        showTooltip(trigger);
      }
    });

    trigger.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'mouse') {
        scheduleHide(0);
      }
    });

    trigger.addEventListener('focus', () => {
      showTooltip(trigger);
    });

    trigger.addEventListener('blur', () => {
      scheduleHide(0);
    });

    trigger.addEventListener('touchstart', () => {
      showTooltip(trigger);
      scheduleHide(2200);
    }, { passive: true });

    trigger.addEventListener('click', (event) => {
      if (coarsePointerQuery.matches) {
        showTooltip(trigger);
        scheduleHide(2200);
        event.stopPropagation();
      }
    });
  });

  document.addEventListener('click', () => {
    scheduleHide(0);
  });

  window.addEventListener('scroll', () => {
    scheduleHide(0);
  }, { passive: true });

  window.addEventListener('resize', () => {
    scheduleHide(0);
  });
}

// Inicializar aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  setupDayFilter();
  setupEventListeners();
  setupTooltips();
});
