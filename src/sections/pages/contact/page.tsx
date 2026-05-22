import {
  ContactHeroSection,
  ContactFormSection,
  ContactChannelsSection,
} from "@/sections/contact";

export default function ContactPage() {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <ContactHeroSection />
        <ContactFormSection />
        <ContactChannelsSection />
      </div>
    </main>
  );
}
