import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import HistorySection from "@/components/HistorySection";
import TeamSection from "@/components/TeamSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <div id="history">
        <HistorySection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
