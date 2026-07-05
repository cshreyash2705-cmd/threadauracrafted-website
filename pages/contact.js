import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [cartCount, setCartCount] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartCount(cart.length)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    // Log form data (in production, send to backend)
    console.log('Contact form submitted:', formData)

    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Head>
        <title>Contact Us - Threadauracrafted</title>
        <meta name="description" content="Get in touch with Threadauracrafted" />
      </Head>

      <Header cartCount={cartCount} />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-accent">We'd love to hear from you</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">📧 Email</h3>
                    <p className="text-gray-700">info@threadauracrafted.com</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">📱 Phone</h3>
                    <p className="text-gray-700">+91-XXXXXXXXXX</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">📍 Location</h3>
                    <p className="text-gray-700">India</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">🕐 Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday - Sunday: 12:00 PM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-semibold">✅ Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-primary font-semibold mb-2">Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-primary font-semibold mb-2">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-primary font-semibold mb-2">Message *</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}