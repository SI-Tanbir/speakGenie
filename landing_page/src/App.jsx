
import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import WhySection from './components/sections/WhySection';
import ProgramsSection from './components/sections/ProgramsSection';
import FeaturesSection from './components/sections/FeaturesSection';
import ParentHubSection from './components/sections/ParentHubSection';
import ComparisonSection from './components/sections/ComparisonSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import FinalCTASection from './components/sections/FinalCTASection';
import Footer from './components/layout/Footer';
import TrialModal from './components/forms/TrialModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onStartFreeClick={openModal} />
      <main>
        <Hero onStartFreeClick={openModal} />
        <WhySection />
        <ProgramsSection />
        <FeaturesSection />
        <ComparisonSection />
        <PricingSection onStartFreeClick={openModal} />
        <ParentHubSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection onStartFreeClick={openModal} />
      </main>
      <Footer />
      
      {/* Trial Modal */}
      <TrialModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
