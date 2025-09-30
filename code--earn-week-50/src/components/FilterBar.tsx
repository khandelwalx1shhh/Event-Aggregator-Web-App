interface FilterBarProps {
  filters: {
    date: string
    eventType: string
    collegeName: string
    location: string
  }
  setFilters: (filters: any) => void
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <input
        type="date"
        value={filters.date}
        onChange={(e) => setFilters({...filters, date: e.target.value})}
        className="border rounded p-2"
      />
      <select
        value={filters.eventType}
        onChange={(e) => setFilters({...filters, eventType: e.target.value})}
        className="border rounded p-2"
      >
        <option value="">All Event Types</option>
        <option value="hackathon">Hackathon</option>
        <option value="tech-talk">Tech Talk</option>
        <option value="workshop">Workshop</option>
      </select>
      <input
        type="text"
        placeholder="College Name"
        value={filters.collegeName}
        onChange={(e) => setFilters({...filters, collegeName: e.target.value})}
        className="border rounded p-2"
      />
      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => setFilters({...filters, location: e.target.value})}
        className="border rounded p-2"
      />
    </div>
  )
}