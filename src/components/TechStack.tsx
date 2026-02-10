import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaSass, FaHtml5, FaCss3, FaNodeJs, FaJava, FaPython, FaDocker, FaLinux, FaAws, FaGoogle, FaAndroid, FaGitAlt, FaMicrosoft } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVite, SiNextdotjs, SiExpress, SiKotlin, SiGraphql, SiPostgresql, SiMongodb, SiMysql, SiRedis, SiFirebase, SiPandas, SiJupyter, SiAnaconda, SiOpencv, SiSolidity, SiNginx, SiSupabase } from 'react-icons/si';

const TechStack: React.FC = () => {
    const categories = [
        {
            title: 'Frontend',
            techs: [
                { name: 'React', icon: <FaReact /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'JavaScript', icon: <FaJs /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                { name: 'SASS', icon: <FaSass /> },
                { name: 'CSS3', icon: <FaCss3 /> },
                { name: 'HTML5', icon: <FaHtml5 /> },
                { name: 'Vite', icon: <SiVite /> },
            ],
        },
        {
            title: 'Backend',
            techs: [
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'Kotlin', icon: <SiKotlin /> },
                { name: 'Java', icon: <FaJava /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'Flask', icon: <FaPython /> },
                { name: 'GraphQL', icon: <SiGraphql /> },
            ],
        },
        {
            title: 'Databases',
            techs: [
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'MySQL', icon: <SiMysql /> },
                { name: 'Redis', icon: <SiRedis /> },
                { name: 'Firebase', icon: <SiFirebase /> },
                { name: 'Supabase', icon: <SiSupabase /> },
            ],
        },
        {
            title: 'Mobile',
            techs: [
                { name: 'Android Jetpack', icon: <FaAndroid /> },
            ],
        },
        {
            title: 'AI / Data Science',
            techs: [
                { name: 'Pandas', icon: <SiPandas /> },
                { name: 'Jupyter', icon: <SiJupyter /> },
                { name: 'Anaconda', icon: <SiAnaconda /> },
                { name: 'OpenCV', icon: <SiOpencv /> },
            ],
        },
        {
            title: 'Blockchain',
            techs: [
                { name: 'Solidity', icon: <SiSolidity /> },
                { name: 'Ethers.js', icon: <FaJs /> },
            ],
        },
        {
            title: 'DevOps & Cloud',
            techs: [
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'Linux', icon: <FaLinux /> },
                { name: 'Nginx', icon: <SiNginx /> },
                { name: 'AWS', icon: <FaAws /> },
                { name: 'Google Cloud', icon: <FaGoogle /> },
                { name: 'Azure', icon: <FaMicrosoft /> },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="tech-stack" className="py-16 sm:py-24 relative">
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
                        What I work with
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Tech <span className="font-brand text-electric-blue glow-text">Stack</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                    className="space-y-8 sm:space-y-12"
                >
                    {categories.map((category) => (
                        <motion.div key={category.title} variants={categoryVariants}>
                            <h3 className="text-lg font-semibold text-gray-400 mb-6 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-electric-blue/50" />
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                {category.techs.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        whileHover={{ y: -6, scale: 1.02 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="glass-card p-4 flex flex-col items-center justify-center gap-3 cursor-default group"
                                    >
                                        <div className="text-3xl text-gray-500 group-hover:text-electric-blue transition-colors duration-300">
                                            {tech.icon}
                                        </div>
                                        <span className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors duration-300 text-center">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
