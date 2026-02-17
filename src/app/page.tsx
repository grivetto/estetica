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
      <footer className="py-24 bg-charcoal text-off-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif font-bold tracking-tighter text-off-white mb-6 underline decoration-champagne underline-offset-8 decoration-2">AURA BEAUTY</h2>
              <p className="text-off-white/40 text-sm font-light max-w-sm leading-relaxed mb-8">
                Eleviamo l'arte della bellezza attraverso trattamenti esclusivi e una cura senza pari. Il tuo rifugio di lusso nel cuore della città.
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-champagne">
                Eccellenza Artigiana dal 2026
              </p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-off-white/30">Esplora</h4>
              <ul className="space-y-4 text-xs uppercase tracking-widest font-light">
                <li><a href="/servizi" className="hover:text-champagne transition-colors">Servizi</a></li>
                <li><a href="/galleria" className="hover:text-champagne transition-colors">Galleria</a></li>
                <li><a href="/chi-siamo" className="hover:text-champagne transition-colors">Chi Siamo</a></li>
                <li><a href="/contatti" className="hover:text-champagne transition-colors">Contatti</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-off-white/30">Legale</h4>
              <ul className="space-y-4 text-xs uppercase tracking-widest font-light">
                <li><a href="#" className="hover:text-champagne transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-champagne transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-champagne transition-colors">Termini d'uso</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-off-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] uppercase tracking-widest text-off-white/20">
              © 2026 Aura Beauty. Tutti i diritti riservati.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-off-white/40 hover:text-champagne transition-colors"><span className="text-[10px] uppercase tracking-[0.2em]">Instagram</span></a>
              <a href="#" className="text-off-white/40 hover:text-champagne transition-colors"><span className="text-[10px] uppercase tracking-[0.2em]">Facebook</span></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
