import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import PersonalizedSolarSavings from "@/components/PersonalizedSolarSavings";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";

export default function HomePage() {
  return (
    <div style={{paddingTop: '144px'}}>
      <HeroSection />
      <WhySection />
      <HowSection />
      <PersonalizedSolarSavings />
      <AnimatedTestimonials />
    </div>
  );
}
