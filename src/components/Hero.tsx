import React, { useRef, useEffect, useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/CustomButtonComponent";

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  // Pre-calculate all particle positions and properties
  const particleStyles = useRef(
    Array.from({ length: 25 }, () => ({
      size: 120 + Math.random() * 300,
      x: Math.random() * 100,
      y: Math.random() * 100,
      moveX: (Math.random() - 0.5) * 80,
      moveY: (Math.random() - 0.5) * 80,
      rotate: Math.random() * 360,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 15
    }))
  ).current;

  useEffect(() => {
    const handleResize = () => {
      isMobileRef.current = window.innerWidth < 768;
    };

    // Initial setup
    handleResize();
    setIsVisible(true); // Trigger opacity transition
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero-section pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden bg-[#060115] isolate">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060115] to-[#060115]" />
        
        {/* Particle Container */}
        <div 
          ref={particlesRef}
          className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {particleStyles
            .slice(0, isMobileRef.current ? 5 : 25)
            .map((style, i) => (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full blur-[30px] animate-light-particle"
                style={{
                  width: `${style.size}px`,
                  height: `${style.size}px`,
                  background: 'rgba(225,29,143,0.3)',
                  left: `${style.x}%`,
                  top: `${style.y}%`,
                  animationDelay: `${style.delay}s`,
                  animationDuration: `${style.duration}s`,
                  '--move-x': `${style.moveX}vw`,
                  '--move-y': `${style.moveY}vh`,
                  '--rotate': `${style.rotate}deg`
                }}
              />
            ))}
        </div>
      </div>

      {/* Content container */}
      <Container className="hero-content relative z-8 text-lg font-normal flex flex-col min-h-[70vh] justify-between">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-16">
          <h1
            className="text-[40px] lg:text-[60px] tracking-tight text-balance animate-fade-up mb-4 font-bold leading-tight text-shadow"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-white font-extrabold">Simplifying Web3 Complexity</span>
          </h1>

          <h2
            className="text-lg max-w-2xl text-balance animate-fade-up relative mb-16 text-white/80"
            style={{ animationDelay: "0.4s" }}
          >
            We provide Full-cycle Web3 Consulting Solutions at the Intersection of Blockchain, Ai, Gaming, Tax & Compliance.
          </h2>
        </div>

        {/* CTA Button */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-up mb-10"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            variant="cta-primary"
            className="floating-element w-full sm:w-auto"
            href="#contact"
          >
            Connect With Us
          </Button>
        </div>

        {/* Stats grid */}
        <div
          className="mt-4 border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up text-center"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { number: "45+", label: "Years Experience" },
            { number: "15+", label: "Project Jurisdictions" },
            { number: "20+", label: "Enterprise Clients" },
            { number: "40+", label: "Projects Delivered" }
          ].map((stat, i) => (
            <div key={`stat-${i}`}>
              <h3 className="text-3xl md:text-4xl font-bold text-white">{stat.number}</h3>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes light-particle {
          0%, 100% { 
            opacity: 0.4;
            transform: translate(0, 0) scale(1) rotate(0);
          }
          50% { 
            opacity: 0.8;
            transform: 
              translate(var(--move-x), var(--move-y)) 
              scale(1.5) 
              rotate(var(--rotate));
          }
        }
        .animate-light-particle {
          animation: light-particle ease-in-out infinite;
          mix-blend-mode: screen;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-light-particle {
            animation: none;
            opacity: 0.3 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
