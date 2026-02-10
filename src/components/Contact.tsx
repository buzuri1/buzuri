import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-16 sm:py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Animated Slogan */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4 }}
                    className="mb-12 sm:mb-16"
                >
                    <div className="min-h-[50px] sm:min-h-[60px] flex items-center justify-center">
                        <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                            Empowering Somali youth with{' '}
                            <span className="text-electric-blue glow-text font-brand">
                                <TypeAnimation
                                    sequence={[
                                        'AI',
                                        2000,
                                        'Tech',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    cursor={true}
                                />
                            </span>
                        </h2>
                    </div>
                </motion.div>

                {/* Contact Header */}
                <div>
                    <p className="text-electric-blue text-sm font-medium tracking-[0.3em] uppercase mb-3">
                        Let's connect
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="font-brand text-electric-blue glow-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg max-w-lg mx-auto">
                        I'm currently open to new opportunities and collaborations.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6">
                    <a
                        href="mailto:hanasho.tech@gmail.com"
                        className="glass-card p-5 sm:p-8 flex flex-col items-center group flex-1 sm:max-w-[280px]"
                    >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-electric-blue/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-electric-blue/20 transition-colors duration-200">
                            <FaEnvelope className="text-lg sm:text-xl text-electric-blue" />
                        </div>
                        <span className="text-white font-medium mb-1 text-sm sm:text-base">Email</span>
                        <span className="text-gray-400 text-xs sm:text-sm group-hover:text-electric-blue transition-colors duration-200">
                            hanasho.tech@gmail.com
                        </span>
                    </a>

                    <a
                        href="tel:+252612850007"
                        className="glass-card p-5 sm:p-8 flex flex-col items-center group flex-1 sm:max-w-[280px]"
                    >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-electric-blue/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-electric-blue/20 transition-colors duration-200">
                            <FaPhone className="text-lg sm:text-xl text-electric-blue" />
                        </div>
                        <span className="text-white font-medium mb-1 text-sm sm:text-base">Phone</span>
                        <span className="text-gray-400 text-xs sm:text-sm group-hover:text-electric-blue transition-colors duration-200">
                            +252 612 850 007
                        </span>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 sm:mt-24 text-center border-t border-white/5 pt-6 sm:pt-8 pb-4 mx-4">
                <p className="text-gray-600 text-xs sm:text-sm">
                    &copy; {new Date().getFullYear()}{' '}
                    <span className="font-brand text-electric-blue/60">buzuri</span>
                    <span className="text-gray-700">.dev</span>
                    {' '}· Built with React & Tailwind
                </p>
            </footer>
        </section>
    );
};

export default Contact;
