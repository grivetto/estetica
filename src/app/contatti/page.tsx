"use client"

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-off-white">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 bg-white border-b border-charcoal/5">
                <div className="container mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] uppercase tracking-[0.4em] text-charcoal/60 mb-4 block"
                    >
                        Mettiamoci in Contatto
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif text-charcoal mb-6"
                    >
                        Contatti e <span className="italic">Appuntamenti</span>
                    </motion.h1>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-8">
                                <h2 className="text-3xl font-serif text-charcoal">Informazioni</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-champagne shrink-0" size={24} />
                                        <div>
                                            <h4 className="text-sm uppercase tracking-widest font-bold text-charcoal/80 mb-1">Indirizzo</h4>
                                            <p className="text-charcoal/60 font-light">Via del Corso, 12, 00186 Roma RM, Italia</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="text-champagne shrink-0" size={24} />
                                        <div>
                                            <h4 className="text-sm uppercase tracking-widest font-bold text-charcoal/80 mb-1">Telefono</h4>
                                            <p className="text-charcoal/60 font-light">+39 06 123 4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="text-champagne shrink-0" size={24} />
                                        <div>
                                            <h4 className="text-sm uppercase tracking-widest font-bold text-charcoal/80 mb-1">Email</h4>
                                            <p className="text-charcoal/60 font-light">info@aurabeauty.it</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h2 className="text-3xl font-serif text-charcoal">Orari di Apertura</h2>
                                <div className="grid grid-cols-2 gap-4 text-sm font-light text-charcoal/60">
                                    <div>Lun - Ven:</div>
                                    <div className="text-charcoal font-medium">09:00 - 20:00</div>
                                    <div>Sabato:</div>
                                    <div className="text-charcoal font-medium">10:00 - 18:00</div>
                                    <div>Domenica:</div>
                                    <div className="text-charcoal font-medium text-champagne">Chiuso</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-12 rounded-3xl"
                        >
                            <form className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-charcoal/40">Nome Completo</label>
                                    <input
                                        type="text"
                                        placeholder="Il tuo nome"
                                        className="w-full bg-transparent border-b border-charcoal/10 py-2 focus:border-champagne outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-charcoal/40">Email</label>
                                    <input
                                        type="email"
                                        placeholder="la-tua@email.it"
                                        className="w-full bg-transparent border-b border-charcoal/10 py-2 focus:border-champagne outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-charcoal/40">Messaggio</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Come possiamo aiutarti?"
                                        className="w-full bg-transparent border-b border-charcoal/10 py-2 focus:border-champagne outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full py-4 bg-charcoal text-off-white text-xs uppercase tracking-widest rounded-full hover:bg-opacity-90 transition-all">
                                    Invia Messaggio
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer (Simplified) */}
            <footer className="py-12 bg-off-white text-charcoal/40 text-center border-t border-charcoal/5">
                <p className="text-[10px] uppercase tracking-widest">© 2026 Aura Beauty. Tutti i diritti riservati.</p>
            </footer>
        </main>
    );
}
