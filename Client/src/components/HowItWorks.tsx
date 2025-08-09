import React from 'react';
import { Upload, Sparkles, Download } from 'lucide-react';

/**
 * HowItWorks Component
 * Displays the 3-step process of using Growly with icons, descriptions, and a call-to-action.
 */
const HowItWorks = () => {
  // Process steps data
  const processSteps = [
    {
      icon: Upload,
      title: "Input Your Product",
      description:
        "Enter your product details, target audience, and campaign goals. Our simple interface makes setup quick and painless.",
      stepNumber: "01"
    },
    {
      icon: Sparkles,
      title: "AI Magic Happens",
      description:
        "Our advanced AI generates dozens of ad creatives, headlines, and copy variations optimized for conversions.",
      stepNumber: "02"
    },
    {
      icon: Download,
      title: "Download & Launch",
      description:
        "Export ads in multiple formats for Facebook, Google, Instagram, and more. Launch campaigns instantly.",
      stepNumber: "03"
    }
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-r from-secondary/20 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ====== Section Header ====== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How <span className="gradient-text">Growly</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined 3-step process that takes you from concept to campaign
            in minutes, not hours.
          </p>
        </div>

        {/* ====== Steps Grid ====== */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in-up group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Step Card */}
                <div className="card-step text-center p-6 pt-12 bg-white/90 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300">
                  
                  {/* Step Number Bubble */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <StepIcon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow - only between steps on desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-primary opacity-30"></div>
                    <div className="absolute -right-1 -top-1 w-3 h-3 border-t-2 border-r-2 border-primary rotate-45 opacity-30"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ====== Call To Action ====== */}
        <div className="text-center mt-16">
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-hero hover:scale-105 transition-transform duration-200"
          >
            Start Creating Ads Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
