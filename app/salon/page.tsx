"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BookingModal from "@/components/bookingmodal";

const EXPERIENCE_STEPS = [
  {
    title: "ARRIVE",
    lead: "Feel welcomed.",
    text: "Take a breath, settle in and let us take care of the rest.",
    icon: [
      "M13 4h3a2 2 0 0 1 2 2v14",
      "M2 20h3",
      "M13 20h9",
      "M10 12h.01",
      "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
    ],
  },
  {
    title: "CONSULT",
    lead: "Start with a conversation.",
    text: "We take the time to understand what you want before we begin.",
    icon: [
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      "M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0",
      "M22 21v-2a4 4 0 0 0-3-3.87",
      "M16 3.13a4 4 0 0 1 0 7.75",
    ],
  },
  {
    title: "EXPERIENCE",
    lead: "Let our artists do what they do best.",
    text: "Skilled hands, considered products and attention to every detail.",
    icon: [
      "M3 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
      "M3 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
      "M20 4 8.12 15.88",
      "M14.47 14.48 20 20",
      "M8.12 8.12 12 12",
    ],
  },
  {
    title: "REVEAL",
    lead: "See the difference.",
    text: "Leave feeling refreshed, confident and unmistakably you.",
    icon: [
      "M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0",
      "M8 14s1.5 2 4 2 4-2 4-2",
      "M9 9h.01",
      "M15 9h.01",
    ],
  },
];

