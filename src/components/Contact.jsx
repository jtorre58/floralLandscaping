import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ============================================================
// 🔧 EMAILJS SETUP — Replace these 3 values with your own!
//
// 1. Create a free account at https://emailjs.com
// 2. Add an email service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an email template → copy the Template ID
//    Use these template variables: {{from_name}}, {{phone}}, {{from_email}}, {{service}}, {{message}}
// 4. Go to Account → Public Key → copy it
// ============================================================
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Ready to Transform Your Yard?</h2>
          <p className="section-subtitle">
            Contact us today for a free estimate. We'd love to hear about your project.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-card">
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div>
                  <h4>Our Location</h4>
                  <p>10201 Riverdale Rd Lot 216<br />Thornton, CO 80229</p>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+13035551234">Call for Free Estimate</a></p>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">🕐</span>
                <div>
                  <h4>Hours</h4>
                  <p>Mon – Sat: 7:00 AM – 6:00 PM<br />Sun: Closed</p>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">🌎</span>
                <div>
                  <h4>Service Area</h4>
                  <p>Denver, Thornton, Westminster,<br />Broomfield & surrounding areas</p>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="from_name">Full Name</label>
                <input type="text" id="from_name" name="from_name" placeholder="Your name" required />
              </div>
              <div className="contact__field">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="(303) 555-1234" required />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="from_email">Email Address</label>
              <input type="email" id="from_email" name="from_email" placeholder="you@example.com" />
            </div>
            <div className="contact__field">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>New Grass Installation</option>
                <option>Sprinkler System</option>
                <option>Rock Decoration</option>
                <option>Mulch & Ground Cover</option>
                <option>Paver Walkways & Patios</option>
                <option>Lawn Maintenance</option>
                <option>Other</option>
              </select>
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your project..."></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="contact__alert contact__alert--success">
                ✅ Message sent! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__alert contact__alert--error">
                ❌ Something went wrong. Please call us or try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
