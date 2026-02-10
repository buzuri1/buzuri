import React, { type ReactNode } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './Navbar';
import SnowParticles from './SnowParticles';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-electric-blue/30 selection:text-white relative">
            <SnowParticles />
            <Navbar />
            <main className="relative z-10">
                {children}
            </main>

            {/* WhatsApp floating button */}
            <a
                href="https://wa.link/0nfn2q"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group flex items-center gap-3"
            >
                <span className="bg-black/80 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    ila so xirir
                </span>
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300">
                    <FaWhatsapp className="text-white text-2xl" />
                </div>
            </a>
        </div>
    );
};

export default Layout;
