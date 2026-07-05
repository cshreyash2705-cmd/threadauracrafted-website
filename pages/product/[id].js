import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { products } from '../../data/products'

export default function ProductDetail({ product }) {
  const [cartCount, setCartCount] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartCount(cart.length)
  }, [])

  if (!product) {
    return (
      <>
        <Header cartCount={cartCount} />
        <main className="container mx-auto px-4 py-12">
          <p className="text-center text-gray-600">Product not found</p>
        </main>
        <Footer />
      </>
    )
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    for (let i = 0; i < quantity; i++) {
      cart.push({ ...product, cartId: Date.now() + i })
    }
    setCartCount(cart.length)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${quantity} x ${product.name} added to cart!`)
    setQuantity(1)
  }

  return (
    <>
      <Head>
        <title>{product.name} - Threadauracrafted</title>
        <meta name="description" content={product.description} />
      </Head>

      <Header cartCount={cartCount} />

      <main className="container mx-auto px-4 py-12">
        <Link href="/products" className="text-primary hover:text-secondary mb-6 inline-block">
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center text-8xl">
            📦
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>
            
            <div className="mb-6">
              <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </span>
            </div>

            <p className="text-2xl font-bold text-secondary mb-6">₹{product.price}</p>

            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-primary mb-2">Details</h3>
              <p className="text-gray-700">{product.details}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <label className="font-semibold text-primary">Quantity:</label>
              <div className="flex border border-primary rounded">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-primary hover:bg-gray-100"
                >
                  −
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center border-0 outline-none"
                  min="1"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-primary hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition mb-4"
            >
              Add to Cart
            </button>

            <Link href="/cart" className="w-full block text-center bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition">
              View Cart
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const product = products.find(p => p.id === parseInt(params.id))
  return {
    props: { product: product || null },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const paths = products.map(p => ({
    params: { id: p.id.toString() },
  }))
  return { paths, fallback: 'blocking' }
}