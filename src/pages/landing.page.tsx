import {
  HeroSection,
  PackagesSection,
  PillarsSection,
  TanzaniaMapSection,
  CurationsSection,
  CollectiveEchoSection,
  GeographySection,
  PostcardsSection,
  TrustSection,
  CTASection,
} from "@/sections/landing";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        <PackagesSection />
        <PillarsSection />
        <TanzaniaMapSection />
        <CurationsSection />
        <CollectiveEchoSection />
        <GeographySection />
        <PostcardsSection />
        <TrustSection />
        <CTASection />
      </div>
    </main>
  );
}
