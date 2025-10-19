import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { FoodMap, type DayOfWeek } from '@/components/FoodMap'
import { ShareButton } from '@/components/ShareButton'
import { DayFilter } from '@/components/DayFilter'

function App() {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | 'todos'>('todos')

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <FoodMap selectedDay={selectedDay} />
      <DayFilter selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      <ShareButton />
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default App