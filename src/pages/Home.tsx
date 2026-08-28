import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { TrustedCompanies } from '../sections/TrustedCompanies';
import { ServicesSection } from '../sections/ServicesSection';
import { AboutSection } from '../sections/AboutSection';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06090c] text-white flex flex-col selection:bg-[#49E378] selection:text-black">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <TrustedCompanies />
        <ServicesSection />
        <AboutSection />
      </main>
    </div>
  );
};
