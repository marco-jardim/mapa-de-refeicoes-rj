import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export type DayOfWeek = 'dom' | 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab'

export interface FoodLocation {
  name: string
  address: string
  hours: string
  days: string
  daysOfWeek: DayOfWeek[]
  lat: number
  lng: number
}

const foodLocations: FoodLocation[] = [
  {
    name: '🍛 Cozinha Solidária da Lapa (MTST)',
    address: '📌 Av. Mem de Sá, 25 – Lapa',
    hours: '🕐 Almoço, doações 11h–18h',
    days: '📅 Todos os dias (inclui fins de semana e feriados)',
    daysOfWeek: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
    lat: -22.9126,
    lng: -43.1798
  },
  {
    name: '🥣 Reviver Obras Sociais',
    address: '📌 Rua Riachuelo, 19 – Lapa',
    hours: '🕐 Noite (~20h)',
    days: '📅 Sábados e feriados conforme demanda',
    daysOfWeek: ['sab'],
    lat: -22.9138,
    lng: -43.1814
  },
  {
    name: '🍽 Refettorio Gastromotiva',
    address: '📌 Rua da Lapa, 108 – Lapa',
    hours: '🕐 Almoço 11h30–15h / jantar social',
    days: '📅 Segunda a sexta (não abre fds/feriado)',
    daysOfWeek: ['seg', 'ter', 'qua', 'qui', 'sex'],
    lat: -22.9159,
    lng: -43.1776
  },
  {
    name: '🥣 Projeto VOAR',
    address: '📌 Praça Nossa Senhora da Glória – Glória',
    hours: '🕐 Café da manhã por volta das 8h',
    days: '📅 Segunda, quarta e quinta-feiras',
    daysOfWeek: ['seg', 'qua', 'qui'],
    lat: -22.9214,
    lng: -43.1753
  },
  {
    name: '🍲 Tenda Franciscana (SEFRAS)',
    address: '📌 Largo da Carioca – Centro',
    hours: '🕐 Almoço aproximadamente 12h–13h',
    days: '📅 Dias úteis (segunda a sexta)',
    daysOfWeek: ['seg', 'ter', 'qua', 'qui', 'sex'],
    lat: -22.9090,
    lng: -43.1760
  },
  {
    name: '🙏 Fraternidade na Rua (Fraternidade sem Fronteiras)',
    address: '📌 Rua do Senado, 50 – Lapa',
    hours: '🕐 Almoço por volta das 11h',
    days: '📅 Segunda a sexta-feira',
    daysOfWeek: ['seg', 'ter', 'qua', 'qui', 'sex'],
    lat: -22.9110,
    lng: -43.1800
  }
]

interface FoodMapProps {
  selectedDay: DayOfWeek | 'todos'
}

export function FoodMap({ selectedDay }: FoodMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)
  const markersRef = useRef<L.Marker[]>([])

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return

    const map = L.map(mapContainer.current).setView([-22.917, -43.178], 14)
    mapInstance.current = map

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapInstance.current) return

    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    const filteredLocations = selectedDay === 'todos' 
      ? foodLocations 
      : foodLocations.filter(loc => loc.daysOfWeek.includes(selectedDay))

    filteredLocations.forEach(location => {
      const popupContent = `
        <b>${location.name}</b><br>
        ${location.address}<br>
        ${location.hours}<br>
        ${location.days}
      `
      
      const marker = L.marker([location.lat, location.lng])
        .addTo(mapInstance.current!)
        .bindPopup(popupContent)
      
      markersRef.current.push(marker)
    })
  }, [selectedDay])

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-screen"
      role="application"
      aria-label="Mapa interativo com locais de distribuição de comida"
    />
  )
}

export { foodLocations }
