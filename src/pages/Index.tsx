
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Founders from "@/components/Founders";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import { SeoHead } from "@/components/seo/SeoHead";
import { useSectionTracking } from "@/hooks/useSectionTracking";

/**
 * Main index page with semantic HTML structure
 * Setup for potential hybrid rendering approach
 */
const Index = () => {
  // Use custom hook for section tracking and URL management
  const { currentPath, currentHash } = useSectionTracking();

  // Check if we have any server-side pre-rendered content
  // This is a preparation for hybrid rendering approach
  const isHydrating = React.useRef(true);
  React.useEffect(() => {
    isHydrating.current = false;
  }, []);

  return (
    <div className="min-h-screen bg-[#080112]" itemScope itemType="https://schema.org/WebPage">
      {/* SEO Head with all metadata and structured data */}
      <SeoHead currentPath={currentPath} currentHash={currentHash} />
      
      <Header role="banner" />
      <main id="main" role="main">
        <Hero />
        <AboutUs />
        <Process />
        <Services />
        <Partners />
        <Founders />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer role="contentinfo" />
    </div>
  );
};

// Add display name for component
Index.displayName = "IndexPage";

export default Index;
