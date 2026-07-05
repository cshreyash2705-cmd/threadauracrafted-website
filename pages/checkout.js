import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Checkout() {
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(savedCart)
    setCartCount(savedCart.length)
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
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.zipcode) {
      alert('Please fill in all fields')
      return
    }

    // Show success message
    setSubmitted(true)

    // Log order details (in production, send to backend)
    console.log('Order submitted:', {
      ...formData,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0) + 99
    })

    // Clear cart
    setCart([])
    setCartCount(0)
    localStorage.setItem('cart', JSON.stringify([]))

    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = '/'
    }, 3000)
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0 && !submitted) {
    return (
      <>
        <Head>
          <title>Checkout - Threadauracrafted</title>
        </Head>
        <Header cartCount={cartCount} />
        <main className="container mx-auto px-4 py-12">
          <p className="text-center text-gray-600 text-lg mb-6">Your cart is empty</p>
          <div className="text-center">
            <Link href="/products" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (submitted) {
    return (
      <>
        <Head>
          <title>Order Confirmed - Threadauracrafted</title>
        </Head>
        <Header cartCount={0} />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center bg-white rounded-lg shadow-md p-8">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold text-primary mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">Thank you for your order. We'll contact you soon to confirm the payment via PhonePe.</p>
            <p className="text-sm text-gray-500">Redirecting to home page...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Checkout - Threadauracrafted</title>
      </Head>

      <Header cartCount={cartCount} />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Delivery Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-primary font-semibold mb-2">Full Name *</label>
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
                  <label className="block text-primary font-semibold mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-primary font-semibold mb-2">Address *</label>
                  <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-primary font-semibold mb-2">City *</label>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-semibold mb-2">State *</label>
                    <input 
                      type="text" 
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-primary font-semibold mb-2">Zip Code *</label>
                  <input 
                    type="text" 
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition mt-6"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 sticky top-20">
              <h2 className="text-2xl font-bold text-primary mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item, index) => (
                  <div key={item.cartId} className="flex justify-between pb-4 border-b">
                    <div>
                      <p className="font-semibold text-primary">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                    <p className="font-semibold text-secondary">₹{item.price}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">₹99</span>
                </div>
                <div className="flex justify-between text-lg pt-3 border-t">
                  <span className="font-bold text-primary">Total</span>
                  <span className="font-bold text-secondary">₹{total + 99}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800"><strong>💳 Payment:</strong> You'll receive a PhonePe payment link after confirming your order.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}