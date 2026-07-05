import Link from 'next/link'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
      <div className="bg-gray-200 h-48 flex items-center justify-center text-6xl">
        📦
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-secondary">₹{product.price}</span>
          <span className="text-xs bg-accent text-primary px-2 py-1 rounded">{product.category}</span>
        </div>

        <div className="flex gap-2">
          <Link href={`/product/${product.id}`} className="flex-1 bg-primary text-white py-2 rounded hover:bg-opacity-90 transition text-center">
            View
          </Link>
          <button 
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-secondary text-white py-2 rounded hover:bg-opacity-90 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}