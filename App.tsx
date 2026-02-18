import React from 'react';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Solution from './components/Solution';
import Comparison from './components/Comparison';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Programs from './components/Programs';
import Testimonial from './components/Testimonial';
import Locations from './components/Locations';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <TopBanner />
      <Reviews />
      <Solution />
      <Comparison />
      <Process />
      <FAQ />
      <Programs />
      <Testimonial />
      <Locations />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;