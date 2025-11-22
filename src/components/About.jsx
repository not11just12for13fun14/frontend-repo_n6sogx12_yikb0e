import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About ZAVARIO</h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            ZAVARIO is a modern luxury label rooted in minimalism and performance. We design elevated essentials with architectural silhouettes, premium fabrics, and a relentless focus on detail. Our philosophy is simple: luxury without excess, presence without noise.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Inspired by icons, made for the future. Every piece carries the spirit of motion, confidence, and purpose.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1618587194716-40490bdba417?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWlsb3Jpbmd8ZW58MHwwfHx8MTc2Mzc5NjU1NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tailoring" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
