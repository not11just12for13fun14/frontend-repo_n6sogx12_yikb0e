import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Get in touch</h2>
            <p className="mt-4 text-white/70">We’re here to help with sizing, orders, and styling. Reach us anytime.</p>
            <div className="mt-8 space-y-4">
              <a href="tel:9858542951" className="flex items-center gap-3 text-white/90 hover:text-white">
                <Phone size={18} /> 98585 42951
              </a>
              <a href="mailto:sayamkohli228@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white">
                <Mail size={18} /> sayamkohli228@gmail.com
              </a>
            </div>
          </div>
          <div className="rounded-3xl ring-1 ring-white/10 p-8 bg-white/5">
            <h3 className="text-xl font-semibold">Follow ZAVARIO</h3>
            <div className="mt-4 flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
