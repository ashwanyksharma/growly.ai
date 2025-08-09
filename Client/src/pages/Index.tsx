import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import KeyFeatures from '@/components/KeyFeatures';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <KeyFeatures />
        <LeadCaptureForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
