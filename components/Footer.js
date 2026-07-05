export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-3">Threadauracrafted</h3>
            <p className="text-accent">Handmade goods crafted with love and care. Quality meets creativity in every product.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-3">Quick Links</h3>
            <ul className="space-y-2 text-accent">
              <li><a href="/products" className="hover:text-secondary transition">Products</a></li>
              <li><a href="/about" className="hover:text-secondary transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-secondary transition">Contact</a></li>
              <li><a href="/" className="hover:text-secondary transition">Home</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-3">Contact Us</h3>
            <p className="text-accent mb-2">📧 Email: info@threadauracrafted.com</p>
            <p className="text-accent mb-2">📱 Phone: +91-XXXXXXXXXX</p>
            <p className="text-accent">📍 India</p>
          </div>
        </div>

        <div className="border-t border-secondary mt-8 pt-6 text-center text-accent">
          <p>&copy; 2024 Threadauracrafted. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}