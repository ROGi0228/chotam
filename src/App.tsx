import React from 'react';
import { Hero } from './components/Hero';
import { TourDates } from './components/TourDates';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Hero />
      <TourDates />
      <Footer />
    </div>
  );
}
