import {
  SerengetiHeroSection,
  SerengetiMigrationSection,
  SerengetiPredatorsSection,
  SerengetiGallerySection,
  SerengetiPackagesSection,
} from "@/sections/destinations/serengeti";

export default function SerengetiPage() {
  return (
    <main>
      <SerengetiHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <SerengetiMigrationSection />
        <SerengetiPredatorsSection />
        <SerengetiGallerySection />
        <SerengetiPackagesSection />
      </div>
    </main>
  );
}
