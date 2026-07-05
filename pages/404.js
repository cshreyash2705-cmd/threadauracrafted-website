import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Custom404() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartCount(cart.length)
  }, [])

  return (
    <>
      <Head>
        <title>Page Not Found - Threadauracrafted</title>
      </Head>

      <Header cartCount={cartCount} />

      <main className="container mx-auto px-4 py-20 text-center">
        <div className="text-8xl mb-6">🧵</div>
        <h1 className="text-5xl font-bold text-primary mb-4">Oops! Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        
        <Link href="/" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block">
          Go Home
        </Link>
      </main>

      <Footer />
    </>
  )
}