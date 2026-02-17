"use client"

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Paintbrush, Heart, Wind, Star } from "lucide-react";

const serviceCategories = [
    {
        title: "Hair Design & Styling",
        icon: <Scissors className="text-champagne" size={40} />,
        services: [
            { name: "Taglio Sartoriale", price: "da €45", desc: "Consultazione d'immagine e taglio personalizzato." },
            { name: "Colore Couture", price: "da €70", desc: "Tecniche avanzate di colorazione e riflessi." },
            { name: "Piega Aura", price: "da €30", desc: "Styling impeccabile per ogni occasione." },
            { name: "Trattamenti Keratina", price: "da €120", desc: "Lisciatura e rigenerazione profonda." }
        ]
    },
    {
        title: "Skin & Facial Care",
        icon: <Sparkles className="text-champagne" size={40} />,
        services: [
            { name: "Pulizia Viso Profonda", price: "€60", desc: "Rinnovamento cellulare ed estrazione impurità." },
            { name: "Trattamento Anti-Age", price: "€95", desc: "Tecnologia lifting e sieri rimpolpanti." },
            { name: "Hydra-Glow", price: "€80", desc: "Idratazione estrema e luminosità istantanea." },
            { name: "Massaggio Viso Kobido", price: "€70", desc: "Lifting manuale di tradizione giapponese." }
        ]
    },
    {
        title: "Hand & Foot Rituals",
        icon: <Paintbrush className="text-champagne" size={40} />,
        services: [
            { name: "Manicure Russa", price: "€40", desc: "Cura meticolosa delle cuticole e applicazione colore." },
            { name: "Pedicure Curativo", price: "€55", desc: "Trattamento profondo per il benessere dei piedi." },
            { name: "Smalto Semipermanente", price: "€35", desc: "Brillantezza e durata fino a 3 settimane." },
            { name: "Nail Art Artistica", price: "da €15", desc: "Decorazioni fatte a mano libera." }
        ]
    },
    {
        title: "Benessere & Massaggi",
        icon: <Wind className="text-champagne" size={40} />,
        services: [
            { name: "Massaggio Relax", price: "€65", desc: "Manovre avvolgenti per sciogliere le tensioni." },
            { name: "Drenaggio Linfatico", price: "€75", desc: "Stimolazione della circolazione e detossinazione." },
            { name: "Stone Therapy", price: "€85", desc: "Calore terapeutico con pietre laviche." },
            { name: "Massaggio di Coppia", price: "€140", desc: "Un'esperienza condivisa in suite riservata." }
        ]
    }
];

export default function ServicesPage() {
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
                        Il nostro Menu
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif text-charcoal mb-6"
                    >
                        Servizi <span className="italic">Esclusivi</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-charcoal/60 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Esplora la nostra selezione di trattamenti progettati per esaltare la tua bellezza naturale e regalarti momenti di puro relax. Ogni servizio è un rituale di eccellenza.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {serviceCategories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10"
                            >
                                <div className="flex items-center gap-6">
                                    {cat.icon}
                                    <h2 className="text-3xl font-serif text-charcoal">{cat.title}</h2>
                                </div>

                                <div className="space-y-8">
                                    {cat.services.map((service, s_idx) => (
                                        <div key={s_idx} className="group border-b border-charcoal/10 pb-6">
                                            <div className="flex justify-between items-baseline mb-2">
                                                <h3 className="text-lg font-medium text-charcoal group-hover:text-champagne transition-colors italic">
                                                    {service.name}
                                                </h3>
                                                <span className="text-sm font-serif text-charcoal/40">{service.price}</span>
                                            </div>
                                            <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-charcoal text-off-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-serif mb-8">Pronta per la tua <span className="italic">trasformazione?</span></h2>
                    <p className="text-off-white/60 mb-12 max-w-xl mx-auto uppercase tracking-widest text-xs">
                        Prenota oggi il tuo appuntamento per un'esperienza di bellezza senza precedenti.
                    </p>
                    <button className="px-12 py-4 border border-champagne text-champagne hover:bg-champagne hover:text-charcoal transition-all uppercase tracking-widest text-xs rounded-full">
                        Prenota Ora
                    </button>
                </div>
            </section>

            {/* Footer (Simplified) */}
            <footer className="py-12 bg-off-white text-charcoal/40 text-center">
                <p className="text-[10px] uppercase tracking-widest">© 2026 Aura Beauty. Tutti i diritti riservati.</p>
            </footer>
        </main>
    );
}
