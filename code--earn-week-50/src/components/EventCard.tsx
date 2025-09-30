import { format } from 'date-fns'
import { Event } from '@/types'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold">{event.name}</h3>
      <p className="text-gray-600 mt-2">{event.description}</p>
      <div className="mt-4 space-y-2">
        <p>
          <span className="font-medium">Date:</span>{' '}
          {format(event.date, 'PPP')}
        </p>
        <p>
          <span className="font-medium">Type:</span>{' '}
          {event.type.replace('_', ' ').toUpperCase()}
        </p>
        <p>
          <span className="font-medium">College:</span>{' '}
          {event.collegeName}
        </p>
        <p>
          <span className="font-medium">Location:</span>{' '}
          {event.location}
        </p>
      </div>
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-500 hover:underline"
      >
        Event Link →
      </a>
    </div>
  )
}