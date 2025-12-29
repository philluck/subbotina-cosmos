
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAdvisor from './components/AIAdvisor';
import ServicePage from './components/ServicePage';
import { Service } from './types';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Handle browser back button or navigation
  useEffect(() => {
    const handlePopState = () => {
      setSelectedService(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Simulate navigation in history
    window.history.pushState({ service: service.id }, '');
  };

  const handleBackToHome = () => {
    setSelectedService(null);
    window.history.pushState(null, '');
  };

  return (
    <div className="min-h-screen bg-brand-beige selection:bg-brand-rose selection:text-brand-dark">
      <Navbar onHomeClick={handleBackToHome} />
      
      <main>
        {selectedService ? (
          <ServicePage service={selectedService} onBack={handleBackToHome} />
        ) : (
          <>
            <Hero />
            <About />
            <Services onSelectService={handleSelectService} />
            <Pricing />
            <Reviews />
            <Blog />
            <Contact />
          </>
        )}
      </main>
      
      <Footer />
      <AIAdvisor />
    </div>
  );
};

export default App;
