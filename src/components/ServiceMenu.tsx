"use client"

import { motion } from "framer-motion";
import { Scissors, Sparkles, Paintbrush } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Precision Hair Styling",
        desc: "Bespoke cuts and coloring tailored to your unique essence.",
        icon: <Scissors size={32} className="text-champagne mb-4" />,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Advanced Skincare",
        desc: "Rejuvenating treatments using state-of-the-art technologies.",
        icon: <Sparkles size={32} className="text-champagne mb-4" />,
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Artisanal Nails",
        desc: "Meticulous nail care and artistic designs for a polished finish.",
        icon: <Paintbrush size={32} className="text-champagne mb-4" />,
        image: "https://images.unsplash.com/photo-1604654894610-df49ff66a7cb?auto=format&fit=crop&q=80&w=800"
    }
];

export default function ServiceMenu() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Our Specializations</h2>
                    <p className="text-charcoal/60 font-light max-w-xl mx-auto uppercase tracking-widest text-xs">
                        Refinement in every detail, excellence in every service.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-[4/5] rounded-2xl mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 glass opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl">
                                    <p className="text-off-white text-xs leading-relaxed uppercase tracking-wider">{service.desc}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-serif text-charcoal mb-2">{service.title}</h3>
                                <div className="w-12 h-px bg-champagne mx-auto transition-all group-hover:w-24" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
