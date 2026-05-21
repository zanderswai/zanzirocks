import {
  ZanzibarHeroSection,
  ZanzibarOverviewSection,
  ZanzibarExperiencesSection,
  ZanzibarBestTimeSection,
  ZanzibarGallerySection,
  ZanzibarPackagesSection,
} from "@/sections/destinations/zanzibar";

export default function ZanzibarPage() {
  return (
    <main>
      <ZanzibarHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <ZanzibarOverviewSection />
        <ZanzibarExperiencesSection />
        <ZanzibarBestTimeSection />
        <ZanzibarGallerySection />
        <ZanzibarPackagesSection />
      </div>
    </main>
  );
}
