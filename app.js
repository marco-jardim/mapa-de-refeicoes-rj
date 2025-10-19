const foodLocations = [
  {
    name: '🍛 Cozinha Solidária da Lapa (MTST)',
    address: '📌 Av. Mem de Sá, 25 – Lapa',
    hours: '🕐 Almoço, doações 11h–18h',
    days: '📅 Todos os dias (inclui fins de semana e feriados)',
    lat: -22.9126,
    lng: -43.1798
  },
  {
    name: '🥣 Reviver Obras Sociais',
    address: '📌 Rua Riachuelo, 19 – Lapa',
    hours: '🕐 Noite (~20h)',
    days: '📅 Sábados e feriados conforme demanda',
    lat: -22.9138,
    lng: -43.1814
  },
  {
    name: '🍽 Refettorio Gastromotiva',
    address: '📌 Rua da Lapa, 108 – Lapa',
    hours: '🕐 Almoço 11h30–15h / jantar social',
    days: '📅 Segunda a sexta (não abre fds/feriado)',
    lat: -22.9159,
    lng: -43.1776
  },
  {
    name: '🥣 Projeto VOAR',
    address: '📌 Praça Nossa Senhora da Glória – Glória',
    hours: '🕐 Café da manhã por volta das 8h',
    days: '📅 Segunda, quarta e quinta-feiras',
    lat: -22.9214,
    lng: -43.1753
  },
  {
    name: '🍲 Tenda Franciscana (SEFRAS)',
    address: '📌 Largo da Carioca – Centro',
    hours: '🕐 Almoço aproximadamente 12h–13h',
    days: '📅 Dias úteis (segunda a sexta)',
    lat: -22.9090,
    lng: -43.1760
  },
  {
    name: '🙏 Fraternidade na Rua (Fraternidade sem Fronteiras)',
    address: '📌 Rua do Senado, 50 – Lapa',
    hours: '🕐 Almoço por volta das 11h',
    days: '📅 Segunda a sexta-feira',
    lat: -22.9110,
    lng: -43.1800
  }
];

let map;
let showPanel = false;

function initMap() {
  map = L.map('map').setView([-22.917, -43.178], 14);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  foodLocations.forEach(location => {
    const popupContent = `
      <b>${location.name}</b><br>
      ${location.address}<br>
      ${location.hours}<br>
      ${location.days}
    `;
    
    L.marker([location.lat, location.lng])
      .addTo(map)
      .bindPopup(popupContent);
  });
}

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

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('success', 'Link copiado!', 'Cole no Instagram ou TikTok para compartilhar');
  } catch (err) {
    showToast('error', 'Erro ao copiar link', 'Tente novamente');
  }
}

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

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  setupEventListeners();
});
