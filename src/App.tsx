import { Toaster } from '@/components/ui/sonner'
import { FoodMap } from '@/components/FoodMap'
import { ShareButton } from '@/components/ShareButton'

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <FoodMap />
      <ShareButton />
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default App