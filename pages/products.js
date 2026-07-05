import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products, collections } from '../data/products'

export default function Products() {
  const [cartCount, setCartCount] = useState(0)
  const [cart, setCart] = useState([])
  const [selectedCollection, setSelectedCollection] = useState('All')

  const filteredProducts = selectedCollection === 'All' 
    ? products 
    : products.filter(p => p.collection === selectedCollection)

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(savedCart)
    setCartCount(savedCart.length)
  }, [])

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, { ...product, cartId: Date.now() }]
    setCart(updatedCart)
    setCartCount(updatedCart.length)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    alert(`${product.name} added to cart!`)
  }

  return (
    <>
      <Head>
        <title>Products - Threadauracrafted</title>
        <meta name="description" content="Shop all handmade products from Threadauracrafted" />
      </Head>

      <Header cartCount={cartCount} />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Our Collections</h1>
        <p className="text-gray-600 mb-8">Handmade with love, crafted with care</p>

        {/* Collection Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCollection('All')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedCollection === 'All'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-primary hover:bg-gray-300'
            }`}
          >
            All Collections
          </button>
          {collections.map(collection => (
            <button
              key={collection.name}
              onClick={() => setSelectedCollection(collection.name)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCollection === collection.name
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-primary hover:bg-gray-300'
              }`}
            >
              {collection.emoji} {collection.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products in this collection yet.</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
