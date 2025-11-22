import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Shop from './components/Shop'
import About from './components/About'
import Offers from './components/Offers'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [cart, setCart] = useState([])
  const cartCount = useMemo(() => cart.reduce((acc) => acc + 1, 0), [cart])

  const handleAdd = (product) => {
    setCart((prev) => [...prev, product])
  }

  const handleCartClick = () => {
    if (cart.length === 0) {
      alert('Your ZAVARIO cart is empty. Add something timeless.')
      return
    }
    const list = cart.map((c) => `${c.name} — $${c.price}`).join('\n')
    alert(`Cart\n\n${list}\n\nTotal: $${cart.reduce((s, p) => s + p.price, 0)}`)
  }

  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar onCartClick={handleCartClick} cartCount={cartCount} />
      <main>
        <Hero />
        <Shop onAdd={handleAdd} />
        <About />
        <Offers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
