"use client"

import { motion } from "framer-motion";
import BookingWidget from "./BookingWidget";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-off-white">
            {/* Background Image Placeholder / Parallax Effect */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000')",
                    filter: "brightness(0.9)"
                }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-off-white/20" />

            <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl text-center md:text-left"
                >
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-charcoal/60 mb-4 block">
                        Luxury Aesthetics & Wellness
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal leading-tight mb-6">
                        Elevating the Art <br />
                        <span className="italic">of Beauty.</span>
                    </h1>
                    <p className="text-base md:text-lg text-charcoal/80 max-w-lg mb-8 font-light leading-relaxed mx-auto md:mx-0">
                        Experience unparalleled care and sophisticated styling in a space designed for harmony and excellence.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <button className="px-8 py-3 bg-charcoal text-off-white text-xs uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
                            Explore Services
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full max-w-md"
                >
                    <BookingWidget />
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-px h-12 bg-charcoal/20" />
            </motion.div>
        </section>
    );
}