const WHY_GLAM_CARDS = [
  {
    title: "LISTEN FIRST",
    text: "We understand what you're looking for before recommending what comes next",
    icon: [
      "M7 9a4 4 0 0 0 0 6",
      "M4 7a7 7 0 0 0 0 10",
      "M13 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
    ],
  },
  {
    title: "EXPERT HANDS",
    text: "Our artists combine technical expertise with an eye for individuality.",
    icon: [
      "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",
      "m7 20 1.6 1.4c.3.4.8.6 1.4.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
      "m2 15 6 6",
      "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",
    ],
  },
  {
    title: "QUALITY MATTERS",
    text: "We choose products and techniques with care, because the details make a difference.",
    icon: [
      "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    ],
  },
  {
    title: "YOUR EXPERIENCE",
    text: "No two people are the same. Your experience shouldn't feel one-size-fits-all.",
    icon: [
      "M12 4h.01", "M17.7 6.3h.01", "M20 12h.01", "M17.7 17.7h.01",
      "M12 20h.01", "M6.3 17.7h.01", "M4 12h.01", "M6.3 6.3h.01",
    ],
  },
];

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export default function SalonPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#090909] text-[#F6F2EC]">
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
            
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col justify-center px-0 py-0 sm:px-10 sm:py-12 lg:px-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/salon.png')" }}
        />

        {/* LIGHTER OVERLAYS to make the image more visible */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/80 via-[#090909]/40 to-transparent" />

        {/* Header */}
        <div className="absolute inset-x-0 top-0 z-20">
          <Header onBookClick={() => setIsModalOpen(true)} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-5 pb-14 pt-20 sm:px-10 sm:pb-16 sm:pt-32 lg:px-16 lg:pt-36">
          <div className="max-w-2xl">
            <div className={cormorant.className}>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center rounded-md border border-[#F1E2CC]/60 bg-black/20 px-3.5 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
                <span
                  className="text-[16px] text-[#E7C988]"
                  style={{
                    fontWeight: 500,
                    fontStyle: "italic",
                    textTransform: "none",
                    letterSpacing: "0.02em",
                  }}
                >
                  GLAM Salon
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-[48px] leading-[1.02] text-[#F6F2EC] sm:text-[64px] md:text-[80px] lg:text-[96px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "normal",
                  textTransform: "none",
                  letterSpacing: "-0.01em",
                  wordSpacing: "0.05em",
                  fontVariantLigatures: "common-ligatures discretionary-ligatures",
                }}
              >
                Your time.
                <br />
                Your space.
                <br />
                Your <span className="text-[#C5A059]">GLAM.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-lg font-body text-[13px] leading-[1.8] text-white/90 sm:mt-6 sm:text-base sm:leading-relaxed">
              From precision hairdressing and considered colour to advanced skin care, refined grooming and restorative wellness, discover a complete range of services designed around you.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex w-full max-w-[260px] items-center justify-center bg-[#F5EBDE] px-5 py-3.5 text-[11px] font-bold tracking-[0.12em] !text-black transition hover:bg-[#C5A059] sm:w-auto sm:max-w-none sm:px-8 sm:text-[10px] sm:tracking-[0.15em]"
              >
                CONTACT US
              </button>
              <a
                href="#space"
                className="inline-flex w-full max-w-[260px] items-center justify-center border border-white/40 bg-black/20 px-5 py-3.5 text-[11px] font-bold tracking-[0.12em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10 sm:w-auto sm:max-w-none sm:px-8 sm:text-[10px] sm:tracking-[0.15em]"
              >
                EXPLORE SPACE
              </a>
            </div>

            {/* Service categories */}
            <p className="mt-24 font-heading text-[13px] italic tracking-wide text-white/80 sm:mt-12 sm:text-lg">
              Hair · Skin · Beauty · Nails · Wellness · Men
            </p>
          </div>
        </div>
      </section>


      {/* THE GLAM APPROACH SECTION */}
      <section className="relative w-full overflow-hidden bg-black">

       {/* RESPONSIVE BACKGROUND IMAGES */}
      <picture className="absolute inset-0 z-0 block h-full w-full">
        {/* Mobile image */}
        <source
          media="(max-width: 767px)"
          srcSet="/images/beauty_mobile.png"
        />

        {/* Desktop image */}
        <img
          src="/images/beauty.png"
          alt="Hair washing at GLAM salon"
          className="h-full w-full object-cover object-left"
        />
      </picture>

      {/* Mobile image blending */}
      <div className="absolute inset-x-0 top-[22%] z-[2] h-[18%] bg-gradient-to-b from-black/80 via-black/30 to-transparent md:hidden" />

      {/* Desktop overlays */}
      <div className="absolute inset-0 z-[1] hidden bg-gradient-to-r from-transparent via-black/60 to-black md:block" />

      <div className="absolute inset-0 z-[1] hidden bg-gradient-to-r from-transparent from-35% via-black/70 via-60% to-black to-80% md:block" />
      <div
          className="
            relative z-10 mx-auto grid
            min-h-[620px] max-w-[1600px]
            grid-cols-1 items-start
            px-6 pt-7 pb-0
            sm:px-10
            md:min-h-[640px] md:grid-cols-12
            md:items-center md:py-20
            lg:min-h-[680px]
          "
        >

          <div className="
            w-full text-right
            md:col-span-5 md:col-start-8 md:text-left
            xl:col-span-5 xl:col-start-8
          ">

            <div className={cormorant.className}>
              {/* Eyebrow */}
              <p
                className="text-[25px] leading-tight text-[#EFE3C8] sm:text-[20px] md:text-[20px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  textTransform: "none",
                  letterSpacing: "0.02em",
                }}
              >
                THE GLAM APPROACH
              </p>

              {/* Heading */}
              <h2
                className="
                  mt-3 text-[45px] leading-[0.98]
                  text-[#F6F2EC]
                  sm:text-[56px] md:mt-5 md:text-[56px]
                  lg:text-[68px]
                "
                style={{
                  fontWeight: 500,
                  fontStyle: "normal",
                  textTransform: "none",
                  letterSpacing: "-0.01em",
                  wordSpacing: "0.05em",
                  fontVariantLigatures: "common-ligatures discretionary-ligatures",
                }}
              >
                Beauty should feel
                <br />
                <span className="text-[#B8935A] italic">
                  personal.
                </span>
              </h2>
            </div>

            {/* Description */}
            <p
              className="
                mt-9 w-full
                font-body text-[14px] leading-[1.5]
                text-white/90
                sm:mt-8 sm:max-w-md sm:text-[15px] sm:leading-[1.9]
                md:ml-0 md:max-w-[540px]
              "
            >
              GLAM is more than a place to get ready. It's a space to pause, reset
              and be looked after. From the way we're greeted to the way every
              service is delivered, we've created an experience that feels
              considered, comfortable and entirely yours.
            </p>

            {/* Desktop link */}
            <div className={cormorant.className}>
              <a
                href="#approach"
                className="
                  mt-10 hidden text-[18px] text-white/75
                  transition hover:text-[#C5A059]
                  md:inline-block
                "
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  textTransform: "none",
                  letterSpacing: "0.02em",
                }}
              >
                DISCOVER OUR APPROACH
              </a>
            </div>

          </div>
        </div>
      </section>

        {/* THE SPACE SECTION */}   
      <section
        id="space"
        className="relative w-full overflow-hidden bg-black text-[#F6F2EC]"
      >

{/* Mobile background */}
<picture className="absolute inset-0 z-0 block lg:hidden">
  <img
    src="/images/designed_mobile.png"
    alt=""
    className="h-full w-full object-cover object-center"
  />
</picture>

{/* Desktop background */}
<div
  className="absolute inset-0 z-0 hidden bg-cover bg-right bg-no-repeat lg:block"
  style={{
    backgroundImage: "url('/images/designed.png')",
  }}
/>

{/* Mobile overlay */}
<div className="absolute inset-0 z-[1] bg-black/45 lg:hidden" />

{/* Desktop overlay */}
<div className="absolute inset-0 z-[1] hidden bg-gradient-to-r from-black from-30% via-black/75 via-50% to-transparent to-85% lg:block" />

<div className="absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
<div className="relative z-10 mx-auto flex min-h-[710px] max-w-[1600px] flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:min-h-[750px] lg:px-20 lg:py-20">
          {/* Heading and description */}
          <div className="max-w-xl">
            <div className={cormorant.className}>
              <p
                className="text-[18px] text-[#F2E6CB] sm:text-[20px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  letterSpacing: "0.02em",
                }}
              >
                THE SPACE
              </p>

              <h2
                className="mt-4 text-[43px] leading-[1.05] text-[#F6F2EC] sm:text-[56px] lg:text-[68px]"
                style={{
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  wordSpacing: "0.05em",
                  fontVariantLigatures: "common-ligatures discretionary-ligatures",
                }}
              >
                Designed to make
                <br />
                <span className="text-[#B8935A]">
                  <span className="italic">you feel at ease.</span>
                </span>
              </h2>
            </div>

            <p className="mt-7 max-w-md font-body text-[14px] leading-[1.6] text-white/85 sm:mt-8 sm:text-[15px] sm:leading-[1.9]">
              Warm materials. Thoughtful lighting. Comfortable corners. Private
              moments. Every detail of GLAM has been considered to create a salon
              experience that feels elevated without ever feeling intimidating.
            </p>

            <div className={cormorant.className}>
              <a
                href="#space"
                className="mt-8 inline-block text-[16px] italic text-white/75 transition hover:text-[#C5A059] sm:mt-10 sm:text-[18px]"
              >
                DISCOVER OUR APPROACH
              </a>
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-1 grid max-w-[680px] grid-cols-1 gap-3 sm:mt-6 lg:grid-cols-2 lg:gap-4">
            {[
              {
                title: "Arrive",
                text: "A warm welcome from the moment you walk in.",
                icon: "M15 19l-7-7 7-7",
              },
              {
                title: "Experience",
                text: "Spaces created for focused, personal attention.",
                icon: "M4 6h16M4 12h16M4 18h16",
              },
              {
                title: "Unwind",
                text: "A calm environment designed around your comfort.",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              },
              {
                title: "Leave",
                text: "Feeling refreshed, confident and completely yourself.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex min-h-[51px] w-full max-w-[245px] items-center gap-3 rounded-xl border border-white/10 bg-[#30251D]/90 px-3 py-2.5 backdrop-blur-sm sm:max-w-[300px] sm:px-4 sm:py-3 md:max-w-none"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-[#C5A059] sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={card.icon}
                  />
                </svg>

                <div className="min-w-0">
                  <h4
                    className={`${cormorant.className} text-[12px] uppercase leading-tight text-[#C5A059] sm:text-[14px]`}
                    style={{ fontWeight: 500, letterSpacing: "0.02em" }}
                  >
                    {card.title}
                  </h4>

                  <p className="mt-0.5 font-body text-[9px] leading-[1.4] text-white/85 sm:text-[11px]">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* THE EXPERIENCE SECTION */}
        <section className="w-full bg-black px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            {/* Heading */}
            <div className={`${cormorant.className} text-center`}>
              <p
                className="text-[13px] text-[#D9BF7E] sm:text-[22px] lg:text-[24px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                The Experience
              </p>

              <h2
                className="mt-3 text-[30px] leading-[1.05] text-[#F6F2EC] sm:mt-6 sm:text-[60px] lg:text-[80px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "normal",
                  textTransform: "none",
                  letterSpacing: "-0.01em",
                  wordSpacing: "0.05em",
                  fontVariantLigatures: "common-ligatures discretionary-ligatures",
                }}
              >
                From the moment
                <br />
                <span className="text-[1.2em] text-[#B8935A]">you arrive.</span>
              </h2>
            </div>

            {/* MOBILE TIMELINE */}
            <div className="mt-14 flex flex-col items-center lg:hidden">
              {EXPERIENCE_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="flex w-full flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#B8935A]/40 bg-black shadow-[0_0_30px_rgba(184,147,90,0.18)]">
                    <svg
                      className="h-[19px] w-[19px] text-[#B8935A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {step.icon.map((d, i) => (
                        <path key={i} d={d} />
                      ))}
                    </svg>
                  </div>

                  {/* Title */}
                  <h3
                    className={`${cormorant.className} mt-2 text-[15px] leading-tight text-[#B8935A]`}
                    style={{
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Lead */}
                  <p className="mt-1 font-body text-[12px] leading-tight text-white">
                    {step.lead}
                  </p>

                  {/* Description */}
                  <p className="mt-1 max-w-[320px] px-2 font-body text-[9px] leading-relaxed text-white/85">
                    {step.text}
                  </p>

                  {/* Vertical gold connector */}
                  {index !== EXPERIENCE_STEPS.length - 1 && (
                    <div className="my-4 h-10 w-px bg-gradient-to-b from-[#B8935A]/80 to-[#B8935A]/30" />
                  )}
                </div>
              ))}
            </div>

            {/* DESKTOP TIMELINE — ORIGINAL LAYOUT */}
            <div className="relative mt-16 hidden lg:block lg:mt-24">

              {/* Horizontal connecting line */}
              <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[90px] h-px bg-gradient-to-r from-transparent via-[#B8935A]/70 to-transparent" />

              <div className="grid grid-cols-4 gap-4">
                {EXPERIENCE_STEPS.map((step) => (
                  <div
                    key={step.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#B8935A]/40 bg-black shadow-[0_0_40px_rgba(184,147,90,0.25)]">
                      <svg
                        className="h-[30px] w-[30px] text-[#B8935A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {step.icon.map((d, i) => (
                          <path key={i} d={d} />
                        ))}
                      </svg>
                    </div>

                    <h3
                      className={`${cormorant.className} relative z-10 mt-5 bg-black px-3 text-[28px] leading-tight text-[#B8935A]`}
                      style={{
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-2 font-body text-[18px] text-white">
                      {step.lead}
                    </p>

                    <p className="mt-2 max-w-[360px] font-body text-[14px] leading-snug text-white/90">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* WHY GLAM SECTION */}
        
<section className="relative w-full overflow-hidden bg-black">
  {/* Background image — desktop only */}
  <div
    className="absolute inset-0 hidden scale-105 bg-cover bg-center bg-no-repeat blur-[3px] lg:block"
    style={{ backgroundImage: "url('/images/mirror.png')" }}
  />
  <div className="absolute inset-0 hidden bg-black/25 lg:block" />
  <div className="absolute inset-0 hidden bg-gradient-to-r from-[#090909]/95 via-[#090909]/50 to-transparent lg:block" />

  <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-28">

    {/* Left: Heading */}
    <div className={cormorant.className}>
      <p
        className="text-[19px] text-[#D9BF7E] sm:text-[22px] lg:text-[24px]"
        style={{
          fontWeight: 500,
          fontStyle: "italic",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        Why GLAM
      </p>

      <h2
        className="mt-5 text-[39px] leading-[1.08] text-[#F6F2EC] sm:text-[48px] lg:text-[76px]"
        style={{
          fontWeight: 500,
          fontStyle: "normal",
          textTransform: "none",
          letterSpacing: "-0.01em",
          wordSpacing: "0.05em",
          fontVariantLigatures: "common-ligatures discretionary-ligatures",
        }}
      >
        Thoughtful by design.
        <br />
        <span className="text-[1.2em] text-[#B8935A]">
          Personal by nature.
        </span>
      </h2>

      <p
        className="mt-7 text-center font-body text-[15px] text-white lg:mt-8 lg:text-left lg:text-[24px]"
        style={{
          fontWeight: 500,
          fontStyle: "italic",
          letterSpacing: "0.01em",
        }}
      >
        Four simple principles:
      </p>
    </div>

    {/* Right: Cards */}
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:max-w-[640px] lg:flex-col lg:justify-self-end lg:gap-4">
      {WHY_GLAM_CARDS.map((card) => (
        <div
          key={card.title}
          className="flex min-h-[125px] items-center gap-3 rounded-2xl border border-white/10 bg-[#111010]/90 px-3 py-4 backdrop-blur-md sm:min-h-[145px] sm:gap-4 sm:px-4 lg:min-h-0 lg:gap-6 lg:bg-gradient-to-br lg:from-white/[0.12] lg:to-black/40 lg:px-7 lg:py-6 lg:shadow-lg"
        >
          <svg
            className="h-6 w-6 shrink-0 text-[#B8935A] sm:h-7 sm:w-7 lg:h-9 lg:w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {card.icon.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </svg>

          <div className="min-w-0">
            <h4
              className={`${cormorant.className} text-[13px] leading-tight text-[#B8935A] sm:text-[15px] lg:text-[26px]`}
              style={{
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              {card.title}
            </h4>

            <p className="mt-1 font-body text-[9px] leading-[1.4] text-white/90 sm:text-[10px] lg:mt-1.5 lg:text-[15px] lg:leading-snug">
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


              {/* CTA SECTION */}
      <section className="relative w-full overflow-hidden bg-[#090909] pt-24 pb-0">
        
        {/* Text Content */}
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-10 lg:px-16">
          
          <p className="font-heading text-xs italic tracking-[0.2em] text-[#C5A059] sm:text-sm">
            YOUR TIME
          </p>
          
          <h2 className="mt-5 font-accent text-4xl leading-[1.15] tracking-normal sm:text-5xl md:text-6xl lg:text-[64px]">
            <span className="block uppercase text-[#F6F2EC]">SOMETIMES, YOU JUST</span>
            <span className="mt-2 block uppercase text-[#C5A059]">NEED A MOMENT.</span>
          </h2>
          
          <p className="mt-8 max-w-3xl font-body text-sm leading-relaxed text-[#F6F2EC]/80 sm:text-base">
            A fresh cut. A little colour. Time to reset. Whatever brings you through our doors, GLAM is a place to slow down, switch off and give yourself some attention.
          </p>
          
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-10 inline-flex items-center justify-center gap-3 bg-[#F6F2EC] px-8 py-3.5 text-[10px] font-bold tracking-[0.15em] !text-black transition hover:bg-[#C5A059]"
          >
            MAKE TIME FOR YOURSELF <span aria-hidden="true">→</span>
          </button>
          
          <p className="mt-6 font-heading text-base italic tracking-wide text-white/80">
            Hair · Skin · Beauty · Nails · Wellness · Men
          </p>
          
        </div>

        <div className="mt-16 w-full overflow-hidden rounded-lg">
          <img
            src="/images/cta.png"
            alt="GLAM Salon Experience"
            className="block h-auto w-full"
          />
        </div>

      </section>

      <Footer />
    </main>
  );
}