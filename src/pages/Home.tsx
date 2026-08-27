import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06090c] text-white flex flex-col selection:bg-[#49E378] selection:text-black">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
    </div>
  );
};
