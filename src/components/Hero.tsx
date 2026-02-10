import React from 'react';
import { motion } from 'framer-motion';

const heroImage = new URL('../assets/hero.png', import.meta.url).href;

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center z-10 py-20 pt-24">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center md:text-left order-2 md:order-1"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-electric-blue text-sm font-medium tracking-[0.3em] uppercase mb-4"
                    >
                        Software Engineer
                    </motion.p>

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
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            AI Enthusiast · Full Stack Developer · Mentor
                        </p>

                        <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
                            <a
                                href="#about"
                                className="group relative px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-electric-blue text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:-translate-y-1"
                            >
                                <span className="relative z-10">About Me</span>
                            </a>
                            <a
                                href="#contact"
                                className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border border-white/20 text-white font-medium rounded-full hover:border-electric-blue hover:text-electric-blue transition-all duration-300 hover:-translate-y-1"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-center order-1 md:order-2"
                >
                    <div className="relative group">
                        {/* Animated glow rings */}
                        <div className="absolute -inset-4 rounded-full border border-electric-blue/20 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute -inset-8 rounded-full border border-electric-blue/10 animate-[spin_30s_linear_infinite_reverse]" />
                        <div className="absolute -inset-2 rounded-full bg-electric-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Profile Image */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-electric-blue/30 shadow-[0_0_40px_rgba(0,255,255,0.15)] group-hover:border-electric-blue/60 group-hover:shadow-[0_0_60px_rgba(0,255,255,0.25)] transition-all duration-500"
                        >
                            <img
                                src={heroImage}
                                alt="Buzuri"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://placehold.co/400x400/0a0a0a/00FFFF?text=B';
                                }}
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </motion.div>

                        {/* Status badge */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-electric-blue/30"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs text-gray-300">Available</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
