import {
  SerengetiNgorongoroHeroSection,
  SerengetiNgorongoroHighlightsSection,
  SerengetiNgorongoroItinerarySection,
  SerengetiNgorongoroBookingSection,
} from "@/sections/packages/serengeti-ngorongoro";

export default function SerengetiNgorongoroPage() {
  return (
    <main>
      <SerengetiNgorongoroHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <SerengetiNgorongoroHighlightsSection />
        <SerengetiNgorongoroItinerarySection />
        <SerengetiNgorongoroBookingSection />
      </div>
    </main>
  );
}
