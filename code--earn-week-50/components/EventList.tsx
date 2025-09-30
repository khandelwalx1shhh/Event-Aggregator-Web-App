'use client'
    import { useEffect, useState } from 'react'
    import { format } from 'date-fns'
    
    interface Event {
      id: string
      name: string
      description: string
      date: string
      location: string
      eventType: string
      collegeName: string
      link: string
    }
    
    export default function EventList({ filters }) {
      const [events, setEvents] = useState<Event[]>([])
    
      useEffect(() => {
        fetchEvents()
      }, [filters])
    
      const fetchEvents = async () => {
        try {
          const response = await fetch('/api/events?' + new URLSearchParams(filters))
          const data = await response.json()
          setEvents(data)
        } catch (error) {
          console.error('Error fetching events:', error)
        }
      }
    
      return (
        <div className="grid gap-4">
          {events.map((event) => (
            <div key={event.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold">{event.name}</h2>
              <p className="text-gray-600">{event.description}</p>
              <div className="mt-2">
                <p>Date: {format(new Date(event.date), 'PPP')}</p>
                <p>Location: {event.location}</p>
                <p>Type: {event.eventType}</p>
                <p>College: {event.collegeName}</p>
                <a href={event.link} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-500 hover:underline">
                  Event Link
                </a>
              </div>
            </div>
          ))}
        </div>
      )
    }