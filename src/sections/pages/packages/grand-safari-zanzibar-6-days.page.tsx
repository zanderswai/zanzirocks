import {
  GrandSafariHeroSection,
  GrandSafariWorldsSection,
  GrandSafariItinerarySection,
  GrandSafariBookingSection,
} from "@/sections/packages/grand-safari";

export default function GrandSafariPage() {
  return (
    <main>
      <GrandSafariHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <GrandSafariWorldsSection />
        <GrandSafariItinerarySection />
        <GrandSafariBookingSection />
      </div>
    </main>
  );
}
