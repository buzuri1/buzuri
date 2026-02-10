import React, { type ReactNode } from 'react';
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
        </div>
    );
};

export default Layout;
