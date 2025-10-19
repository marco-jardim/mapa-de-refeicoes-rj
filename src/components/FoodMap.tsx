import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

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
]

export function FoodMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return

    const map = L.map(mapContainer.current).setView([-22.917, -43.178], 14)
    mapInstance.current = map

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    foodLocations.forEach(location => {
      const popupContent = `
        <b>${location.name}</b><br>
        ${location.address}<br>
        ${location.hours}<br>
        ${location.days}
      `
      
      L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(popupContent)
    })

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [])

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-screen"
      role="application"
      aria-label="Mapa interativo com locais de distribuição de comida"
    />
  )
}
