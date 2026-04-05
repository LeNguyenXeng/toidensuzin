import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ProductSection } from "./components/ProductSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Product Section */}
      <ProductSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
