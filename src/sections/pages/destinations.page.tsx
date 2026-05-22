import {
  DestinationsHeroSection,
  DestinationsGridSection,
} from "@/sections/destinations/landing";

export default function DestinationsPage() {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <DestinationsHeroSection />
        <DestinationsGridSection />
      </div>
    </main>
  );
}
