import React, { useMemo } from 'react';

const SnowParticles: React.FC = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 10 + 8,
            delay: Math.random() * 10,
            opacity: Math.random() * 0.5 + 0.2,
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
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
