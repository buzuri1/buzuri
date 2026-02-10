import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandPointer } from 'react-icons/fa';

import genai from '../assets/certificates/genai.png';
import hr from '../assets/certificates/hr.png';
import rwd from '../assets/certificates/rwd.png';
import marketing from '../assets/certificates/marketing.png';
import flutter from '../assets/certificates/flutter.png';

const certificates = [
    {
        id: 1,
        title: "Generative AI: Prompt Engineering Basics",
        issuer: "IBM",
        img: genai
    },
    {
        id: 2,
        title: "Preparing to Manage Human Resources",
        issuer: "Univ. of Minnesota",
        img: hr
    },
    {
        id: 3,
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        img: rwd
    },
    {
        id: 4,
        title: "Fundamentals of Marketing Strategy",
        issuer: "Univ. of London",
        img: marketing
    },
    {
        id: 5,
        title: "Flutter and Dart Mobile Apps",
        issuer: "IBM",
        img: flutter
    }
];

const Certificates = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAlbum = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="py-24 relative overflow-hidden min-h-[800px] flex flex-col items-center justify-center" id="certificates">
            <div className="container mx-auto px-4 mb-16 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                        Recent <span className="text-electric">Certificates</span>
                    </h2>
                    <div className="w-24 h-1 bg-electric mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto font-light mb-8">
                        {isExpanded
                            ? "Tap the album to stack them back."
                            : "Click the album below to reveal my credentials."}
                    </p>
                </motion.div>
            </div>

            {/* Album Container */}
            <div className="relative w-full max-w-7xl mx-auto flex justify-center items-center perspective-1000">
                <motion.div
                    className={`relative w-full flex ${isExpanded ? 'flex-wrap justify-center gap-6' : 'justify-center items-center h-[400px]'}`}
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <AnimatePresence>
                        {certificates.map((cert, index) => {
                            // Stacked state formatting
                            const rotate = isExpanded ? 0 : (index - 2) * 5; // Fan out slightly in stack
                            const x = isExpanded ? 0 : (index - 2) * 2;
                            const y = isExpanded ? 0 : -index * 2;
                            const zIndex = isExpanded ? 1 : certificates.length - index;

                            return (
                                <motion.div
                                    key={cert.id}
                                    layout
                                    onClick={toggleAlbum}
                                    className={`
                                        cursor-pointer relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/10
                                        ${isExpanded
                                            ? 'w-[300px] h-[220px] hover:z-50 hover:scale-105 transition-transform'
                                            : 'absolute w-[340px] h-[260px] hover:-translate-y-4 transition-transform'
                                        }
                                        bg-gray-900 group
                                    `}
                                    initial={false}
                                    animate={{
                                        rotate: rotate,
                                        x: x,
                                        y: y,
                                        zIndex: zIndex,
                                        scale: isExpanded ? 1 : 1 - index * 0.05,
                                    }}
                                    whileHover={!isExpanded ? { scale: 1.05, rotate: rotate } : {}}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                >
                                    {/* Glass Overlay/Sheen */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20" />

                                    {/* Hand Hint on Top Card */}
                                    {!isExpanded && index === 0 && (
                                        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="flex flex-col items-center text-white">
                                                <FaHandPointer className="text-3xl mb-2 animate-bounce" />
                                                <span className="font-display tracking-widest text-sm">OPEN ALBUM</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Image */}
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Info Badge (Visible when expanded) */}
                                    {isExpanded && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-white text-xs font-bold truncate">{cert.title}</h3>
                                            <p className="text-electric text-[10px]">{cert.issuer}</p>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>

            {!isExpanded && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm animate-pulse"
                >
                    Tap stack to view
                </motion.div>
            )}
        </section>
    );
};

export default Certificates;
