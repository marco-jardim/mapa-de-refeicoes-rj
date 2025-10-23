// Dados dos locais de distribuição de comida
const foodLocations = [
  {
    "name": "🍛 Cozinha Solidária da Lapa (MTST)",
    "address": "📌 Av. Mem de Sá, 25 – Lapa",
    "hours": "🕐 Almoço, doações 11h–18h",
    "days": "📅 Todos os dias (inclui fins de semana e feriados)",
    "daysOfWeek": [
      "dom",
      "seg",
      "ter",
      "qua",
      "qui",
      "sex",
      "sab"
    ],
    "lat": -22.9136512,
    "lng": -43.1795218
  },
  {
    "name": "🥣 Reviver Obras Sociais",
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

// Inicializar aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  setupDayFilter();
  setupEventListeners();
});
