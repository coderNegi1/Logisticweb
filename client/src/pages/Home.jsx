import React from 'react';
import Hero from './Hero';
import AboutSection from '../components/AboutSection';
import Facts from './Facts';
import ServicesSection from '../components/ServicesSection'
import Feature from './Feature';
import Quote from './Quote';
import TeamSection from './TeamSection';
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Facts />
     <ServicesSection />
      <Feature />
      <Quote />
      <TeamSection />
      {/* Other sections */}
    </div>
  );
};

export default Home;
