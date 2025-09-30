import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function EventForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: new Date(),
    location: '',
    eventType: '',
    collegeName: '',
    link: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          description: '',
          date: new Date(),
          location: '',
          eventType: '',
          collegeName: '',
          link: ''
        })
        alert('Event submitted successfully!')
      }
    } catch (error) {
      console.error('Error submitting event:', error)
    }
  }

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Submit New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Event Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Date</label>
          <DatePicker
            selected={formData.date}
            onChange={(date) => setFormData({...formData, date: date || new Date()})}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Event Type</label>
          <select
            value={formData.eventType}
            onChange={(e) => setFormData({...formData, eventType: e.target.value})}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Type</option>
            <option value="hackathon">Hackathon</option>
            <option value="tech-talk">Tech Talk</option>
            <option value="workshop">Workshop</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">College Name</label>
          <input
            type="text"
            value={formData.collegeName}
            onChange={(e) => setFormData({...formData, collegeName: e.target.value})}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Event Link</label>
          <input
            type="url"
            value={formData.link}
            onChange={(e) => setFormData({...formData, link: e.target.value})}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Event
        </button>
      </form>
    </div>
  )
}