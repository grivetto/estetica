"use client"

import { Calendar, User, Wand2 } from "lucide-react";

export default function BookingWidget() {
    return (
        <div className="glass p-8 rounded-3xl shadow-2xl border border-white/30 text-charcoal">
            <h3 className="text-xl font-serif mb-6 text-center">Richiedi la tua Bellezza</h3>

            <div className="space-y-4">
                <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-charcoal/50 ml-1 mb-1 block">Servizio</label>
                    <div className="flex items-center bg-white/40 rounded-xl px-4 py-3 border border-white/20">
                        <Wand2 size={16} className="text-charcoal/40 mr-3" />
                        <select className="bg-transparent w-full text-sm outline-none appearance-none cursor-pointer">
                            <option>Styling Capelli di Precisione</option>
                            <option>Cura della Pelle Avanzata</option>
                            <option>Nails Artigianali</option>
                        </select>
                    </div>
                </div>

                <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-charcoal/50 ml-1 mb-1 block">Data</label>
                    <div className="flex items-center bg-white/40 rounded-xl px-4 py-3 border border-white/20">
                        <Calendar size={16} className="text-charcoal/40 mr-3" />
                        <input type="date" className="bg-transparent w-full text-sm outline-none cursor-pointer" />
                    </div>
                </div>

                <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-charcoal/50 ml-1 mb-1 block">Estetista</label>
                    <div className="flex items-center bg-white/40 rounded-xl px-4 py-3 border border-white/20">
                        <User size={16} className="text-charcoal/40 mr-3" />
                        <select className="bg-transparent w-full text-sm outline-none appearance-none cursor-pointer">
                            <option>Qualsiasi Professionista</option>
                            <option>Elena Rossi</option>
                            <option>Marco Bianchi</option>
                        </select>
                    </div>
                </div>

                <button className="w-full py-4 bg-charcoal text-off-white rounded-xl text-xs uppercase tracking-[0.2em] font-bold mt-4 hover:bg-opacity-90 transition-all shadow-lg active:scale-95">
                    Prenota Appuntamento
                </button>
            </div>

            <p className="text-[10px] text-center mt-6 text-charcoal/40 italic">
                * Esperienze su misura attendono la tua presenza
            </p>
        </div>
    );
}
