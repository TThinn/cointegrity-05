
import React from "react";
import { ParticleType } from "../testimonials/types";

interface CTAParticleEffectProps {
  particles: ParticleType[];
}

const CTAParticleEffect: React.FC<CTAParticleEffectProps> = ({ particles }) => {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={`cta-particle-${i}`}
          className="absolute rounded-full blur-[12px] animate-light-particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--move-x': `${p.moveX}vw`,
            '--move-y': `${p.moveY}vh`,
            '--rotate': `${p.rotate}deg`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default CTAParticleEffect;
