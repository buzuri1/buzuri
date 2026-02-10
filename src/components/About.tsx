import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const stats = [
        { value: '2021', label: 'Started Teaching' },
        { value: '23', label: 'Years Old' },
        { value: 'AI', label: 'Specialization' },
        { value: '∞', label: 'Passion' },
    ];

    return (
        <section id="about" className="py-16 sm:py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <p className="text-electric-blue text-sm font-medium tracking-[0.3em] uppercase mb-3">
                        Get to know me
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        About <span className="font-brand text-electric-blue glow-text">me</span>
                    </h2>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="glass-card p-5 sm:p-8 md:p-12 mb-8 sm:mb-12"
                >
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        I am a 23-year-old software engineer, born on November 26, 2002. Since 2021, I have been on a mission to teach Somali youth how to leverage{' '}
                        <span className="text-electric-blue font-semibold">AI</span>,{' '}
                        <span className="text-electric-blue font-semibold">technology</span>, and online platforms to create opportunities and generate income.
                    </p>
                    <br />
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        The digital world is full of possibilities. As a Somali AI and technology expert, I focus on practical learning, because many young people do not know where to start. I share coding tips, AI tools, and strategies to make money online safely and effectively.
                    </p>
                    <br />
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        Over the years, I have seen students transform their skills into real projects, freelance jobs, and small businesses. For me, it is not just about technology. It is about{' '}
                        <span className="text-electric-blue font-semibold">empowering the next Somali generation</span>{' '}
                        and showing them that age, location, or resources are not limitations.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="glass-card p-4 sm:p-6 text-center"
                        >
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-electric-blue glow-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
