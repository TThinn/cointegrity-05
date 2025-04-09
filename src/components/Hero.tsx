import React from "react";
import Container from "./ui/Container";
import Button from "./ui/CustomButtonComponent";

const Hero = () => {
  return (
    <section className="hero-section pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden grid-pattern bg-[#080112]">
      {/* Dynamic light effects */}
      <div className="dynamic-light-effects absolute inset-0 z-0 pointer-events-none"></div>
      
      {/* Light orbs - replacing the streaks */}
      <div className="light-orbs absolute inset-0 z-0 pointer-events-none"></div>
      
      {/* Background elements - keeping existing glow elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px] bg-pink-500/25 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/25 rounded-full blur-[100px]"></div>
      </div>
      
      <Container className="hero-content relative z-10 text-lg font-normal flex flex-col min-h-[70vh] justify-between">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-16">
          <h1 className="text-[36px] lg:text-[56px] tracking-tight text-balance animate-fade-up mb-8 font-normal leading-tight text-shadow" style={{
          animationDelay: "0.2s"
        }}>
            <span className="text-white/80" data-text="Strategic Web3 Advisory for" style={{
            backgroundPosition: "center center"
          }}>Strategic Web3 Advisory for</span>
            {" "}
            <span className="text-white floating-element" data-text="Tokenomics" style={{
            animationDelay: "2s"
          }}>Tokenomics</span> {" "}
            <span className="text-white/80" data-text="&" style={{
            backgroundPosition: "center center"
          }}>&</span> {" "}
            <span className="text-white floating-element" data-text="Regulatory" style={{
            animationDelay: "2.3s"
          }}>Regulatory</span> {" "}
            <span className="text-white floating-element" data-text="Compliance" style={{
            animationDelay: "2.6s"
          }}>Compliance</span>
          </h1>
          
          {/* Accent line */}
          <div style={{
          animationDelay: "0.25s"
        }} className="w-[120px] h-[1px] mb-8 animate-fade-up bg-pink-500"></div>
          
          <h2 className="text-lg max-w-2xl text-balance animate-fade-up relative mb-16 text-white/80" style={{
          animationDelay: "0.4s"
        }}>
            We simplify complexity and amplify impact, enabling you to focus on delivering maximum value to your stakeholders.
          </h2>
        </div>
          
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-up mb-20" style={{
        animationDelay: "0.5s"
      }}>
          <Button variant="cta-primary" className="floating-element w-full sm:w-auto" href="#contact" transitionDuration="5s" style={{
          animationDelay: "3s"
        }}>
            Talk to an expert
          </Button>
        </div>
          
        <div className="mt-4 border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up text-center" style={{
        animationDelay: "0.6s"
      }}>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">45+</h3>
            <p className="text-white/60 text-sm mt-1">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">15+</h3>
            <p className="text-white/60 text-sm mt-1">Project Jurisdictions</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">20+</h3>
            <p className="text-white/60 text-sm mt-1">Enterprise Clients</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">40+</h3>
            <p className="text-white/60 text-sm mt-1">Projects Delivered</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
