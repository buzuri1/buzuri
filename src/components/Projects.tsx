import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Hanasho',
            description: 'A premium tech and digital agency delivering AI-powered solutions, web development, and digital transformation for global brands.',
            tags: ['AI Solutions', 'Web Development', 'Digital Agency', 'React'],
            link: 'https://www.hanasho.io',
            niche: 'Tech & Digital Agency',
        },
        {
            title: 'SoomarAI',
            description: 'A trusted online e-commerce store offering quality products with fast delivery and excellent customer service across Somalia.',
            tags: ['E-commerce', 'Online Store', 'Payments', 'Delivery'],
            link: 'https://soomarai.shop',
            niche: 'E-commerce Platform',
        },
        {
            title: 'CaafimaadAI',
            description: 'An AI-powered health and skin analysis platform that helps users understand their health conditions using advanced artificial intelligence.',
            tags: ['AI', 'Health Tech', 'Skin Analysis', 'Machine Learning'],
            link: 'https://www.caafimaadai.com',
            niche: 'AI Health & Wellness',
        },
        {
            title: 'LuuqadAI',
            description: 'An AI-powered Somali language learning platform designed to help users learn and improve their Somali language skills through technology.',
            tags: ['AI', 'Language Learning', 'Somali', 'EdTech'],
            link: 'https://luuqadai.site',
            niche: 'AI Language Learning',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="projects" className="py-16 sm:py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <p className="text-electric-blue text-sm font-medium tracking-[0.3em] uppercase mb-3">
                        My work
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Featured <span className="font-brand text-electric-blue glow-text">Projects</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="glass-card p-5 sm:p-6 block group cursor-pointer"
                        >
                            {/* Project number */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-electric-blue/30 font-display text-4xl sm:text-5xl group-hover:text-electric-blue/60 transition-colors duration-300">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
                                    {project.niche}
                                </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-electric-blue/80 border border-electric-blue/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            <div className="text-gray-600 group-hover:text-electric-blue transition-all duration-300 flex items-center gap-2 text-sm font-medium">
                                Visit Site
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
