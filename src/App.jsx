import React from 'react';
import Companies from './components/Companies';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Services2 from './components/Services2';
import Testimonial from './components/Testimonial';
import Trial from './components/Trial';
import Trusted from './components/Trusted';
function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Companies />
        <Service />
        <Trusted />
        <Services2 />
        <Testimonial />
        <Pricing />
        <FAQ />
        <Trial />
      </main>
      <Footer />
    </div>
  );
};

export default App;
