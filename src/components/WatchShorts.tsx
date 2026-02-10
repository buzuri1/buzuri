import { motion } from 'framer-motion';
import { FaTiktok } from 'react-icons/fa';

const WatchShorts = () => {
    return (
        <section className="py-20 px-4 flex justify-center items-center bg-black relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[rgba(0,255,255,0.1)] rounded-full blur-[100px] pointer-events-none" />

            <motion.a
                href="https://www.tiktok.com/@hanasho.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group relative flex items-center gap-6 px-12 py-8 cursor-pointer overflow-hidden backdrop-blur-md border border-[rgba(0,255,255,0.1)] rounded-2xl bg-[rgba(10,10,10,0.8)] hover:border-[var(--electric-blue)] transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Animated border gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />

                <div className="relative z-10 flex flex-col items-center gap-2">
                    <FaTiktok className="text-4xl text-[var(--electric-blue)] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                    <span className="text-sm font-light tracking-wider text-gray-400 font-display">
                        @hanasho.ai
                    </span>
                </div>

                <div className="h-12 w-[1px] bg-[rgba(255,255,255,0.1)] mx-2" />

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold font-display tracking-wide text-white group-hover:text-[var(--electric-blue)] transition-colors duration-300">
                        WATCH
                    </h2>
                    <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mt-1 group-hover:text-white transition-colors duration-300">
                        My Shorts
                    </p>
                </div>
            </motion.a>
        </section>
    );
};

export default WatchShorts;
