
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
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <ProgramsSection />
        <FeaturesSection />
        <ParentHubSection />
        <ComparisonSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
