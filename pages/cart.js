import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Cart() {
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(savedCart)
    setCartCount(savedCart.length)
  }, [])

  const handleRemove = (cartId) => {
    const updatedCart = cart.filter(item => item.cartId !== cartId)
    setCart(updatedCart)
    setCartCount(updatedCart.length)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const handleClearCart = () => {
    setCart([])
    setCartCount(0)
    localStorage.setItem('cart', JSON.stringify([]))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <Head>
        <title>Shopping Cart - Threadauracrafted</title>
      </Head>

      <Header cartCount={cartCount} />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
            <Link href="/products" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {cart.map((item, index) => (
                  <div key={item.cartId} className={`p-6 flex justify-between items-center ${index > 0 ? 'border-t' : ''}`}>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-secondary text-lg">₹{item.price}</p>
                      <button 
                        onClick={() => handleRemove(item.cartId)}
                        className="text-red-500 hover:text-red-700 text-sm mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleClearCart}
                className="mt-6 text-red-500 hover:text-red-700 font-semibold"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h2 className="text-2xl font-bold text-primary mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">₹99</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-lg">
                    <span className="font-bold text-primary">Total</span>
                    <span className="font-bold text-secondary">₹{total + 99}</span>
                  </div>
                </div>

                <Link href="/checkout" className="w-full block text-center bg-secondary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition mb-4">
                  Proceed to Checkout
                </Link>

                <Link href="/products" className="w-full block text-center border-2 border-primary text-primary py-3 rounded-lg font-bold hover:bg-gray-50 transition">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}