import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden bg-black">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-emerald-950/40"/>
      {/* glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-emerald-700/20 blur-3xl rounded-full"/>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-white/10 blur-3xl rounded-full"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <span className="inline-block text-emerald-400/90 text-xs tracking-[0.3em] uppercase mb-4">Redefining Luxury Fashion</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            ZAVARIO
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            A premium fashion house blending minimalist design with bold confidence. Crafted for the modern icon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-emerald-500 hover:text-white transition-colors">Shop Now</a>
            <a href="#about" className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/60 transition-colors">Explore Brand</a>
          </div>
        </motion.div>

        {/* model image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] w-full rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop"
              alt="ZAVARIO Model in premium hoodie"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
