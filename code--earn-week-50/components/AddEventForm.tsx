'use client'
    import { useState } from 'react'
    import DatePicker from 'react-datepicker'
    
    export default function AddEventForm() {
      const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: new Date(),
        location: '',
        eventType: 'hackathon',
        collegeName: '',
        link: ''
      })
    
      const handleSubmit = async (e) => {
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
            setFormData({
              name: '',
              description: '',
              date: new Date(),
              location: '',
              eventType: 'hackathon',
              collegeName: '',
              link: ''
            })
            alert('Event added successfully!')
          }
        } catch (error) {
          console.error('Error adding event:', error)
        }
      }
    
      return (
        <form onSubmit={handleSubmit} className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Add New Event</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Event Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Date</label>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({...formData, date})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Event Type</label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                className="w-full p-2 border rounded"
                required
              >
                <option value="hackathon">Hackathon</option>
                <option value="tech-talk">Tech Talk</option>
                <option value="workshop">Workshop</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">College Name</label>
              <input
                type="text"
                value={formData.collegeName}
                onChange={(e) => setFormData({...formData, collegeName: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Event Link</label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({...formData, link: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add Event
            </button>
          </div>
        </form>
      )
    }