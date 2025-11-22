import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Signature Hoodie',
    category: 'Hoodies',
    price: 129,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Core Tee',
    category: 'T-shirts',
    price: 69,
    image: 'https://images.unsplash.com/photo-1618355776464-8666794d252d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Winter Puffer',
    category: 'Winter Wear',
    price: 249,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Elite Zip Hoodie',
    category: 'Hoodies',
    price: 159,
    image: 'https://images.unsplash.com/photo-1715606489641-d41a26a343f2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGl0ZSUyMFppcCUyMEhvb2RpZXxlbnwwfDB8fHwxNzYzNzk2NTU0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Shop({ onAdd }) {
  return (
    <section id="shop" className="relative py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Shop</h2>
            <p className="text-white/60 mt-2">Hoodies · T-shirts · Winter wear</p>
          </div>
          <a href="#offers" className="hidden sm:inline-flex px-5 py-2 rounded-full border border-white/20 hover:border-white/50">View Offers</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-emerald-400/80">{p.category}</p>
                    <h3 className="font-semibold text-lg">{p.name}</h3>
                  </div>
                  <p className="font-bold">${p.price}</p>
                </div>
                <button onClick={() => onAdd(p)} className="mt-4 w-full px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-emerald-500 hover:text-white transition-colors">Add to cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
