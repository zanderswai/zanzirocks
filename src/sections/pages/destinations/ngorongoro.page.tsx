import {
  NgorongoroHeroSection,
  NgorongoroCraterSection,
  NgorongoroBigFiveSection,
  NgorongoroGallerySection,
  NgorongoroPackagesSection,
} from "@/sections/destinations/ngorongoro";

export default function NgorongoroPage() {
  return (
    <main>
      <NgorongoroHeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <NgorongoroCraterSection />
        <NgorongoroBigFiveSection />
        <NgorongoroGallerySection />
        <NgorongoroPackagesSection />
      </div>
    </main>
  );
}
