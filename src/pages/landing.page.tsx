import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroSection from '../components/sections/hero.section';
import PackagesSection from '../components/sections/packages.section';
import PillarsSection from '../components/sections/pillars.section';
import TanzaniaMapSection from '../components/sections/tanzania-map.section';
import CurationsSection from '../components/sections/curations.section';
import CollectiveEchoSection from '../components/sections/collective-echo.section';
import GeographySection from '../components/sections/geography.section';
import PostcardsSection from '../components/sections/postcards.section';
import TrustSection from '../components/sections/trust.section';
import CTASection from '../components/sections/cta.section';

export default function LandingPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      <main>
        <HeroSection />

        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
          <PackagesSection />
          <PillarsSection />
          <TanzaniaMapSection />
          <CurationsSection />
          <CollectiveEchoSection />
          <GeographySection />
          <PostcardsSection />
          <TrustSection />
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
