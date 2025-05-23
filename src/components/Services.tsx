import React from "react";
import Container from "./ui/Container";
import ServiceCard from "./services/ServiceCard";
import ServicesCTA from "./services/ServicesCTA";
import { services } from "./services/servicesData";
const Services = () => {
  const isDarkBackground = false;
  return <section id="services" className="py-20 bg-gradient-to-b from-[#FEFCFD] to-[#FDF9FC] relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider font-medium text-[#cb46b3]">Enterprise Blockchain Services &amp; Web3 Solutions</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-800">Tailored Implementation Strategies for Complex Organizations</h3>
          <p className="mt-2 text-gray-600">Cointegrity provides specialized Web3 consulting and blockchain implementation for Government, Corporate, and emerging Web3 sectors. We combine personalized expert collaboration with AI-enhanced delivery methods, helping organizations navigate digital transformation efficiently while ensuring regulatory compliance and technical scalability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} items={service.items} color={service.color} isDarkBackground={isDarkBackground} />)}
        </div>

        <ServicesCTA />
      </Container>
    </section>;
};
export default Services;