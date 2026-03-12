"use client"

import { useState } from 'react'

export default function LeadForm() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus('success')
      setMessage(data.message || 'Inquiry sent.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setMessage(err.message || 'Could not send inquiry.')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>Name</span><input type="text" name="name" placeholder="Jane Smith" required /></label>
      <label><span>Email</span><input type="email" name="email" placeholder="jane@team.com" required /></label>
      <label><span>Company / Team</span><input type="text" name="company" placeholder="Smith Group Realty" required /></label>
      <label>
        <span>Monthly lead volume</span>
        <select name="leadVolume" required>
          <option value="">Select one</option>
          <option>1-25 leads / month</option>
          <option>26-100 leads / month</option>
          <option>101-300 leads / month</option>
          <option>300+ leads / month</option>
        </select>
      </label>
      <label><span>Biggest problem</span><textarea name="problem" rows="5" placeholder="Example: Zillow and Facebook leads sit too long, stale contacts never get reactivated, and our CRM stages are a mess." required></textarea></label>
      <button className="primary-btn form-btn" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Apply for pilot'}
      </button>
      <p className="form-note">This now submits through the app directly instead of relying on mailto.</p>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  )
}
