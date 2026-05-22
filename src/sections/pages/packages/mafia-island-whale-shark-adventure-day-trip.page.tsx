import {
  WhaleSharkHeroSection,
  WhaleSharkExperienceSection,
  WhaleSharkItinerarySection,
  WhaleSharkBookingSection,
} from "@/sections/packages/whale-shark";

export default function MafiaWhaleSharkPage() {
  return (
    <main>
      <WhaleSharkHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <WhaleSharkExperienceSection />
        <WhaleSharkItinerarySection />
        <WhaleSharkBookingSection />
      </div>
    </main>
  );
}
