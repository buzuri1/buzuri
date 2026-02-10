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

    return (
        <section id="tech-stack" className="py-16 sm:py-24 relative">
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
                        What I work with
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Tech <span className="font-brand text-electric-blue glow-text">Stack</span>
                    </h2>
                </motion.div>

                <div className="space-y-8 sm:space-y-12">
                    {categories.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-lg font-semibold text-gray-400 mb-4 sm:mb-6 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-electric-blue/50" />
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
                                {category.techs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="glass-card p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-default group"
                                    >
                                        <div className="text-2xl sm:text-3xl text-gray-500 group-hover:text-electric-blue transition-colors duration-200">
                                            {tech.icon}
                                        </div>
                                        <span className="text-[10px] sm:text-xs text-gray-400 font-medium group-hover:text-white transition-colors duration-200 text-center leading-tight">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
