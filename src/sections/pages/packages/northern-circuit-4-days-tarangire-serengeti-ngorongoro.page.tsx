import {
  NorthernCircuitHeroSection,
  NorthernCircuitSection,
  NorthernCircuitItinerarySection,
  NorthernCircuitBookingSection,
} from "@/sections/packages/northern-circuit";

export default function NorthernCircuitPage() {
  return (
    <main>
      <NorthernCircuitHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <NorthernCircuitSection />
        <NorthernCircuitItinerarySection />
        <NorthernCircuitBookingSection />
      </div>
    </main>
  );
}
