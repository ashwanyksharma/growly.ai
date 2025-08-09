import React from 'react';
import { Brain, Target, FileImage, Zap, Globe, BarChart3 } from 'lucide-react';

/**
 * I Used lucide react for icons
 * KeyFeatures Component
 * Highlights the main features of the Growly platform with icons, short descriptions, and a call-to-action.
 */
const KeyFeatures = () => {
  // List of features with icons, descriptions, and gradients
  const featureList = [
    {
      icon: Brain,
      title: "AI Creative Generator",
      description: "Quickly create ad creatives tailored to your brand and audience with our next-gen AI.",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Headline Optimizer",
      description: "Generate attention-grabbing, conversion-focused headlines backed by marketing psychology.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileImage,
      title: "Multi-Format Export",
      description: "Export campaigns in formats ready for Facebook, Google, Instagram, LinkedIn, and more.",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Build entire campaigns in seconds — cut production time by 90% or more.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Reach global audiences with ads available in 50+ languages.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/*Section Header*/}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for <span className="gradient-text">Modern Marketers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tools to help you design, optimize, and scale your ad campaigns — whether you’re an agency, freelancer, or growing business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={index}
                className="card-feature group animate-fade-in-up hover:shadow-lg hover:scale-[1.02] transition-all duration-300 rounded-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FeatureIcon size={28} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/*Bottom Call-To-Action*/}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary/20 to-background p-8 rounded-2xl border border-border">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Ad Creation Process?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of marketers already boosting their ROI with Growly's AI-powered ad generation.
            </p>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-hero hover:scale-105 transition-transform duration-200"
            >
              Get Started Free
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;
