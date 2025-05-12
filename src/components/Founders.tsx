
import React from "react";
import Container from "./ui/Container";
import { Linkedin, Github, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const founders = [{
  name: "Torstein W. Thinn",
  role: "Co-Founder & Chairman",
  bio: "Financial innovator who established the world's first cryptocurrency regulatory task force in 2019. Pioneered AI-driven trading strategies in 2004 when most considered it theoretical...",
  fullBio: "Financial innovator who established the world's first cryptocurrency regulatory task force in 2019. Pioneered AI-driven trading strategies in 2004 when most considered it theoretical. As CFO (\"Master of Coin\") at NBX, grew trading volume from 90M to 1.1B NOK and made NBX Europe's first listed crypto exchange. As CEO at AKJ Group, oversaw trading infrastructure supporting $1.6B in traditional and crypto assets while implementing automation that reduced operational overhead by 50%. MSc Finance (NHH). Consistently ahead of industry curves—from quantitative modeling to regulatory frameworks.",
  image: "/lovable-uploads/Torstein-Thinn-Tax-AI-government-consulting-services.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/torstein-thinn-a745552/"
  }
}, {
  name: "Ruben Junger",
  role: "Co-Founder & Web3 Strategist",
  bio: "Web3 strategist specializing in blockchain innovation, product market fit and market growth. He built and led PG Group's Launchpad as CCO overseeing multiple successful NFT collection launches...",
  fullBio: "Web3 strategist specializing in blockchain innovation, product market fit and market growth. He built and led PG Group's Launchpad as CCO overseeing multiple successful NFT collection launches. As Global Head of Web3 at MetaGravity, he shaped enterprise level Web3 strategies together with the C-suite and board members. He has a track record of advising bleeding edge projects from a vertical agnostic approach, whereas the recent focus has been on the convergence of blockchain and Ai with projects like iAgent, Playmind and FlowTrade. \n\nWith expertise in Web3 products, tokenomics, go-to-market strategies, and capital sourcing, Ruben is recognized as a connector and facilitator in the crypto sphere, leveraging his global network of Web3 professionals, investors, and institutions to bridge traditional markets with blockchain innovation.",
  image: "/lovable-uploads/Ruben-Junger-web3-strategic-consultant.jpg",
  social: {
    twitter: "https://x.com/RubenJunger",
    linkedin: "https://www.linkedin.com/in/ruben-junger-480a6a14a/"
  }
}, {
  name: "Magnus Jones",
  role: "Co-Founder & Regulatory Strategist",
  bio: "Magnus Jones is an international thought leader with 10+ years of blockchain and emerging tech experience, including 9 years as Nordic Blockchain & Innovation Lead at EY...",
  fullBio: "Magnus Jones is an international thought leader with 10+ years of blockchain and emerging tech experience, including 9 years as Nordic Blockchain & Innovation Lead at EY. His expertise spans Web3 taxation, legal frameworks, forensic investigations, smart contract reviews, tokenomics, and government strategies.\n\nMagnus created the world's first DeFi/NFT tax guidance with Norwegian authorities and built the first government metaverse tax office. He serves on boards including Nordic Blockchain Association and European Web3 Organization, while acting as Norwegian Ambassador for GBBC, member of INTERPOL's Metaverse Expert Group and UN Counter-Terrorism Crypto Group.\n\nHe lectures at universities and works with entities ranging from startups and DeFi projects to banks and governments.",
  image: "/lovable-uploads/Magnus-Jones-MICA-Regulatory-strategy.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/magnus-jones/",
    twitter: "https://x.com/themagnusjones"
  }
}, {
  name: "Feliks Olko",
  role: "Co-Founder & Technical Strategist",
  bio: "Metaverse infrastructure pioneer who helped scale one of Web3's most ambitious distributed computing platforms for virtual worlds...",
  fullBio: "Metaverse infrastructure pioneer who helped scale one of Web3's most ambitious distributed computing platforms for virtual worlds. As VP of Commercial Development at MetaGravity, revolutionized how developers build large-scale simulations, securing partnerships with AAA game studios and web3 projects. Previously founded BlockVerse Consulting, bringing enterprise-level solutions to blockchain startups. Built strategic partnerships at Hadean (2018-2021) after beginning career in finance at J.P. Morgan. Combines deep technical knowledge with financial acumen, holding a Harvard University Computer Science certification and MSc in Banking from Bayes Business School. Known for translating complex Web3 technologies into practical business applications.",
  image: "/lovable-uploads/Feliks-Olko-Growth-capital-Technical-Strategist.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/feliksolko/"
  }
}];

