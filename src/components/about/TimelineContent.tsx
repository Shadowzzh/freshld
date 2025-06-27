import { cn } from '@/lib/utils'

interface TimelineItem {
  label: string
}

interface TimelineContentProps {
  description: string
  items: TimelineItem[]
}

export function TimelineContent({ description, items }: TimelineContentProps) {
  return (
    <div>
      <p className={cn('mb-4 text-lg text-neutral-600 dark:text-neutral-400')}>
        {description}
      </p>

      {items.length > 0 && (
        <div
          className={cn(
            'grid gap-4',
            items.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2',
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                'p-4 rounded-xl transition-all duration-300 hover:scale-105',
                'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/15',
              )}
            >
              <div className='flex items-center gap-3'>
                <div className={cn('w-2 h-2 bg-primary/60 rounded-full')} />
                <span className={cn('text-primary/80 font-medium')}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
