import { HeroSection } from "@/components/home/HeroSection";
import { GlobalSearch } from "@/components/home/GlobalSearch";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { SuccessStories } from "@/components/home/SuccessStories";
import { FAQSection } from "@/components/home/FAQSection";
import { MacbookSection } from "@/components/home/MacbookSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <GlobalSearch />
      <StatsSection />
      <FeaturedSection />
      <MacbookSection />
      <SuccessStories />
      <FAQSection />
    </div>
  );
}
