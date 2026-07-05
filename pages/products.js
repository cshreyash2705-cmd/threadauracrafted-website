import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  const [cartCount, setCartCount] = useState(0)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(products.map(p => p.category))]
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

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
        <h1 className="text-4xl font-bold text-primary mb-8">Our Products</h1>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-primary hover:bg-gray-300'
              }`}
            >
              {category}
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
      </main>

      <Footer />
    </>
  )
}