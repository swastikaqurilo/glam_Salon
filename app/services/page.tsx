
"use client";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Cormorant_Garamond } from "next/font/google";
import BookingModal from "@/components/bookingmodal";

const serviceCategories = [
  {
    title: "HAIR",
    items: "CUT · COLOUR · STYLE · TREAT",
    image: "/images/hairrr.png",
  },
  {
    title: "SKIN",
    items: "CLASSIC · TREAT · GLOW · SIGN",
    image: "/images/careskin.png",
  },
  {
    title: "BEAUTY & GROOMING",
    items: "WAXING · THREADING · MAKEUP",
    image: "/images/beautyngrom.png",
  },
  {
    title: "NAILS",
    items: "MANICURE · PEDICURE · ART",
    image: "/images/nailss.png",
  },
  {
    title: "BODY & WELLNESS",
    items: "RELAX · RESTORE · REJUVENATE",
    image: "/images/bodynwell.png",
  },
  {
    title: "FOR HIM",
    items: "HAIR · GROOMING · SKIN · WELLNESS",
    image: "/images/forhim.png",
  },
];

const detailedServices: {
  title: string;
  subtitle: string;
  groups: {
    title?: string;
    items: string[];
  }[];
}[] = [
  {
    title: "Hair",
    subtitle: "Cut · Colour · Style · Treat",
    groups: [
      {
        items: ["Cuts", "Style", "Color", "Treatment", "Chemical Service", "Wash & Care"],
      },
    ],
  },
  {
    title: "Skin",
    subtitle: "Cleanse · Treat · Renew · Glow",
    groups: [
      {
        items: ["Facials", "Advanced Treatments", "De Tan", "Bleach"],
      },
    ],
  },
  {
    title: "Beauty & Grooming",
    subtitle: "Refine · Define · Enhance",
    groups: [
      {
        title: "Grooming",
        items: [
          "Threading",
          "Waxing",
          "Chocolate / Aloevera Wax",
          "Rica",
          "Red / Brazilian Wax",
          "Jolan / Protein",
          "OXY Bleach",
        ],
      },
      {
        title: "Makeup",
        items: [
          "Flawless Makeup",
          "Mac Makeup",
          "Airbrush Makeup",
          "Celebrity Makeup",
          "Holiday Makeup",
          "Permanent Makeup",
          "Bridal Makeup",
        ],
      },
    ],
  },
  {
    title: "Nails",
    subtitle: "Manicure · Pedicure · Nail Art",
    groups: [
      {
        items: ["Manicure & Pedicure", "Nail Art", "Nailcare", "Extensions"],
      },
    ],
  },
  {
    title: "Body & Wellness",
    subtitle: "Relax · Restore · Rejuvenate",
    groups: [
      {
        items: ["Body Polishing", "Body Massage", "Body Ritual"],
      },
    ],
  },
  {
    title: "For Him",
    subtitle: "Hair · Grooming · Skin · Wellness",
    groups: [
      {
        items: ["Men's Hairs", "Men's Nails", "Men's Skin", "Men's Hand & Feet", "Men's Wellness"],
      },
    ],
  },
];

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#090909] text-[#F6F2EC]">
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

       {/* HERO SECTION */}
      <section className="relative flex min-h-[760px] flex-col justify-center overflow-hidden px-0 py-0 sm:min-h-[680px] sm:px-10 sm:py-16 lg:min-h-screen lg:px-0 lg:py-0">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/services.png')",
      filter: "brightness(1.1)",
    }}
  />

  {/* Overlays */}
  <div className="absolute inset-0 bg-black/25" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/15" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

  {/* Header */}
  <div className="absolute inset-x-0 top-0 z-20">
    <Header onBookClick={() => setIsModalOpen(true)} />
  </div>

  {/* Hero content */}
  <div className="relative z-10 mx-auto flex min-h-full w-full max-w-[1540px] flex-1 items-center px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 md:px-12 lg:items-start lg:px-10 lg:pb-0 lg:pt-[170px] xl:px-12 2xl:px-16">
    <div className="flex w-full max-w-4xl flex-col items-start lg:max-w-[1100px]">

      {/* Label */}
      <style>{`
        @media (max-width: 639px) {
          .hero-badge-text {
            font-family: ${cormorant.style.fontFamily}, serif !important;
            font-weight: 500 !important;
            font-style: italic !important;
            font-size: 20px !important;
            line-height: 1.2 !important;
            letter-spacing: 0.02em !important;
            text-transform: none !important;
          }
        }
      `}</style>

      <div className="mb-6 inline-flex items-center rounded-md border border-[#F1E2CC]/80 px-4 py-2 sm:mb-7 sm:px-4 sm:py-2 lg:mb-7 lg:px-3 lg:py-1.5">
        <span className="hero-badge-text font-heading text-sm italic tracking-wide text-[#E7C988] sm:text-base lg:text-[17px]">
          Services
        </span>
      </div>

      {/* Heading */}
      <style>{`
        @media (max-width: 639px) {
          .hero-h1 {
            font-family: ${cormorant.style.fontFamily}, serif !important;
            font-weight: 600 !important;
            font-style: normal !important;
            font-size: clamp(36px, 8.5vw, 42px) !important;
            line-height: 1.05 !important;
            letter-spacing: -1.12px !important;
            text-transform: none !important;
          }
          .hero-h2 {
            font-family: ${cormorant.style.fontFamily}, serif !important;
            font-weight: 400 !important;
            font-style: normal !important;
            font-size: clamp(27px, 6.5vw, 33px) !important;
            line-height: 1.15 !important;
            letter-spacing: -1.12px !important;
            text-transform: none !important;
            margin-top: 8px !important;
          }
        }
      `}</style>

      <div className={`${cormorant.className} w-full`}>
        <h1
          className="hero-h1 break-words text-[clamp(2.8rem,8vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.025em] text-[#F2E6CB] lg:!text-[104px] lg:!font-normal lg:!leading-[1] lg:!tracking-[-1.12px] lg:!normal-case"
          style={{
            fontVariantLigatures: "common-ligatures",
            textTransform: "none",
          }}
        >
          Everything you need.
        </h1>

        <h2
          className="hero-h2 mt-3 break-words text-[clamp(2.1rem,6.5vw,5rem)] font-normal italic leading-[1.05] tracking-[-0.015em] text-[#C5A059] sm:mt-2 lg:!mt-1 lg:!text-[76px] lg:!font-normal lg:!leading-[1.05] lg:!tracking-[-0.8px] lg:!normal-case lg:!not-italic"
          style={{
            fontVariantLigatures: "common-ligatures",
            textTransform: "none",
          }}
        >
          Thoughtfully considered
        </h2>
      </div>

      {/* Description */}
      <p className="mt-6 w-full max-w-[540px] font-body text-[13px] leading-[1.8] text-white/80 sm:mt-7 sm:text-[15px] sm:leading-[1.9] md:max-w-[700px] md:text-base lg:mt-5 lg:max-w-[1000px] lg:font-heading lg:text-[21px] lg:leading-[1.65]">
        From precision cuts and transformative colour to advanced skin
        treatments, refined grooming and restorative rituals — discover a
        considered collection of services, tailored to you.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:items-center sm:gap-3 lg:mt-14 lg:gap-2.5">
        <a
          href="#categories"
          className="inline-flex w-full min-w-0 max-w-[300px] items-center justify-center gap-2 whitespace-nowrap bg-[#F5EBDE] px-5 py-4 text-[11px] font-bold tracking-[0.1em] !text-black transition-colors hover:bg-[#C5A059] sm:w-auto sm:max-w-none sm:px-7 sm:py-3.5 sm:text-[11px] sm:tracking-[0.14em] lg:min-w-[250px] lg:px-7 lg:py-5 lg:text-[13px] lg:font-medium lg:tracking-[0.12em]"
        >
          EXPLORE SERVICES <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex w-full min-w-0 max-w-[300px] items-center justify-center gap-2 whitespace-nowrap border border-white/60 bg-black/20 px-5 py-4 text-[11px] font-bold tracking-[0.1em] text-white transition-colors hover:border-white/70 hover:bg-white/10 sm:w-auto sm:max-w-none sm:px-7 sm:py-3.5 sm:text-[11px] sm:tracking-[0.14em] lg:min-w-[290px] lg:px-7 lg:py-5 lg:text-[13px] lg:font-medium lg:tracking-[0.12em]"
        >
          BOOK AN APPOINTMENT <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Service categories */}
      <p className="mt-10 pt-0 font-heading text-[12px] italic tracking-[0.04em] text-white/70 sm:mt-16 sm:text-[16px] lg:mt-7 lg:text-[19px]">
        Hair · Skin · Beauty · Nails · Wellness · Men
      </p>

    </div>
  </div>