const Founders = () => {
  // Explicitly set this section to have a light background
  const isDarkBackground = false;
  
  return <section id="founders" className="py-20 bg-gradient-to-b from-[#FEFCFD] to-[#FDF9FC] relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#cb46b3]">Our Team</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-800">The Minds Behind Cointegrity</h3>
          <p className="mt-2 text-gray-600">Our battle-tested team will amplify your impact by simplifying the complexities of digital asset development, enabling you to focus on creating lasting value.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="hover:translate-y-[-4px] transition-all duration-300 h-full"
            >
              <div 
                className="p-6 backdrop-blur-sm text-center rounded-lg bg-white/20 flex flex-col h-full"
                style={{
                  animationDelay: `${0.1 + index * 0.1}s`,
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  willChange: "transform"
                }}
              >
                <div className="relative mb-4 w-24 h-24 overflow-hidden rounded-full mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-10 rounded-full"></div>
                  {founder.name === "Torstein W. Thinn" ? (
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="object-cover w-full h-full" 
                      style={{
                        objectPosition: "center -20%",
                        transform: "scale(1.7)"
                      }} 
                    />
                  ) : founder.name === "Magnus Jones" ? (
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="object-cover w-full h-full" 
                      style={{
                        objectPosition: "center top",
                        transform: "scale(1.5)"
                      }} 
                    />
                  ) : founder.name === "Feliks Olko" ? (
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="absolute w-full h-full object-cover" 
                      style={{
                        top: "30%",
                        transform: "scale(1.8) translateY(0)",
                        objectFit: "cover"
                      }} 
                    />
                  ) : founder.name === "Ruben Junger" ? (
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="absolute w-full h-full object-cover" 
                      style={{
                        top: "40%",
                        transform: "scale(1.75)",
                        objectFit: "cover"
                      }} 
                    />
                  ) : (
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="object-cover w-full h-full" 
                    />
                  )}
                </div>
                <h3 className="text-[clamp(1rem,0.9rem+0.25vw,1.2rem)] font-semibold text-gray-800">{founder.name}</h3>
                <div className="mt-1 text-[clamp(0.75rem,0.7rem+0.15vw,0.875rem)] font-medium text-[#cb46b3]">{founder.role}</div>
                
                <div className="mt-3 flex-grow flex flex-col">
                  <p className="text-[clamp(0.8rem,0.75rem+0.2vw,1rem)] text-gray-600 line-clamp-5">
                    {founder.bio}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-[#cb46b3] hover:text-[#881ec9] mt-auto pt-2 mx-auto inline-flex items-center text-[clamp(0.8rem,0.75rem+0.2vw,1rem)] font-medium relative z-20">
                        Read more
                      </button>
                    </DialogTrigger>
                    <DialogContent className="bg-gradient-to-br from-[#000624] to-[#282c2f] border-none max-w-lg text-white">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-white">
                          {founder.name}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <p className={`text-white/80 ${founder.name === "Magnus Jones" || founder.name === "Ruben Junger" ? "whitespace-pre-line" : ""}`}>
                          {founder.fullBio}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="mt-4 flex space-x-3 justify-center relative z-20">
                  {founder.social.linkedin && <a href={founder.social.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={18} />
                    </a>}
                  {founder.social.twitter && <a href={founder.social.twitter} className="text-gray-500 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      <X size={18} />
                    </a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>;
};

export default Founders;
