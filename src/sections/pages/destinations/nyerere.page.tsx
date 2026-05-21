import {
  NyerereHeroSection,
  NyerereRiverSafariSection,
  NyerereWildlifeSection,
  NyerereOverviewSection,
  NyerereGallerySection,
  NyererePackagesSection,
} from "@/sections/destinations/nyerere";

export default function NyererePage() {
  return (
    <main>
      <NyerereHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <NyerereRiverSafariSection />
        <NyerereWildlifeSection />
        <NyerereOverviewSection />
        <NyerereGallerySection />
        <NyererePackagesSection />
      </div>
    </main>
  );
}
