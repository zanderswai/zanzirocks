import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiArrowRightLine, RiCheckLine, RiSendPlaneLine } from "@remixicon/react";

const PACKAGE_OPTIONS = [
  { value: "grand-safari-zanzibar-6-days", label: "Grand Safari & Zanzibar — 6 Days" },
  { value: "northern-circuit-4-days", label: "Northern Circuit — 4 Days" },
  { value: "serengeti-ngorongoro-3-days", label: "Serengeti & Ngorongoro — 3 Days" },
  { value: "nyerere-fly-in-3-days", label: "Nyerere Fly-In Safari — 3 Days" },
  { value: "mafia-whale-shark", label: "Mafia Island Whale Shark Day Trip" },
  { value: "custom", label: "Custom itinerary" },
  { value: "not-sure", label: "Not sure yet — need recommendations" },
];

const GROUP_OPTIONS = [
  { value: "solo", label: "Solo (1)" },
  { value: "couple", label: "Couple (2)" },
  { value: "small", label: "Small group (3–6)" },
  { value: "large", label: "Large group (7+)" },
];

type FormState = "idle" | "submitting" | "success";

export default function ContactFormSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [packageInterest, setPackageInterest] = useState("");
  const [groupSize, setGroupSize] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <section className="mb-24 md:mb-32">
        <div className="rounded-2xl border border-primary/20 bg-surface-container p-10 md:p-16 flex flex-col items-center text-center gap-6">
          <div className="size-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <RiCheckLine className="size-6 text-primary" />
          </div>
          <div>
            <h2 className="font-headline text-3xl md:text-4xl mb-3">
              Message received.
            </h2>
            <p className="text-on-surface-variant font-light text-sm leading-relaxed max-w-sm">
              We'll review your trip details and get back to you shortly. Expect
              a reply within 24 hours — often much sooner via WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/+255750908776"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
          >
            Follow up on WhatsApp <RiArrowRightLine className="size-3" />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-24 md:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-outline-variant/10 bg-surface-container overflow-hidden"
        >
          <div className="px-8 md:px-10 py-8 border-b border-outline-variant/10">
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-1">
              Enquiry form
            </p>
            <h2 className="font-headline text-2xl md:text-3xl">
              Tell us about your trip
            </h2>
          </div>

          <div className="px-8 md:px-10 py-8 flex flex-col gap-6">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                  Full name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="bg-surface-container-high border-outline-variant/20 focus-visible:border-primary/50 focus-visible:ring-primary/20 placeholder:text-on-surface-variant/30 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="bg-surface-container-high border-outline-variant/20 focus-visible:border-primary/50 focus-visible:ring-primary/20 placeholder:text-on-surface-variant/30 text-sm"
                />
              </div>
            </div>

            {/* Travel dates + Group size row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="travel-dates" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                  Travel dates (approximate)
                </Label>
                <Input
                  id="travel-dates"
                  name="travelDates"
                  placeholder="e.g. July 2026, 10 nights"
                  className="bg-surface-container-high border-outline-variant/20 focus-visible:border-primary/50 focus-visible:ring-primary/20 placeholder:text-on-surface-variant/30 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                  Group size
                </Label>
                <Select value={groupSize} onValueChange={setGroupSize}>
                  <SelectTrigger className="bg-surface-container-high border-outline-variant/20 focus:border-primary/50 focus:ring-primary/20 text-sm">
                    <SelectValue placeholder="Select group size" />
                  </SelectTrigger>
                  <SelectContent className="bg-surface-container border-outline-variant/20">
                    {GROUP_OPTIONS.map((opt, i) => (
                      <SelectItem key={i} value={opt.value} className="text-sm">
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Package interest */}
            <div className="flex flex-col gap-2">
              <Label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                Package interest
              </Label>
              <Select value={packageInterest} onValueChange={setPackageInterest}>
                <SelectTrigger className="bg-surface-container-high border-outline-variant/20 focus:border-primary/50 focus:ring-primary/20 text-sm">
                  <SelectValue placeholder="Which package catches your eye?" />
                </SelectTrigger>
                <SelectContent className="bg-surface-container border-outline-variant/20">
                  {PACKAGE_OPTIONS.map((opt, i) => (
                    <SelectItem key={i} value={opt.value} className="text-sm">
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                Anything else we should know?
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Special interests, dietary requirements, celebration, flexibility on dates..."
                rows={5}
                className="bg-surface-container-high border-outline-variant/20 focus-visible:border-primary/50 focus-visible:ring-primary/20 placeholder:text-on-surface-variant/30 text-sm resize-none"
              />
            </div>
          </div>

          <div className="px-8 md:px-10 py-6 border-t border-outline-variant/10 flex items-center justify-between gap-4">
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/30 max-w-[200px] leading-relaxed">
              We reply within 24h, usually much sooner
            </p>
            <Button
              type="submit"
              disabled={formState === "submitting"}
              className="bg-primary text-on-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-xs px-7 gap-2 shrink-0"
            >
              {formState === "submitting" ? (
                "Sending..."
              ) : (
                <>
                  Send Enquiry <RiSendPlaneLine className="size-3.5" />
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Side info */}
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl border border-outline-variant/10 bg-surface-container p-7">
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-4">
              What happens next
            </p>
            <div className="flex flex-col gap-5">
              {[
                {
                  step: "01",
                  title: "We review your enquiry",
                  desc: "Alexander or Divine personally reads every message.",
                },
                {
                  step: "02",
                  title: "We send a tailored proposal",
                  desc: "A route, timing, and cost built around your dates and interests.",
                },
                {
                  step: "03",
                  title: "We refine until it's right",
                  desc: "Unlimited adjustments until the itinerary feels exactly right.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-headline text-primary/40 text-xs leading-none pt-0.5 shrink-0 w-6">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface mb-1">
                      {item.title}
                    </p>
                    <p className="text-on-surface-variant text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-outline-variant/10" />

          <div className="rounded-2xl border border-outline-variant/10 bg-surface-container p-7">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary font-label uppercase tracking-widest text-[9px] mb-4"
            >
              Best time to visit
            </Badge>
            <div className="flex flex-col gap-3">
              {[
                { months: "Jul – Oct", note: "Dry season · Great Migration peak" },
                { months: "Jan – Mar", note: "Green season · Calving in Ndutu" },
                { months: "Jun & Nov", note: "Shoulder season · Fewer crowds" },
              ].map((period, i) => (
                <div key={i} className="flex items-start justify-between gap-3">
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface shrink-0">
                    {period.months}
                  </span>
                  <span className="text-on-surface-variant text-[11px] font-light text-right">
                    {period.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
