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
                    <Link href="#services" className="text-sm uppercase tracking-widest hover:text-champagne transition-colors">
                        Services
                    </Link>
                    <Link href="#pros" className="text-sm uppercase tracking-widest hover:text-champagne transition-colors">
                        Professionals
                    </Link>
                    <Link href="#gallery" className="text-sm uppercase tracking-widest hover:text-champagne transition-colors">
                        Gallery
                    </Link>
                    <button className="px-6 py-2 bg-charcoal text-off-white text-xs uppercase tracking-widest hover:bg-opacity-80 transition-all rounded-full">
                        Book Now
                    </button>
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-off-white dark:bg-charcoal p-6 flex flex-col space-y-4 md:hidden shadow-xl"
                    >
                        <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest">
                            Services
                        </Link>
                        <Link href="#pros" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest">
                            Professionals
                        </Link>
                        <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest">
                            Gallery
                        </Link>
                        <button className="w-full py-3 bg-charcoal text-off-white text-xs uppercase tracking-widest rounded-full">
                            Book Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
