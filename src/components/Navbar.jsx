import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Offers', href: '#offers' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onCartClick, cartCount = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-700"></div>
          <span className="text-white text-xl font-extrabold tracking-widest">ZAVARIO</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onCartClick} className="relative inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-black hover:bg-emerald-500 hover:text-white transition-colors">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] font-bold bg-emerald-600 text-white rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/90 py-2">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
