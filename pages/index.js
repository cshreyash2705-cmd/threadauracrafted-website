import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartCount(cart.length)
  }, [])

  return (
    <>
      <Head>
        <title>Threadauracrafted - Handmade Goods</title>
        <meta name="description" content="Shop beautiful handmade goods from Threadauracrafted" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header cartCount={cartCount} />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Threadauracrafted</h1>
            <p className="text-xl mb-8 text-accent">Discover beautifully handmade goods crafted with love and care</p>
            <Link href="/products" className="bg-accent text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition inline-block">
              Shop Now
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-primary mb-2">Handcrafted</h3>
                <p className="text-gray-600">Every item is meticulously handmade with attention to detail.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">♻️</div>
                <h3 className="text-xl font-bold text-primary mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">We use sustainable materials and ethical production practices.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-primary mb-2">Quality Assured</h3>
                <p className="text-gray-600">Premium quality products that stand the test of time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Shop?</h2>
            <p className="text-lg text-accent mb-8">Browse our collection of unique handmade products</p>
            <Link href="/products" className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition inline-block">
              Explore Products
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}