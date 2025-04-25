import React, { useState, useEffect } from "react";
import Container from "./ui/Container";
import Button from "./ui/CustomButtonComponent";
const Testimonials = () => {
  const [activeTestimonials, setActiveTestimonials] = useState<number[]>([0, 1, 2, 3]);
  const [changingIndex, setChangingIndex] = useState<number | null>(null);
  const [fadeState, setFadeState] = useState<'visible' | 'fading-out' | 'changing' | 'fading-in'>('visible');
  const testimonials = [{
    id: 1,
    quote: "We're grateful for Cointegrity's support in securing grants and connecting us with top blockchain partners. Their expertise unlocked opportunities we couldn't access alone.",
    name: "Josh Wilson",
    title: "CEO of Reload Games"
  }, {
    id: 2,
    quote: "Working with Cointegrity has been transformative for our business growth. Their guidance helped us navigate the future of finance with confidence.",
    name: "Sarah Johnson",
    title: "Founder of TechBridge"
  }, {
    id: 3,
    quote: "Torstein Thinn played a pivotal role in automating and streamlining AKJ's trading and systems processes, significantly enhancing scalability and operational efficiency. His expertise contributed to AKJ's continued success as a global leader in turnkey solutions for fund setup across crypto and traditional markets.",
    name: "Anders Kvamme Jensen",
    title: "Founder and Chairman, AKJ group"
  }, {
    id: 4,
    quote: "Cointegrity's tokenomics design transformed our project, creating a sustainable model aligned with the future of finance that's attracted significant investment and user growth.",
    name: "Michelle Park",
    title: "Co-founder of TokenWave"
  }, {
    id: 5,
    quote: "The strategic positioning advice we received from Cointegrity was instrumental in differentiating our product in the evolving future of finance landscape.",
    name: "Alex Rivera",
    title: "Head of Strategy at Web3 Solutions"
  }, {
    id: 6,
    quote: "Their regulatory navigation expertise in MiCA compliance saved us countless hours and potential pitfalls as we expanded into European markets, cementing our position in the future of finance.",
    name: "Elena Kovacs",
    title: "Legal Director at DeFi Protocol"
  }, {
    id: 7,
    quote: "The capital acceleration program connected us with perfect investors who understood our vision for the future of finance and provided more than just funding.",
    name: "Thomas Wright",
    title: "CEO of MetaVerse Platforms"
  }, {
    id: 8,
    quote: "Cointegrity's team demonstrated exceptional knowledge of both traditional finance and blockchain technology, bridging gaps in the future of finance that we couldn't on our own.",
    name: "Jennifer Liu",
    title: "VP of Operations at Crypto Exchange"
  }];
  useEffect(() => {
    let currentBoxIndex = 0;
    let timeoutId: NodeJS.Timeout;
    const rotateTestimonials = () => {
      // Start fade out
      setChangingIndex(currentBoxIndex);
      setFadeState('fading-out');

      // After fade out completes, change the content
      timeoutId = setTimeout(() => {
        setFadeState('changing');
        setActiveTestimonials(prev => {
          const newTestimonials = [...prev];
          // Find a testimonial that's not currently displayed
          const currentlyDisplayed = new Set(prev);
          let nextTestimonialIndex;
          do {
            nextTestimonialIndex = Math.floor(Math.random() * testimonials.length);
          } while (currentlyDisplayed.has(nextTestimonialIndex));
          newTestimonials[currentBoxIndex] = nextTestimonialIndex;
          return newTestimonials;
        });

        // Start fade in
        timeoutId = setTimeout(() => {
          setFadeState('fading-in');

          // Complete fade in and prepare for next change
          timeoutId = setTimeout(() => {
            setFadeState('visible');
            currentBoxIndex = (currentBoxIndex + 1) % 4;

            // Schedule next rotation
            timeoutId = setTimeout(rotateTestimonials, 2500); // Wait before starting next rotation
          }, 300); // Fade in duration
        }, 50); // Small delay before fade in starts
      }, 300); // Fade out duration
    };

    // Start the first rotation
    timeoutId = setTimeout(rotateTestimonials, 1000);
    return () => clearTimeout(timeoutId);
  }, [testimonials.length]);
  return <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#010822] to-[#133a63]"></div>
        <div className="absolute left-1/4 top-1/3 w-[600px] h-[600px] bg-[#0a1a3a]/10 rounded-full blur-[100px]"></div>
      </div>
      
      <Container>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-sm uppercase tracking-wider font-medium text-pink-400">CLIENT TESTIMONIALS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">You will be in good company</h3>
            <p className="text-white/60 max-w-2xl mx-auto">Experiences from working with Cointegrity or our Co-Founders in reshaping the industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
            {[0, 1, 2, 3].map(position => <div key={position} className={`glass bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-lg transition-all duration-300 ${changingIndex === position && fadeState !== 'visible' ? 'transform scale-[1.02]' : ''}`}>
                <div className="text-left h-full flex flex-col">
                  <p className={`text-white/80 text-sm mb-6 flex-grow transition-opacity duration-300 ${changingIndex === position && (fadeState === 'fading-out' || fadeState === 'changing') ? 'opacity-0' : changingIndex === position && fadeState === 'fading-in' ? 'opacity-100 transition-opacity duration-300' : 'opacity-100'}`}>"{testimonials[activeTestimonials[position]].quote}"</p>
                  <div>
                    <p className={`text-white font-semibold transition-opacity duration-300 ${changingIndex === position && (fadeState === 'fading-out' || fadeState === 'changing') ? 'opacity-0' : changingIndex === position && fadeState === 'fading-in' ? 'opacity-100 transition-opacity duration-300' : 'opacity-100'}`}>{testimonials[activeTestimonials[position]].name}</p>
                    <p className={`text-white/60 text-xs transition-opacity duration-300 ${changingIndex === position && (fadeState === 'fading-out' || fadeState === 'changing') ? 'opacity-0' : changingIndex === position && fadeState === 'fading-in' ? 'opacity-100 transition-opacity duration-300' : 'opacity-100'}`}>{testimonials[activeTestimonials[position]].title}</p>
                  </div>
                </div>
              </div>)}
          </div>
          
          <div className="mt-10 text-center animate-fade-up">
            <a href="#contact">
              <Button variant="cta-primary" size="md">Partner with us</Button>
            </a>
          </div>
        </div>
      </Container>
    </section>;
};
export default Testimonials;