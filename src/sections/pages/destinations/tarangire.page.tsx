import {
  TarangireHeroSection,
  TarangireElephantsSection,
  TarangireBaobabSection,
  TarangireGallerySection,
  TarangirePackagesSection,
} from "@/sections/destinations/tarangire";

export default function TarangirePage() {
  return (
    <main>
      <TarangireHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <TarangireElephantsSection />
        <TarangireBaobabSection />
        <TarangireGallerySection />
        <TarangirePackagesSection />
      </div>
    </main>
  );
}
