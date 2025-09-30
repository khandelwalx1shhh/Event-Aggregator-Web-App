'use client'
import { useState } from 'react'
import EventList from '@/components/EventList'
import EventForm from '@/components/EventForm'
import FilterBar from '@/components/FilterBar'

export default function Home() {
  const [filters, setFilters] = useState({
    date: '',
    eventType: '',
    collegeName: '',
    location: ''
  })

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">College Event Aggregator</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EventList filters={filters} />
        <EventForm />
      </div>
    </main>
  )
}