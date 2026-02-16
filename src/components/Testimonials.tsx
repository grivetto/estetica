"use client"

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "Aura Beauty ha ridefinito il significato di benessere di lusso per il mio salone. L'attenzione ai dettagli non ha eguali.",
        author: "Elena Rossi",
        role: "Proprietaria del Salone"
    },
    {
        id: 2,
        text: "La piattaforma più sofisticata che abbia mai usato. Cattura perfettamente l'essenza dell'estetica di alto livello.",
        author: "Marco Bianchi",
        role: "Estetista Capo"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-off-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    <Quote className="text-champagne mb-8" size={48} />

                    <div className="relative w-full max-w-4xl mx-auto">
                        <div className="flex space-x-12 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8">
                            {testimonials.map((t) => (
                                <div key={t.id} className="min-w-full snap-center text-center px-4">
                                    <p className="text-2xl md:text-3xl font-serif text-charcoal italic leading-relaxed mb-8">
                                        &quot;{t.text}&quot;
                                    </p>
                                    <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-charcoal/80">{t.author}</h4>
                                    <p className="text-xs text-charcoal/40 uppercase tracking-widest mt-1">{t.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex space-x-2 mt-8">
                        <div className="w-2 h-2 rounded-full bg-charcoal" />
                        <div className="w-2 h-2 rounded-full bg-charcoal/20" />
                    </div>
                </div>
            </div>
        </section>
    );
}
