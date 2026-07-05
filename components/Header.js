import Link from 'next/link'
import { useState } from 'react'

export default function Header({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-accent hover:text-secondary transition">
          🧵 Threadauracrafted
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-secondary transition">Home</Link>
          <Link href="/products" className="hover:text-secondary transition">Products</Link>
          <Link href="/about" className="hover:text-secondary transition">About</Link>
          <Link href="/contact" className="hover:text-secondary transition">Contact</Link>
        </div>

        {/* Cart Icon */}
        <Link href="/cart" className="relative">
          <span className="text-2xl hover:text-secondary transition">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary bg-opacity-95 flex flex-col gap-4 px-4 py-4 border-t border-secondary">
          <Link href="/" className="hover:text-secondary transition">Home</Link>
          <Link href="/products" className="hover:text-secondary transition">Products</Link>
          <Link href="/about" className="hover:text-secondary transition">About</Link>
          <Link href="/contact" className="hover:text-secondary transition">Contact</Link>
        </div>
      )}
    </header>
  )
}