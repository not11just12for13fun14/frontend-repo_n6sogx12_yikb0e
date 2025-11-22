import { motion } from 'framer-motion'

const offers = [
  { title: 'New Season • Winter 24', desc: 'Explore our latest drop in premium outerwear', tag: 'New' },
  { title: 'Members Only', desc: 'Exclusive early access to limited capsules', tag: 'Exclusive' },
  { title: 'Holiday Offer', desc: 'Up to 25% off on selected hoodies and tees', tag: 'Sale' },
]

export default function Offers() {
  return (
    <section id="offers" className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">Offers & Collections</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6"
            >
              <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-emerald-400/90">{o.tag}</span>
              <h3 className="mt-2 text-xl font-bold">{o.title}</h3>
              <p className="mt-2 text-white/70">{o.desc}</p>
              <a href="#shop" className="mt-6 inline-block px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-emerald-500 hover:text-white transition-colors">Shop Now</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
