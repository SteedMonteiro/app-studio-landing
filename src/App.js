import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import HowItWorks from './components/HowItWorks';
import FeaturesBenefits from './components/FeaturesBenefits';
import Testimonials from './components/Testimonials';
import FAQPricing from './components/FAQPricing';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MissionVision />
      <HowItWorks />
      <FeaturesBenefits />
      <Testimonials />
      <FAQPricing />
      <Footer />
    </div>
  );
}

export default App;