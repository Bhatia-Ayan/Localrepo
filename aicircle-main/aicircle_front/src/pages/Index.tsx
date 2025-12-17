import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ValuePropsSection from "../components/landing/ValuePropsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import FeaturedProjectsSection from "../components/landing/FeaturedProjectsSection";
import CommunitySection from "../components/landing/CommunitySection";
import MarketplaceSection from "../components/landing/MarketplaceSection";
import Footer from "../components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <HowItWorksSection />
        <FeaturedProjectsSection />
        <CommunitySection />
        <MarketplaceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
