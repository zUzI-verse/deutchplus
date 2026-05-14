import supabase from "@/services/supabase/supabaseClient";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import RoadmapSection from "./components/RoadmapSection";

const HomePage = () => {
  console.log(supabase);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <RoadmapSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};
export default HomePage;
