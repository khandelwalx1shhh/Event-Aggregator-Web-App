'use client'
    import DatePicker from 'react-datepicker'
    import "react-datepicker/dist/react-datepicker.css"
    
    export default function EventFilter({ filters, setFilters }) {
      return (
        <div className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Filter Events</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Date</label>
              <DatePicker
                selected={filters.date}
                onChange={(date) => setFilters({...filters, date})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Event Type</label>
              <select
                value={filters.eventType}
                onChange={(e) => setFilters({...filters, eventType: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="">All</option>
                <option value="hackathon">Hackathon</option>
                <option value="tech-talk">Tech Talk</option>
                <option value="workshop">Workshop</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">College Name</label>
              <input
                type="text"
                value={filters.collegeName}
                onChange={(e) => setFilters({...filters, collegeName: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Location</label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
      )
    }