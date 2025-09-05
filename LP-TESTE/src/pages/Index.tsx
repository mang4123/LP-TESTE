import { HeroSection } from "@/components/sintagma/HeroSection";
import ProblemSection from "@/components/sintagma/ProblemSection";
import { VideoSection } from "@/components/sintagma/VideoSection";
import SolutionSection from "@/components/sintagma/SolutionSection";
import HowItWorksSection from "@/components/sintagma/HowItWorksSection";
import BenefitsSection from "@/components/sintagma/BenefitsSection";
import ComparisonSection from "@/components/sintagma/ComparisonSection";
import { SecuritySection } from "@/components/sintagma/SecuritySection";
import TestimonialsSection from "@/components/sintagma/TestimonialsSection";
import { ForWhomSection } from "@/components/sintagma/ForWhomSection";
import { PricingSection } from "@/components/sintagma/PricingSection";
import { FAQSection } from "@/components/sintagma/FAQSection";
import FinalCTASection from "@/components/sintagma/FinalCTASection";
import { Footer } from "@/components/sintagma/Footer";
import Navbar from "@/components/sintagma/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background floating images */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large floating image - top right */}
        <img 
          src="/25@8x.png" 
          alt="" 
          className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 opacity-10 animate-pulse"
          style={{
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        
        {/* Medium floating image - left side */}
        <img 
          src="/9@8x.png" 
          alt="" 
          className="absolute top-1/3 -left-16 w-24 h-24 md:w-36 md:h-36 opacity-15 animate-bounce"
          style={{
            animation: 'float 8s ease-in-out infinite 2s'
          }}
        />
        
        {/* Small floating image - bottom right */}
        <img 
          src="/5@8x.png" 
          alt="" 
          className="absolute bottom-20 right-1/4 w-16 h-16 md:w-24 md:h-24 opacity-20"
          style={{
            animation: 'float 10s ease-in-out infinite 4s'
          }}
        />
        
        {/* Additional scattered images for visual charm */}
        <img 
          src="/25@8x.png" 
          alt="" 
          className="absolute top-2/3 left-10 w-20 h-20 opacity-8"
          style={{
            animation: 'float 12s ease-in-out infinite 1s'
          }}
        />
        
        <img 
          src="/9@8x.png" 
          alt="" 
          className="absolute bottom-1/3 right-10 w-28 h-28 opacity-12"
          style={{
            animation: 'float 7s ease-in-out infinite 3s'
          }}
        />
        
        <img 
          src="/5@8x.png" 
          alt="" 
          className="absolute top-1/2 left-1/3 w-12 h-12 opacity-10"
          style={{
            animation: 'float 9s ease-in-out infinite 5s'
          }}
        />
      </div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content with higher z-index */}
      <div className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <VideoSection />
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="solution">
          <SolutionSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="comparison">
          <ComparisonSection />
        </div>
        <div id="security">
          <SecuritySection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="for-whom">
          <ForWhomSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <FinalCTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
