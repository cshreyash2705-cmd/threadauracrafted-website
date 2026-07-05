import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartCount(cart.length)
  }, [])

  return (
    <>
      <Head>
        <title>About Us - Threadauracrafted</title>
        <meta name="description" content="Learn about Threadauracrafted and our handmade goods" />
      </Head>

      <Header cartCount={cartCount} />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Threadauracrafted</h1>
            <p className="text-xl text-accent">Handmade with passion, crafted with care</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-6xl text-center">🧵</div>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Threadauracrafted was born from a passion for handmade goods and sustainable living. 
                  We believe that every product tells a story and carries the heart of its maker.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Each item in our collection is carefully crafted using traditional techniques and 
                  eco-friendly materials. We take pride in creating products that are not just beautiful, 
                  but also meaningful.
                </p>
                <p className="text-gray-700 text-lg">
                  Our mission is to bring handmade artistry into your home and support sustainable 
                  and ethical craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-primary mb-3">Craftsmanship</h3>
                <p className="text-gray-600">We believe in quality over quantity. Every piece is made with attention to detail and passion.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">♻️</div>
                <h3 className="text-2xl font-bold text-primary mb-3">Sustainability</h3>
                <p className="text-gray-600">We use eco-friendly materials and sustainable production practices to protect our planet.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold text-primary mb-3">Community</h3>
                <p className="text-gray-600">We support fair trade practices and believe in giving back to our community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Explore Our Collection</h2>
            <p className="text-lg text-accent mb-8">Discover handmade products crafted with love</p>
            <a href="/products" className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition inline-block">
              Shop Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}