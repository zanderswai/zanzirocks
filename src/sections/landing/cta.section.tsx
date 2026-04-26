import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RiWhatsappLine } from "@remixicon/react";

export default function CTASection() {
  return (
    <section className="mb-32 md:mb-48 py-48 relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 z-0">
        <img
          alt="Sunset Beach"
          className="w-full h-full object-cover scale-110 blur-[2px]"
          src="https://images.unsplash.com/photo-1766402221171-44041c8293b7?q=80&w=2670&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-surface/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-6xl md:text-7xl font-headline font-bold text-white mb-10 leading-tight">
          Define your <br />
          <span className="text-primary italic font-normal">own legacy.</span>
        </h2>
        <p className="text-on-surface-variant text-lg mb-16 max-w-xl mx-auto font-light">
          The journey of a lifetime begins with a single conversation. Let our curators craft your next masterpiece.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            asChild
            className="bg-primary text-on-primary hover:bg-primary-container px-12 py-5 h-auto font-bold text-sm tracking-widest uppercase shadow-xl shadow-primary/10 hover:scale-105 transition-transform"
          >
            <Link to="/contact">Start Your Journey</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white px-12 py-5 h-auto font-bold text-sm tracking-widest uppercase gap-2"
          >
            <a href="https://wa.me/255777415192" target="_blank" rel="noopener noreferrer">
              <RiWhatsappLine data-icon="inline-start" />
              WhatsApp Our Team
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
