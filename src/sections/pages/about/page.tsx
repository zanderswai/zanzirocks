import {
  AboutCompanySection,
  AboutTelescopeSection,
  AboutTeamSection,
  AboutSocialSection,
} from "@/sections/about";

export default function AboutPage() {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <AboutCompanySection />
        <AboutTelescopeSection />
        <AboutTeamSection />
        <AboutSocialSection />
      </div>
    </main>
  );
}
