import BenefitsSection from "@/components/Beneficts/BenefictsSection";
import ChallengeSelector from "@/components/challenge-selector/ChallengeSelector";
import CryptoCarousel from "@/components/cryptoCarousel/CryptoCarousel";
import PortadaSection from "@/components/portada/PortadaSection";
import StepsSection from "@/components/steps/StepsSection";
import RewardsSection from "@/components/rewards/RewardsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import CommunitySection from "@/components/community/CommunitySection";

export default function Home() {
  return (
    <div className=" grid place-content-center overflow-x-hidden ">
      <div className="space-y-4">
        <PortadaSection/>
        <CryptoCarousel/>
        <StepsSection />
        <BenefitsSection />
        <ChallengeSelector />
        <RewardsSection />
        <TestimonialsSection />
        <FAQSection />
        <CommunitySection />
      </div>
    </div>
  );
}
