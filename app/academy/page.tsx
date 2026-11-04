"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function AcademyPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    "How can I find out the course fees?"
  );
  return (
    <main className="scroll-smooth overflow-hidden bg-[#090909] text-[#F6F2EC]">
      
      {/* CUSTOM ACADEMY HEADER */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex min-h-[68px] w-full max-w-[1440px] items-center justify-between px-4 pt-3 sm:min-h-[80px] sm:px-10 sm:pt-4 lg:px-12">
          {/* Logo (Placeholder - replace src with the Bharti Taneja red logo) */}
          <Link href="/" className="shrink-0 flex items-center justify-center">
            <img
              src="/images/alpslogo.png" 
              alt="Bharti Taneja"
              className="h-8 w-auto object-contain sm:h-10"
            />
          </Link>

          {/* Right Buttons */}
         <div className="flex items-center gap-2 sm:gap-3">
            {/* <Link
              href="/salon1"
              className="hidden items-center gap-2 rounded-[4px] border border-[#C5A059]/40 bg-black/40 px-5 py-2.5 text-[10px] font-medium tracking-[0.15em] text-[#C5A059] backdrop-blur-sm transition hover:bg-black/60 sm:inline-flex font-heading"
            >
              GLAM SALON
            </Link> */}

            <Link
              href="/"
              aria-label="The Glam Salon home"
              className="ml-0 shrink-0 sm:ml-20 lg:ml-24"
            >
              <img
                src="/images/logo.png"
                alt="The Glam Salon"
                className="h-10 w-auto object-contain sm:h-14"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex min-h-[88svh] flex-col items-center justify-center overflow-hidden px-5 pb-14 pt-28 text-center sm:min-h-[85vh] sm:px-10 sm:pt-32 sm:pb-20 lg:min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/academybg2.png')" }}
        />

        {/* Additional Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          <div className={`${cormorant.className} flex flex-col items-center`}>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center rounded-md border border-[#D9BF7E]/50 bg-black/30 px-6 py-2 backdrop-blur-md">
              <span
                className="text-[20px] text-[#E7C988] sm:text-[22px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  textTransform: "none",
                  letterSpacing: "0.02em",
                }}
              >
                GLAM Academy
              </span>
            </div>

            {/* Subheading */}
            <p
              className="mb-5 text-[13px] text-white/80 sm:text-[14px]"
              style={{
                fontWeight: 500,
                textTransform: "none",
                letterSpacing: "0.02em",
              }}
            >
              Founded by India's Leading Beauty Experts and Pioneers
            </p>

            {/* Main Heading */}
            <h1
              className="text-[clamp(2.25rem,9vw,2.75rem)] leading-[1.08] text-[#F2E6CB] sm:text-[56px] md:text-[68px] lg:text-[80px]"
              style={{
                fontWeight: 500,
                fontStyle: "normal",
                textTransform: "none",
                letterSpacing: "-0.01em",
                wordSpacing: "0.05em",
                fontVariantLigatures: "common-ligatures discretionary-ligatures",
              }}
            >
              Where beauty
              <br />
              <span className="text-[1.22em] leading-[1.05] sm:text-[1.5em]">becomes a Skill.</span>
            </h1>
          </div>

          {/* Paragraph */}
          <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-white/95 sm:mt-6 sm:text-[20px] md:text-[22px]">
            Professional beauty education, taught by industry experts in a real salon environment.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#categories"
              className="inline-flex w-full max-w-[300px] items-center justify-center gap-2 bg-[#F2E6CB] px-6 py-4 text-[12px] font-bold tracking-[0.12em] !text-black transition-colors hover:bg-[#C5A059] sm:w-auto sm:max-w-none sm:px-7 sm:py-3.5 sm:text-[11px] sm:tracking-[0.14em]"
            >
              EXPLORE SERVICES
             <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.875 5.375V2.125H2.625M5.875 2.125L2.125 5.875" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
              </svg>

            </a>

            {/* <a
              href="#enquire"
              className="inline-flex items-center justify-center border border-white/50 bg-black/10 px-6 py-3.5 font-body text-[11px] sm:px-9 sm:py-4 sm:text-[12px] font-medium tracking-[0.15em] text-white transition hover:border-[#C5A059] hover:text-[#C5A059]"
            >
              ENQUIRE NOW
            </a> */}
          </div>

          {/* Bottom Small Text */}
          <div className={cormorant.className}>
            <p
              className="mt-6 max-w-[330px] text-[15px] leading-relaxed text-white/80 sm:mt-8 sm:max-w-none sm:text-[20px]"
              style={{
                fontWeight: 500,
                fontStyle: "italic",
                textTransform: "none",
                letterSpacing: "0.01em",
              }}
            >
              Takes less than 60 seconds*. Explore available batches and flexible schedules.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 overflow-hidden bg-[#090909] px-5 py-14 sm:px-10 sm:py-20 lg:px-12 lg:py-28">

        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/academybg1.png')",
          }}
        />

        {/* Dark Overlay - Reduced opacity to show image */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#090909]/80 via-[#090909]/40 to-[#090909]/20" />

        {/* Content */}
        <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col items-center justify-center text-center lg:col-span-4 lg:items-start lg:text-left">
            <div className={cormorant.className}>

              {/* Badge */}
              <div className="mb-5 inline-flex items-center self-center lg:self-start rounded-md border border-[#D9BF7E]/50 bg-black/30 px-5 py-2 backdrop-blur-sm">
                <span
                  className="text-[18px] text-[#E7C988] sm:text-[20px]"
                  style={{
                    fontWeight: 500,
                    fontStyle: "italic",
                    textTransform: "none",
                    letterSpacing: "0.02em",
                  }}
                >
                  Our Expert Educator
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-[clamp(2.25rem,8vw,2.8rem)] leading-[1.05] text-[#F6F2EC] sm:text-[56px] lg:text-[68px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "normal",
                  textTransform: "none",
                  letterSpacing: "-0.01em",
                  wordSpacing: "0.05em",
                  fontVariantLigatures: "common-ligatures discretionary-ligatures",
                }}
              >
                Learn from
                <br />
                <span className="text-[1.2em] text-[#B8935A]">Experience.</span>
              </h2>
            </div>

            <p className="mt-5 max-w-md font-body text-[14px] leading-relaxed text-white/85 sm:mt-6 sm:text-[17px]">
              Exceptional skill. Thoughtful artistry. A personal approach to teaching that prepares you for the real world.
            </p>

            {/* Stats Boxes */}
            <div className="mt-8 grid w-full max-w-sm grid-cols-2 gap-3 sm:mt-10 sm:flex sm:max-w-none sm:gap-4">
              {[
                { value: "30+", label: "Years of Experience" },
                { value: "5,000+", label: "Graduates" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center rounded-md border border-white/10 bg-[#151515]/70 px-3 py-4 text-center backdrop-blur-sm sm:px-6 sm:py-5"
                >
                  <span
                    className={`${cormorant.className} text-[40px] leading-none text-[#B8935A]`}
                    style={{ fontWeight: 500, textTransform: "none" }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-2 font-body text-[11px] uppercase tracking-wider text-white/75">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 lg:col-span-8">
            {[
              {
                img: "/images/founderdir.png",
                alt: "Dr. Bharti Taneja",
                name: "Dr. Bharti Taneja",
                role: "Founder - Blossom",
                tags: "Cosmetology · Aesthetics · Mesotherapy",
                highlight: false,
              },
              {
                img: "/images/executivedir.png",
                alt: "Gunjan Taneja Gaur",
                name: "Gunjan Taneja Gaur",
                role: "Executive Director",
                tags: "Permanent Makeup · Salon Management",
                highlight: true,
              },
              {
                img: "/images/director.png",
                alt: "Ishika Taneja",
                name: "Ishika Taneja",
                role: "MD, Blossom/US Beauty Group",
                tags: "Beauty Industry · Business Leadership",
                highlight: false,
              },
            ].map((person) => (
              <div
                key={person.name}
                className={`group relative w-[82%] shrink-0 snap-center flex flex-col overflow-hidden rounded-md bg-[#111] sm:w-auto sm:shrink ${
                  person.highlight
                    ? "border border-[#B8935A]/40 shadow-[0_0_30px_rgba(184,147,90,0.15)] sm:-translate-y-6"
                    : "border border-white/5"
                }`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.alt}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                </div>

                <div className="absolute bottom-0 w-full p-5 text-center">
                  <h3
                    className={`${cormorant.className} text-[28px] leading-tight text-[#F6F2EC]`}
                    style={{ fontWeight: 500, textTransform: "none", letterSpacing: "0" }}
                  >
                    {person.name}
                  </h3>
                  <p
                    className={`${cormorant.className} mt-1 text-[19px] text-[#D9BF7E]`}
                    style={{ fontWeight: 500, fontStyle: "italic", textTransform: "none" }}
                  >
                    {person.role}
                  </p>
                  <p className="mt-2 font-body text-[10px] uppercase tracking-wider text-white/70">
                    {person.tags}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#090909] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/academybg3.png')" }}
        />
        {/* Light overlay so the text stays readable */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 mx-auto max-w-[1440px]">
          {/* Header */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div className={cormorant.className}>
              <p
                className="text-[16px] text-[#D9BF7E] sm:text-[18px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Areas of Study
              </p>

              <h2
                className="mt-4 text-[40px] leading-[1.1] text-[#F6F2EC] sm:text-[50px] lg:text-[60px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "normal",
                  textTransform: "none",
                  letterSpacing: "-0.01em",
                  wordSpacing: "0.05em",
                  fontVariantLigatures: "common-ligatures discretionary-ligatures",
                }}
              >
                Find your discipline.
                <br />
                <span
                  className="text-[1.2em] text-[#B8935A]"
                  style={{ fontWeight: 300, fontStyle: "italic" }}
                >
                  &amp; Your Specialisation
                </span>
              </h2>
            </div>

            <p className="max-w-[460px] font-body text-[16px] leading-[1.7] text-white md:text-right md:text-[18px]">
              Explore focused learning paths across the essential disciplines of professional beauty.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:mt-20 lg:grid-cols-4">
            {[
              {
                no: "01",
                title: "Professional Makeup",
                desc: "From foundational techniques to airbrush application and occasion makeup.",
                img: "/images/makeup.png",
                icon: ["M8 22h8", "M9 22v-6h6v6", "M10 16v-5h4v5", "M10 11l4-8 1 1-3 7"],
              },
              {
                no: "02",
                title: "Hair Design & Styling",
                desc: "Cut, colour, texture, styling, and the techniques behind each finished look.",
                img: "/images/hair.png",
                icon: [
                  "M9.06 11.9l8.07-8.06a2.85 2.85 0 114.03 4.03l-8.06 8.08",
                  "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 00-3-3.02z",
                ],
              },
              {
                no: "03",
                title: "Skin Culture & Salon Management",
                desc: "Cut, colour, texture, styling, and the techniques behind each finished look.",
                img: "/images/skin.png",
                icon: [
                  "M12 3c2 3 2 6 0 9-2-3-2-6 0-9z",
                  "M12 12c-1-3-4-4-7-3 0 3 3 6 7 6",
                  "M12 12c1-3 4-4 7-3 0 3-3 6-7 6",
                  "M12 15v5",
                ],
              },
              {
                no: "04",
                title: "Nail Art & Extensions",
                desc: "Precision, structure, and creative expression through contemporary nail techniques.",
                img: "/images/nail.png",
                icon: ["M9 3h6v4H9z", "M7 7h10v13a1 1 0 01-1 1H8a1 1 0 01-1-1z", "M12 12v4"],
              },
            ].map((item) => (
              <div
                key={item.no}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#C5A059]/60 bg-black"
              >
                {/* Image */}
                <div className="relative aspect-[1/1.05] w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Icon tab, bottom right */}
                  <div className="absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-tl-[22px] bg-black">
                    <svg
                      className="h-6 w-6 text-[#C5A059]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon.map((d, i) => (
                        <path key={i} d={d} />
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className={`${cormorant.className} flex flex-1 flex-col items-center px-3 pb-5 pt-3 text-center sm:px-5 sm:pb-6`}>
                  <span className="text-[12px] text-white/60" style={{ fontWeight: 500 }}>
                    {item.no}
                  </span>
                  <h3
                    className="mt-1 text-[19px] leading-tight text-[#F6F2EC] sm:text-[24px]"
                    style={{ fontWeight: 500, textTransform: "none", letterSpacing: "0" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-[11px] leading-[1.45] text-white/75 sm:text-[13px]"
                    style={{
                      fontWeight: 500,
                      fontStyle: "italic",
                      textTransform: "none",
                      letterSpacing: "0.14em",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING PATH SECTION */}
      <section
      id="courses"
       className="relative overflow-hidden bg-[#090909] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/academybg4.png')" }}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 mx-auto max-w-[1440px]">
          {/* Header */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div className={cormorant.className}>
              <p
                className="text-[16px] text-[#D9A860] sm:text-[18px]"
                style={{ fontWeight: 500, fontStyle: "italic", textTransform: "uppercase", letterSpacing: "0.04em" }}
              >
                Your Learning Path
              </p>
              <h2
                className="mt-4 text-[40px] leading-[1.1] text-[#F6F2EC] sm:text-[52px] lg:text-[64px]"
                style={{
                  fontWeight: 400,
                  fontStyle: "normal",
                  textTransform: "none",
                  letterSpacing: "-0.01em",
                  wordSpacing: "0.05em",
                  fontVariantLigatures: "common-ligatures discretionary-ligatures",
                }}
              >
                Build a deeper practice.
              </h2>
            </div>

            <p className="max-w-[520px] font-body text-[16px] leading-[1.7] text-white md:text-right md:text-[18px]">
              From comprehensive diploma programmes to focused skill development, choose a course that reflects your interests and ambitions.
            </p>
          </div>

          {/* Sub heading */}
          <div className={cormorant.className}>
            <h3
              className="mt-14 text-[32px] text-[#F6F2EC]/90 sm:text-[40px] lg:text-[48px]"
              style={{ fontWeight: 300, textTransform: "none", letterSpacing: "0.01em" }}
            >
              Career-Focused Diploma Programmes
            </h3>
          </div>

          {/* Diploma cards */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            {[
              {
                code: "(PGDBHM)",
                title: "PG Diploma in Beauty, Hair & Makeup",
                tagline: "A broader foundation in beauty, hair and makeup.",
                duration: "12 Months",
                desc: "Develop skills across beauty, hair, makeup, and salon management.",
                includes: ["skin anatomy", "12 saree draping styles", "and 40 hairstyles"],
                cta: "REQUEST COURSE EMAIL",
                img: "/images/diploma-1.png",
              },
              {
                code: "(D3HM)",
                title: "Diploma in Beauty, Hair & Makeup",
                tagline: "A broader foundation in beauty, hair and makeup.",
                duration: "10 Months",
                desc: "Explore core beauty techniques.",
                includes: ["15 types of haircuts", "38 hairstyles", "chemical hair treatments through a structured program"],
                cta: "EXPLORE BASIC OPTIONS",
                img: "/images/diploma-2.png",
              },
            ].map((course) => (
              <div key={course.code} className="flex flex-col gap-5 sm:flex-row sm:gap-8">
                {/* Image block */}
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#A89580] sm:aspect-auto sm:min-h-[360px] sm:w-[44%]">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = "0";
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-center">
                  <p
                    className={`${cormorant.className} text-[30px] leading-none text-[#D9A860]`}
                    style={{ fontWeight: 500, fontStyle: "italic", textTransform: "none" }}
                  >
                    {course.code}
                  </p>
                  <h4
                    className={`${cormorant.className} mt-2 text-[28px] leading-tight text-[#F6F2EC]`}
                    style={{ fontWeight: 600, textTransform: "none", letterSpacing: "0" }}
                  >
                    {course.title}
                  </h4>
                  <p
                    className={`${cormorant.className} mt-3 text-[16px] text-white/80`}
                    style={{ fontWeight: 500, fontStyle: "italic", textTransform: "none" }}
                  >
                    {course.tagline}
                  </p>
                  <p className="mt-3 font-body text-[14px] text-white/90">Duration: {course.duration}</p>
                  <p className="mt-2 font-body text-[14px] leading-snug text-white/80">{course.desc}</p>
                  <p className="mt-3 font-body text-[14px] text-white/90">It Includes:</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 font-body text-[13px] text-white/75">
                    {course.includes.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a
                    href="#enquire"
                    className="mt-6 inline-flex self-start bg-[#F6F2EC] px-6 py-3 font-body text-[11px] font-medium tracking-[0.15em] !text-black transition hover:bg-[#C5A059]"
                  >
                    {course.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALISED COURSES SECTION */}
      
<section className="relative overflow-hidden bg-[#090909] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/academybg4.png')" }}
  />
  <div className="absolute inset-0 bg-black/30" />

  <div className="relative z-10 mx-auto max-w-[1440px]">
    {/* Header */}
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center md:gap-8">
      <p className="max-w-sm font-body text-[13px] leading-[1.65] text-white sm:text-[15px] lg:text-[16px]">
        Focused training. Specific techniques.
        <br />
        A shorter path to learning.
      </p>

      <div className={cormorant.className}>
        <h2
          className="text-[29px] leading-[1.12] text-[#F6F2EC] sm:text-[40px] md:text-right lg:text-[50px]"
          style={{
            fontWeight: 300,
            textTransform: "none",
            letterSpacing: "0",
            wordSpacing: "0.03em",
            fontVariantLigatures: "common-ligatures discretionary-ligatures",
          }}
        >
          Specialised &amp; Short-Term Courses
        </h2>
      </div>
    </div>

    {/* Course cards */}
    <div className="mt-9 grid grid-cols-2 items-stretch gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      {[
        {
          title: "Certificate in Airbrush Makeup",
          meta: "6 Days · Makeup",
          desc: "Explore airbrush application techniques for a smooth, even finish.",
          includes: ["Professional brush kit"],
          img: "/images/airbrush.png",
        },
        {
          title: "Diploma in Beauty Culture",
          meta: "3 Months · Skin & Beauty",
          desc: "Learn skin physiology, essential beauty treatments, facials, manicures, pedicures, and permanent hair reduction techniques.",
          includes: ["Basic product kit"],
          img: "/images/skin&beauty.png",
        },
    {
          title: "Certificate Course in Saree Draping",
          meta: "15 Days · Draping & Styling",
          desc: "Study 15 draping styles across sarees, lehengas, and dupattas.",
          includes: [],
          img: "/images/saree.png",
        },
        {
          title: "Certificate in Permanent Makeup",
          meta: "10 Days · Permanent Makeup",
          desc: "Explore eyebrow, kajal, and eyeliner techniques, alongside specialised camouflage techniques.",
          includes: [],
          img: "/images/permanent.png",
        },
      ].map((course) => (
        <div
          key={course.title}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-black sm:rounded-2xl"
        >
          {/* Image */}
          <div className="relative aspect-[4/3.4] w-full shrink-0 overflow-hidden bg-[#1A1A1A]">
            <img
              src={course.img}
              alt={course.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col items-center px-3 pb-4 pt-4 text-center sm:px-4 sm:pb-5 sm:pt-5 lg:px-5">
            <h3
              className={`${cormorant.className} text-[16px] leading-[1.2] text-[#F6F2EC] sm:text-[20px] lg:text-[22px]`}
              style={{
                fontWeight: 500,
                textTransform: "none",
                letterSpacing: "0",
              }}
            >
              {course.title}
            </h3>

            <p
              className={`${cormorant.className} mt-2 text-[13px] leading-tight text-[#D9BF7E] sm:text-[15px]`}
              style={{
                fontWeight: 500,
                fontStyle: "italic",
                textTransform: "none",
              }}
            >
              {course.meta}
            </p>

            <p className="mt-3 flex-1 font-body text-[11px] leading-[1.55] text-white/75 sm:text-[12px] lg:text-[13px]">
              {course.desc}
            </p>

            {course.includes.length > 0 && (
              <div className="mt-3 w-full text-left">
                <p className="font-body text-[11px] text-white/90 sm:text-[12px]">
                  It Includes:
                </p>
                <ul className="mt-1 list-disc pl-4 font-body text-[10px] leading-relaxed text-white/75 sm:text-[11px]">
                  {course.includes.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href="#advisor"
              className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-[#F6F2EC] px-2 py-3 font-body text-[8px] font-medium tracking-[0.1em] !text-black transition hover:bg-[#C5A059] sm:w-auto sm:px-4 sm:text-[9px] sm:tracking-[0.13em]"
            >
              SPEAK TO AN ADVISOR
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ENQUIRY FORM SECTION */}
<section
id="enquire"
 className="relative overflow-hidden bg-[#090909] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/academybg5.png')" }}
  />
  <div className="absolute inset-0 bg-black/30" />

  <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
    {/* Left Text */}
    <div className={cormorant.className}>
      <div className="inline-flex items-center rounded-md border border-[#D9BF7E]/50 bg-black/30 px-4 py-1.5">
        <span
          className="text-[18px] text-[#E7C988]"
          style={{ fontWeight: 500, fontStyle: "italic", textTransform: "uppercase", letterSpacing: "0.03em" }}
        >
          Your Next Step
        </span>
      </div>

      <h2
        className="mt-6 text-[44px] leading-[1.1] text-[#F6F2EC] sm:text-[56px] lg:text-[68px]"
        style={{
          fontWeight: 500,
          fontStyle: "normal",
          textTransform: "none",
          letterSpacing: "-0.01em",
          wordSpacing: "0.05em",
          fontVariantLigatures: "common-ligatures discretionary-ligatures",
        }}
      >
        Let&apos;s find your
        <br />
        course.
      </h2>

      <p
        className="mt-8 max-w-[480px] text-[19px] leading-[1.6] text-white/90"
        style={{ fontWeight: 500, textTransform: "none" }}
      >
        Tell us what you&apos;d like to learn. Our admissions team can help you explore suitable programmes, upcoming batches, course fees, and available payment options.
      </p>

      <p
        className="mt-8 text-[14px] text-white/75"
        style={{ fontWeight: 500, fontStyle: "italic", textTransform: "none" }}
      >
        Your details will be used to respond to your enquiry.
      </p>
    </div>

    {/* Right Form */}
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 gap-5">
        {/* Full name */}
        <div>
          <label
            className={`${cormorant.className} mb-1.5 block text-[15px] text-[#E7C988]`}
            style={{ fontWeight: 500, textTransform: "none" }}
          >
            Full Name *
          </label>
          <div className="relative">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input
              type="text"
              placeholder="Rahul Kumar"
              className="w-full rounded-xl border border-[#D9BF7E]/50 bg-[#0d0d0d] py-3.5 pl-11 pr-4 font-sans text-[14px] text-white placeholder-white/40 focus:border-[#E7C988] focus:outline-none"
            />
          </div>
        </div>

        {/* Mobile */}
        <div>
          <label
            className={`${cormorant.className} mb-1.5 block text-[15px] text-[#E7C988]`}
            style={{ fontWeight: 500, textTransform: "none" }}
          >
            Mobile Number *
          </label>
          <div className="relative">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <input
              type="tel"
              placeholder="9876543210"
              className="w-full rounded-xl border border-[#D9BF7E]/50 bg-[#0d0d0d] py-3.5 pl-11 pr-4 font-sans text-[14px] text-white placeholder-white/40 focus:border-[#E7C988] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Area of interest */}
      <div>
        <label
          className={`${cormorant.className} mb-1.5 block text-[15px] text-[#E7C988]`}
          style={{ fontWeight: 500, textTransform: "none" }}
        >
          Area of Interest
        </label>
        <div className="relative">
          <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <select className="w-full appearance-none rounded-xl border border-[#D9BF7E]/50 bg-[#0d0d0d] py-3.5 pl-11 pr-10 font-sans text-[14px] text-white/80 focus:border-[#E7C988] focus:outline-none">
            <option value="">Select a course</option>
            <option value="makeup">Professional Makeup</option>
            <option value="hair">Hair Design &amp; Styling</option>
            <option value="skin">Skin Culture &amp; Salon Management</option>
            <option value="nails">Nail Art &amp; Extensions</option>
            <option value="diploma">Diploma Programmes</option>
          </select>
          <svg className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#D9BF7E]/60 bg-[#F6F2EC] py-5 font-body text-[12px] font-semibold tracking-[0.2em] text-black transition hover:bg-[#C5A059]"
      >
        REQUEST COURSE DETAILS <span aria-hidden="true" className="text-[11px]">↗</span>
      </button>
    </form>
  </div>
</section>

{/* FAQ SECTION */}
{/* FAQ SECTION */}
<section className="relative overflow-hidden bg-[#090909] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/academybg6.png')" }}
  />
  <div className="absolute inset-0 bg-black/30" />

  <div className="relative z-10 mx-auto max-w-[1440px]">
    {/* Heading */}
    <div className={`${cormorant.className} text-center`}>
      <p
        className="text-[18px] text-[#C9953F]"
        style={{
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        FAQs
      </p>

      <h2
        className="mt-1 text-[40px] leading-[1.1] text-[#F6F2EC] sm:text-[52px] lg:text-[60px]"
        style={{
          fontWeight: 600,
          textTransform: "none",
          letterSpacing: "0",
          wordSpacing: "0.05em",
        }}
      >
        Quick Answers for You
      </h2>

      <div className="mx-auto mt-2 h-[2px] w-16 bg-[#C9953F]" />
    </div>

    {/* Questions */}
    <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:mt-14 lg:grid-cols-2 lg:gap-6">
      {[
        [
          {
            q: "How can I find out the course fees?",
            a: "Submit an enquiry with your preferred course. Our admissions team will share the relevant fee details and explain the available options.",
          },
          {
            q: "Can I enrol without prior experience?",
            a: "Yes. Many of our programmes start from the fundamentals, so beginners are welcome. Our team can help you choose the right starting point.",
          },
        ],
        [
          {
            q: "Are payment plans available?",
            a: "Yes. Flexible payment options are available for many programmes. Our admissions team will walk you through them.",
          },
          {
            q: "Are learning kits included?",
            a: "Kit details vary by course. Submit an enquiry and our team will confirm what is included in your programme.",
          },
        ],
      ].map((column, ci) => (
        <div key={ci} className="flex flex-col gap-4 lg:gap-6">
          {column.map((faq) => {
            const isOpen = openFaq === faq.q;

            return (
              <div
                key={faq.q}
                className="rounded-xl border border-white/20 bg-[#0d0d0d]/90 px-4 py-4 sm:px-6 sm:py-5"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(isOpen ? null : faq.q)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                >
                  <span
                    className={`${cormorant.className} text-[18px] leading-snug text-[#F6F2EC] sm:text-[22px]`}
                    style={{
                      fontWeight: 500,
                      textTransform: "none",
                      letterSpacing: "0",
                    }}
                  >
                    {faq.q}
                  </span>

                  <svg
                    className={`h-4 w-4 shrink-0 text-white/70 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 font-body text-[15px] leading-snug text-white/80">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </div>
</section>  

      <Footer />
    </main>
  );
}