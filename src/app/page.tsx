import BenefitsSection from "@/components/Beneficts/BenefictsSection";
import ChallengeSelector from "@/components/challenge-selector/ChallengeSelector";
import CryptoCarousel from "@/components/cryptoCarousel/CryptoCarousel";
import PortadaSection from "@/components/portada/PortadaSection";
import StepsSection from "@/components/steps/StepsSection";
import RewardsSection from "@/components/rewards/RewardsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import CommunitySection from "@/components/community/CommunitySection";
import SectionReveal from "@/components/common/SectionReveal";
import HashScroll from "@/components/common/HashScroll";

export default function Home() {
  return (
    <main className="w-full">
      <div className="space-y-8">
        <HashScroll />
        <SectionReveal>
          <PortadaSection/>
        </SectionReveal>
        <SectionReveal>
          <CryptoCarousel/>
        </SectionReveal>
        <SectionReveal>
          <StepsSection />
        </SectionReveal>
        <SectionReveal>
          <BenefitsSection />
        </SectionReveal>
        <SectionReveal>
          <ChallengeSelector />
        </SectionReveal>
        <SectionReveal>
          <RewardsSection />
        </SectionReveal>
        <SectionReveal>
          <TestimonialsSection />
        </SectionReveal>
        <SectionReveal>
          <FAQSection />
        </SectionReveal>
        <SectionReveal>
          <CommunitySection />
        </SectionReveal>
      </div>
    </main>
  );
}