</section>

      {/* INTRO SECTION */}
      <section className="px-6 py-9 sm:px-10 sm:py-10 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Mobile layout */}
          <div className="sm:hidden">
            <h2 className="font-accent text-[32px] leading-tight tracking-normal text-white">
              More than a service
            </h2>

            <h3 className="mt-0.5 font-heading text-[32px] leading-tight italic tracking-normal text-[#C5A059]">
              A considered experience.
            </h3>

            <p className="mt-4 font-body text-[13px] leading-[1.7] text-white/80">
              From the first consultation to the final detail, every GLAM service is shaped around your needs, your style and how you want to feel when you leave.
            </p>
          </div>

          {/* Desktop layout - unchanged */}
          <div className="hidden sm:grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
            <div className="flex flex-col justify-center">
              <h2 className="font-accent text-4xl normal-case leading-tight tracking-normal text-white sm:text-5xl">
                More than a service
              </h2>
              <h3 className="mt-1 font-heading text-4xl normal-case italic tracking-normal text-[#C5A059] sm:text-5xl">
                A considered experience.
              </h3>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-body text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                From the first consultation to the final detail, every GLAM service is shaped around your needs, your style and how you want to feel when you leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section id="categories" className="px-6 pb-9 sm:px-10 sm:pb-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* MOBILE CATEGORY GRID */}
          <div className="grid grid-cols-3 gap-[3px] sm:hidden">
            {serviceCategories.map((category) => (
              <a
                key={category.title}
                href={`#${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                aria-label={`Explore ${category.title} services`}
                className="group relative aspect-[1.12/1] overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-2">
                  <h3
                    className={`${cormorant.className} text-[11px] leading-tight text-white`}
                  >
                    {category.title}
                  </h3>

                  <p className="mt-1 text-[5px] leading-[1.4] tracking-[0.04em] text-white/90">
                    {category.items}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* DESKTOP CATEGORY STRIP - unchanged */}
          <div className="relative hidden sm:block w-full overflow-hidden rounded-md">
            <img
              src="/images/cta.png"
              alt="GLAM salon service categories"
              className="block h-auto w-full"
            />

            <div className="absolute inset-0 grid grid-cols-6">
              {serviceCategories.map((category) => (
                <a
                  key={category.title}
                  href={`#${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                  aria-label={`Explore ${category.title} services`}
                  className="group relative flex flex-col justify-end overflow-hidden p-1.5 sm:p-2.5"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

                  <div className="relative z-10">
                    <h3
                      className={`${cormorant.className} text-[9px] leading-tight text-white sm:text-[13px] md:text-[15px]`}
                    >
                      {category.title}
                    </h3>

                    <p className="mt-0.5 text-[4px] leading-tight tracking-[0.06em] text-white/90 sm:text-[6px] md:text-[7px]">
                      {category.items}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE LISTS */}
      <section className="px-7 pt-5 pb-20 sm:px-10 sm:pt-24 sm:pb-32 lg:px-16 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-7xl space-y-16 sm:space-y-24">
          {detailedServices.map((service) => (
            <div
              key={service.title}
              id={service.title.toLowerCase().replace(/\s+/g, "-")}
              className="flex flex-col"
            >
              {/* Title + horizontal rule */}
              <div className="flex items-center gap-3 sm:gap-6">
                <h3 className="whitespace-nowrap font-heading text-[30px] font-normal tracking-wide text-[#F6F2EC] normal-case sm:text-[36px] md:text-[40px]">
                  {service.title}
                </h3>
                <div className="h-px w-full flex-1 bg-white/40" />
              </div>

              {/* Subtitle */}
              <p className="mt-1.5 sm:mt-3 text-[19px] sm:text-[10px] font-normal sm:font-medium normal-case sm:uppercase tracking-normal sm:tracking-[0.22em] text-[#f2e6cb]">
                {service.subtitle}
              </p>

              {/* Groups */}
              <div className="mt-7 sm:mt-10 space-y-9 sm:space-y-12">
                {service.groups.map((group, idx) => (
                  <div key={idx}>
                    {group.title && (
                      <h4 className="mb-5 sm:mb-6 font-heading text-[19px] sm:text-[20px] font-normal tracking-wide text-[#F6F2EC] normal-case">
                        {group.title}
                      </h4>
                    )}

                    {/* Service items */}
                    <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:gap-x-8 sm:gap-y-5 sm:grid-cols-3 md:grid-cols-4">
                      {group.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="min-w-0 font-body text-[12px] sm:text-[15px] font-light tracking-wide text-[#C5C1B8] transition-colors hover:text-[#F6F2EC]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
            NEED A LITTLE DIRECTION?
          </p>

          <h2 className="mt-5 font-accent text-[32px] sm:text-5xl md:text-6xl lg:text-[64px] normal-case leading-[1.15] tracking-normal text-[#FFE5B9]">
            YOUR GLAM EXPERIENCE
            <br className="hidden sm:block" /> STARTS HERE.
          </h2>

          <p className="mt-5 sm:mt-6 max-w-3xl font-body text-[13px] sm:text-base leading-relaxed text-white/80">
            Not sure which service is right for you? Our team is here to understand what you need, answer your questions and guide you towards an experience that feels right for you.
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-8 sm:mt-10 inline-flex items-center justify-center gap-3 bg-[#F6F2EC] px-8 py-3.5 text-[10px] font-bold tracking-[0.15em] !text-black transition hover:bg-[#C5A059]"
          >
            TALK TO OUR TEAM <span aria-hidden="true">→</span>
          </button>

          <p className="mt-7 sm:mt-8 font-heading text-base sm:text-lg italic tracking-wide text-white/80">
            Hair · Skin · Beauty · Nails · Wellness · Men
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
