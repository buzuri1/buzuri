import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaAward } from 'react-icons/fa';

// Placeholder certificates data
// NOTE: Make sure to verify image paths. If you put images in 'public/certificates/', these paths will work.
import genai from '../assets/certificates/genai.svg';
import hr from '../assets/certificates/hr.svg';
import rwd from '../assets/certificates/rwd.svg';
import marketing from '../assets/certificates/marketing.svg';
import flutter from '../assets/certificates/flutter.svg';

const certificates = [
    {
        id: 1,
        title: "Generative AI: Prompt Engineering Basics",
        issuer: "IBM",
        date: "Dec 2025",
        img: genai
    },
    {
        id: 2,
        title: "Preparing to Manage Human Resources",
        issuer: "University of Minnesota",
        date: "Dec 2025",
        img: hr
    },
    {
        id: 3,
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "July 2025",
        img: rwd
    },
    {
        id: 4,
        title: "Fundamentals of Marketing Strategy",
        issuer: "University of London",
        date: "Dec 2025",
        img: marketing
    },
    {
        id: 5,
        title: "Flutter and Dart Mobile Apps",
        issuer: "IBM",
        date: "Dec 2025",
        img: flutter
    }
];

const Certificates = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <section className="py-20 relative overflow-hidden" id="certificates">
            <div className="container mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                        Recent <span className="text-electric">Certificates</span>
                    </h2>
                    <div className="w-24 h-1 bg-electric mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        Continuous learning and professional development. Verify my credentials.
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full pl-4 md:pl-20"> {/* Add padding-left for better start position */}
                <motion.div
                    ref={carousel}
                    className="cursor-grab overflow-hidden"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8 py-8"
                    >
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="min-w-[300px] md:min-w-[400px] h-[250px] md:h-[300px] glass-card p-4 relative group flex-shrink-0 rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Image Container */}
                                <div className="w-full h-full relative overflow-hidden rounded-xl bg-gray-900 border border-[rgba(255,255,255,0.05)]">
                                    {/* Fallback for missing image */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-gray-800 to-black z-0">
                                        <FaAward className="text-4xl text-gray-600 mb-2" />
                                        <span className="text-sm text-gray-400 font-display">{cert.title}</span>
                                        <span className="text-xs text-gray-500 mt-1">{cert.issuer}</span>
                                    </div>

                                    {/* Actual Image */}
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-10"
                                        onError={(e) => {
                                            // Hide image if fails to load, showing fallback underneath
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-20" />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm p-3 rounded-xl border border-[rgba(255,255,255,0.1)]">
                                            <h3 className="text-white text-md font-bold leading-tight line-clamp-2">{cert.title}</h3>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-electric text-xs font-semibold">{cert.issuer}</span>
                                                <span className="text-gray-400 text-[10px]">{cert.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
