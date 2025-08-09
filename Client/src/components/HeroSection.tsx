import React from 'react';
import heroImage from '@/assets/hero-ai-creative.jpg';

/**
 * HeroSection
 * Main landing section with headline, call-to-actions, and hero image.
 */
const HeroSection = () => {

  // Scroll smoothly to the contact section
  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to the "How It Works" section
  const handleScrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ====== Left Column: Headline & Content ====== */}
          <div className="text-center lg:text-left animate-fade-in-up">

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight mb-6">
              <span className="whitespace-nowrap">
                Create High-Converting Ads in <span className="gradient-text">Seconds</span>
              </span>
              <br />
              Powered by AI
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              No design or copywriting needed. Just enter your product and let Growly do the rest.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={handleScrollToContact} className="btn-hero transform hover:scale-105">
                Book Free Demo
              </button>
              <button onClick={handleScrollToHowItWorks} className="btn-secondary">
                See How It Works
              </button>
            </div>

            {/* Social Proof Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 10,000+ marketers worldwide
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 items-center opacity-60">
                <div className="text-2xl font-bold">🚀 Startup Inc</div>
                <div className="text-2xl font-bold">💼 Business Co</div>
                <div className="text-2xl font-bold">🎯 Marketing Pro</div>
              </div>
            </div>
          </div>

          {/* ====== Right Column: Hero Image ====== */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="AI-powered ad creative generation interface with modern dashboard UI in purple and blue gradients"
                className="w-full h-auto rounded-2xl shadow-glow"
              />
              
              {/* Decorative Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-10 animate-pulse delay-700"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
