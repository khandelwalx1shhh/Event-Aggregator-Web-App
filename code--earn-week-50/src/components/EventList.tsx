import { useState, useEffect } from 'react'
import { Event } from '@/types'

interface EventListProps {
  filters: {
    date: string
    eventType: string
    collegeName: string
    location: string
  }
}

export default function EventList({ filters }: EventListProps) {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    // Fetch events from API
    fetchEvents()
  }, [filters])

  const fetchEvents = async () => {
    try {
      const queryParams = new URLSearchParams()
      if (filters.date) queryParams.append('date', filters.date)
      if (filters.eventType) queryParams.append('eventType', filters.eventType)
      if (filters.collegeName) queryParams.append('collegeName', filters.collegeName)
      if (filters.location) queryParams.append('location', filters.location)

      const response = await fetch(`/api/events?${queryParams.toString()}`)
      const data = await response.json()
      setEvents(data)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Upcoming Events</h2>
      {events.map((event) => (
        <div key={event.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-medium text-blue-600">{event.name}</h3>
          <p className="text-gray-600 mt-2">{event.description}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-semibold">Date</p>
              <p>{new Date(event.date).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p>{event.location}</p>
            </div>
            <div>
              <p className="font-semibold">Type</p>
              <p className="capitalize">{event.eventType}</p>
            </div>
            <div>
              <p className="font-semibold">College</p>
              <p>{event.collegeName}</p>
            </div>
          </div>
          <div className="mt-4">
            <a 
              href={event.link} 
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Event
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
