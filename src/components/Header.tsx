
import React, { useState, useEffect } from "react";
import Container from "./ui/Container";
import { Menu, X } from "lucide-react";
import Button from "./ui/CustomButtonComponent";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Handle background change on scroll
      const offset = window.scrollY;
      setScrolled(offset > 50);

      if (isHomepage) {
        // Handle section highlighting on homepage
        const sections = ['about', 'services', 'partners', 'founders', 'testimonials'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        setActiveSection(currentSection || '');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  // Helper function to determine if we should use Link or anchor
  const NavLink = ({ 
    to, 
    children, 
    className, 
    onClick,
    target,
    rel,
    "aria-label": ariaLabel 
  }: { 
    to: string; 
    children: React.ReactNode; 
    className?: string; 
    onClick?: () => void;
    target?: string;
    rel?: string;
    "aria-label"?: string;
  }) => {
    // For hash links on homepage
    if (isHomepage && to.startsWith('#')) {
      return (
        <a href={to} className={className} onClick={onClick} target={target} rel={rel} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    // For external links
    if (to.startsWith('http') || to.startsWith('mailto:')) {
      return (
        <a href={to} className={className} onClick={onClick} target={target} rel={rel} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    // For internal navigation
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  };

  const navigation = [
    { 
      href: isHomepage ? "#about" : "/about", 
      label: "About Us",
      section: "about"
    },
    { 
      href: isHomepage ? "#services" : "/services", 
      label: "Services",
      section: "services"
    },
    { 
      href: isHomepage ? "#partners" : "/partners", 
      label: "Partners",
      section: "partners"
    },
    { 
      href: isHomepage ? "#founders" : "/team", 
      label: "Team",
      section: "founders"
    },
    { 
      href: isHomepage ? "#testimonials" : "/testimonials", 
      label: "Testimonials",
      section: "testimonials"
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/70 backdrop-blur-lg shadow-md' : 'py-6 bg-transparent'}`}>
      <Container>
        <div className="flex items-center justify-between">
          <NavLink to="/" className="relative z-10 micro-interaction">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/23b8985f-164c-4c02-a983-2dfa808c0689.png" 
                alt="Cointegrity Logo" 
                className="h-10 w-auto" 
              />
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navigation.map(({ href, label, section }) => (
              <NavLink 
                key={href}
                to={href} 
                className={`micro-interaction px-4 py-2 text-white/80 hover:text-white transition-colors relative
                  ${(activeSection === section || location.pathname === `/${section === 'founders' ? 'team' : section}`) ? 'text-white font-semibold' : 'hover:text-white'}`}
              >
                {label}
              </NavLink>
            ))}
            <NavLink 
              to={isHomepage ? "#contact" : "/contact"} 
              className="pl-4 micro-interaction"
            >
              <Button variant="primary" size="sm">Connect</Button>
            </NavLink>
          </nav>

          <button 
            className="md:hidden text-white p-2 micro-interaction" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 md:hidden pt-20">
          <Container>
            <nav className="flex flex-col gap-4 items-center text-center">
              {navigation.map(({ href, label, section }) => (
                <NavLink
                  key={href}
                  to={href}
                  className={`micro-interaction w-full py-4 text-xl border-b border-white/10
                    ${(activeSection === section || location.pathname === `/${section === 'founders' ? 'team' : section}`) ? 'text-white' : 'text-white/90 hover:text-white'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
              <NavLink 
                to={isHomepage ? "#contact" : "/contact"} 
                className="micro-interaction w-full py-4 text-xl text-white mt-4" 
                onClick={() => setIsOpen(false)}
              >
                <Button variant="primary" size="sm" className="w-full">
                  Contact Us
                </Button>
              </NavLink>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
