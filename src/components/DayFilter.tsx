import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { DayOfWeek } from './FoodMap'

interface DayFilterProps {
  selectedDay: DayOfWeek | 'todos'
  onSelectDay: (day: DayOfWeek | 'todos') => void
}

const days: Array<{ value: DayOfWeek | 'todos'; label: string; short: string }> = [
  { value: 'todos', label: 'Todos os dias', short: 'Todos' },
  { value: 'dom', label: 'Domingo', short: 'Dom' },
  { value: 'seg', label: 'Segunda', short: 'Seg' },
  { value: 'ter', label: 'Terça', short: 'Ter' },
  { value: 'qua', label: 'Quarta', short: 'Qua' },
  { value: 'qui', label: 'Quinta', short: 'Qui' },
  { value: 'sex', label: 'Sexta', short: 'Sex' },
  { value: 'sab', label: 'Sábado', short: 'Sab' }
]

export function DayFilter({ selectedDay, onSelectDay }: DayFilterProps) {
  return (
    <Card className="fixed top-4 left-1/2 -translate-x-1/2 z-[9998] shadow-2xl backdrop-blur-sm bg-card/95 p-3 max-w-[95vw]">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-foreground text-center">
          Filtrar por dia da semana:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {days.map((day) => (
            <Button
              key={day.value}
              onClick={() => onSelectDay(day.value)}
              variant={selectedDay === day.value ? 'default' : 'outline'}
              size="sm"
              className="min-w-[60px] transition-all"
              aria-label={day.label}
              aria-pressed={selectedDay === day.value}
            >
              <span className="hidden sm:inline">{day.label}</span>
              <span className="sm:hidden">{day.short}</span>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}
