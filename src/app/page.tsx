"use client"

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceMenu from "@/components/ServiceMenu";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceMenu />
      <Testimonials />
      <InstagramFeed />

      {/* Footer */}
      <footer className="py-12 bg-charcoal text-off-white/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-serif font-bold tracking-tighter text-off-white mb-2 underline decoration-champagne underline-offset-8">AURA BEAUTY</h2>
            <p className="text-[10px] uppercase tracking-widest font-light">
              Eccellenza Artigiana dal 2026
            </p>
          </div>

          <div className="flex space-x-8 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-champagne">Informativa sulla Privacy</a>
            <a href="#" className="hover:text-champagne">Termini di Servizio</a>
            <a href="#" className="hover:text-champagne">Contatti</a>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-center md:text-right">
            © 2026 Aura Beauty. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </main>
  );
}
