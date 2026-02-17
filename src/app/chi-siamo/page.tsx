"use client"

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-off-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-white border-b border-charcoal/5">
                <div className="container mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] uppercase tracking-[0.4em] text-charcoal/60 mb-4 block"
                    >
                        La Nostra Storia
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif text-charcoal mb-6"
                    >
                        L'Essenza di <span className="italic">Aura Beauty</span>
                    </motion.h1>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200"
                                alt="Our Salon"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight">
                                Nati dalla passione per <br /> <span className="italic text-champagne">l'eccellenza artigiana.</span>
                            </h2>
                            <div className="space-y-6 text-charcoal/70 font-light leading-relaxed">
                                <p>
                                    Fondata nel 2026, Aura Beauty nasce con una missione chiara: elevare l'esperienza della bellezza a una vera e propria forma d'arte. Non siamo solo un salone, ma un rifugio dedicato al benessere totale.
                                </p>
                                <p>
                                    Ogni trattamento è studiato per rispettare l'unicità di ogni persona. Crediamo che la bellezza esteriore sia il riflesso di un equilibrio interiore, ed è per questo che utilizziamo solo prodotti di altissima qualità e tecnologie all'avanguardia.
                                </p>
                                <p>
                                    Il nostro team di professionisti è in costante aggiornamento per offrirti il meglio delle tecniche internazionali, mantenendo sempre quel tocco umano e caloroso che ci contraddistingue.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div>
                                    <h4 className="text-2xl font-serif text-charcoal">10+</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-charcoal/40">Anni di Esperienza</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-serif text-charcoal">5000+</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-charcoal/40">Clienti Soddisfatti</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-charcoal text-off-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif mb-4">I Nostri Valori</h2>
                        <div className="w-20 h-px bg-champagne mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div className="space-y-4">
                            <h3 className="text-xl font-serif italic text-champagne">Integrità</h3>
                            <p className="text-sm font-light text-off-white/60 leading-relaxed">
                                Onestà e trasparenza in ogni consiglio e trattamento.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-serif italic text-champagne">Innovazione</h3>
                            <p className="text-sm font-light text-off-white/60 leading-relaxed">
                                Sempre alla ricerca delle ultime scoperte nel mondo della bellezza.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-serif italic text-champagne">Attenzione</h3>
                            <p className="text-sm font-light text-off-white/60 leading-relaxed">
                                Mettere al centro la persona e le sue esigenze specifiche.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer (Simplified) */}
            <footer className="py-12 bg-off-white text-charcoal/40 text-center">
                <p className="text-[10px] uppercase tracking-widest">© 2026 Aura Beauty. Tutti i diritti riservati.</p>
            </footer>
        </main>
    );
}
