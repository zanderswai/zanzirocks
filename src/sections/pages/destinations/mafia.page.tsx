import {
  MafiaHeroSection,
  MafiaWhaleSharkSection,
  MafiaItinerarySection,
  MafiaGallerySection,
  MafiaPackageSection,
} from "@/sections/destinations/mafia";

export default function MafiaPage() {
  return (
    <main>
      <MafiaHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <MafiaWhaleSharkSection />
        <MafiaItinerarySection />
        <MafiaGallerySection />
        <MafiaPackageSection />
      </div>
    </main>
  );
}
