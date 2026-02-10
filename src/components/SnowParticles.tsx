import React, { useMemo } from 'react';

const SnowParticles: React.FC = () => {
    const particles = useMemo(() => {
        const count = 50; // Increased count for better visibility on all devices

        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 12 + 10,
            delay: Math.random() * 10,
            opacity: Math.random() * 0.4 + 0.1,
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[50]" aria-hidden="true">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="snow-particle"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        opacity: p.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default SnowParticles;
