import React from 'react';
import { motion } from 'framer-motion';

const heroImage = new URL('../assets/hero.png', import.meta.url).href;

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background effects - simpler on mobile */}
            <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-electric-blue/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center z-10 py-20 pt-24">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center md:text-left order-2 md:order-1"
                >
                    <p className="text-electric-blue text-sm font-medium tracking-[0.3em] uppercase mb-4">
                        Software Engineer
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-[0.9]">
                        <span className="block">Hello,</span>
                        <span className="block mt-2">
                            I'm{' '}
                            <span className="font-brand text-electric-blue glow-text">
                                buzuri
                            </span>
                        </span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            AI Enthusiast · Full Stack Developer · Mentor
                        </p>

                        <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
                            <a
                                href="#about"
                                className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-electric-blue text-black font-semibold rounded-full transition-colors duration-200 active:scale-95"
                            >
                                About Me
                            </a>
                            <a
                                href="#contact"
                                className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border border-white/20 text-white font-medium rounded-full hover:border-electric-blue hover:text-electric-blue transition-colors duration-200 active:scale-95"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center order-1 md:order-2"
                >
                    <div className="relative group">
                        {/* Simple glow ring - only on desktop */}
                        <div className="hidden md:block absolute -inset-4 rounded-full border border-electric-blue/20 animate-[spin_20s_linear_infinite]" />

                        {/* Profile Image */}
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-electric-blue/30 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
                            <img
                                src={heroImage}
                                alt="Buzuri"
                                className="w-full h-full object-cover"
                                loading="eager"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://placehold.co/400x400/0a0a0a/00FFFF?text=B';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>

                        {/* Status badge */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/80 px-3 py-1.5 rounded-full border border-electric-blue/30">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs text-gray-300">Available</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator - desktop only */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                    <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
