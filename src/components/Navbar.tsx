"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 glass shadow-sm" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-charcoal dark:text-off-white">
                    AURA BEAUTY
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/servizi" className="text-sm uppercase tracking-widest hover:text-champagne transition-colors">
                        Servizi
                    </Link>
                    <Link href="/chi-siamo" className="text-sm uppercase tracking-widest hover:text-champagne transition-colors">
                        Chi Siamo
                    </Link>
                    <Link href="/galleria" className="text-sm uppercase tracking-widest hover:text-champagne transition-colors">
                        Galleria
                    </Link>
                    <Link href="/contatti" className="px-6 py-2 bg-charcoal text-off-white text-xs uppercase tracking-widest hover:bg-opacity-80 transition-all rounded-full">
                        Prenota Ora
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-40 bg-off-white/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 text-charcoal"
                        >
                            <X size={32} />
                        </button>
                        <Link href="/servizi" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-charcoal uppercase tracking-widest hover:text-champagne transition-colors">
                            Servizi
                        </Link>
                        <Link href="/chi-siamo" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-charcoal uppercase tracking-widest hover:text-champagne transition-colors">
                            Chi Siamo
                        </Link>
                        <Link href="/galleria" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-charcoal uppercase tracking-widest hover:text-champagne transition-colors">
                            Galleria
                        </Link>
                        <Link href="/contatti" onClick={() => setIsMobileMenuOpen(false)} className="px-12 py-4 bg-charcoal text-off-white text-sm uppercase tracking-widest rounded-full shadow-lg text-center">
                            Prenota Appuntamento
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
