import {
  HeroSection,
  PackagesSection,
  PillarsSection,
  CurationsSection,
  CollectiveEchoSection,
  GeographySection,
  PostcardsSection,
  TrustSection,
} from "@/sections/landing";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <PackagesSection />
        <PillarsSection />
        <CurationsSection />
        <CollectiveEchoSection />
      </div>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        <GeographySection />
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <PostcardsSection />
        <TrustSection />
      </div>
    </main>
  );
}
