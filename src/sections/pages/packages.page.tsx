import {
  PackagesHeroSection,
  PackagesGridSection,
} from "@/sections/packages/landing";

export default function PackagesPage() {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <PackagesHeroSection />
        <PackagesGridSection />
      </div>
    </main>
  );
}
