import {
  NyerereHeroSection,
  NyerereExperienceSection,
  NyerereItinerarySection,
  NyerereBookingSection,
} from "@/sections/packages/nyerere-fly-in";

export default function NyerereFlySafariPage() {
  return (
    <main>
      <NyerereHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <NyerereExperienceSection />
        <NyerereItinerarySection />
        <NyerereBookingSection />
      </div>
    </main>
  );
}
