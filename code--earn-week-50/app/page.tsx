'use client'
    import { useState } from 'react'
    import EventList from '@/components/EventList'
    import EventFilter from '@/components/EventFilter'
    import AddEventForm from '@/components/AddEventForm'
    
    export default function Home() {
      const [filters, setFilters] = useState({
        date: null,
        eventType: '',
        collegeName: '',
        location: ''
      })
    
      return (
        <main className="min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-8">College Event Aggregator</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <EventFilter filters={filters} setFilters={setFilters} />
              <EventList filters={filters} />
            </div>
            <div>
              <AddEventForm />
            </div>
          </div>
        </main>
      )
    }