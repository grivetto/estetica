"use client"

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
        title: "Interior Design",
        category: "Ambiente"
    },
    {
        url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
        title: "Styling Session",
        category: "Hair"
    },
    {
        url: "https://images.unsplash.com/photo-1596462502278-27bfaf433393?auto=format&fit=crop&q=80&w=800",
        title: "Skin Treatment",
        category: "Skincare"
    },
    {
        url: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80&w=800",
        title: "Nail Art",
        category: "Nails"
    },
    {
        url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
        title: "Makeup Art",
        category: "Beauty"
    },
    {
        url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
        title: "Facial Mask",
        category: "Treatments"
    }
];

export default function GalleryPage() {
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
                        Ispirazione Visiva
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif text-charcoal mb-6"
                    >
                        La Nostra <span className="italic">Galleria</span>
                    </motion.h1>
                    <p className="text-charcoal/60 font-light max-w-xl mx-auto uppercase tracking-widest text-[10px]">
                        Un viaggio attraverso l'eleganza, lo stile e la cura dei dettagli.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group overflow-hidden rounded-2xl cursor-zoom-in"
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-[10px] uppercase tracking-widest text-champagne mb-2">{img.category}</span>
                                    <h3 className="text-xl font-serif text-off-white">{img.title}</h3>
                                </div>
                            </motion.div>
                        ))}
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
