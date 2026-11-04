"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BookingModal from "@/components/bookingmodal";

const categories = [
  "All",
  "Hair",
  "Skin",
  "Nails",
  "Beauty & Grooming",
  "For Him",
  "Body & Wellness",
];

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const testimonials = [
  {
    image: "/images/testimonial-1.jpg",
    service: "BEAUTY · FACIAL",
    quote: "I still looked like myself, only elevated.",
    description: "The perfect 'first time' for me — flattering, customized and beautifully done.",
    treatments: "Signature Facial, LED Therapy, Head Massage",
    name: "Nirva",
  },
  {
    image: "/images/testimonial-2.jpg",
    service: "NAIL · BEAUTY",
    quote: "The details make all the difference.",
    description: "The shape, finish and attention to detail were lovely, and it still felt simple, relaxed and beautifully done.",
    name: "Ruchi",
  },
  {
    image: "/images/testimonial-3.jpg",
    service: "BEAUTY · FACIAL",
    quote: "I still looked like myself, only elevated.",
    description: "The perfect 'first time' for me — flattering, customized and beautifully done.",
    treatments: "Signature Facial, LED Therapy, Head Massage",
    name: "Rohina",
  },
  {
    image: "/images/testimonial-4.jpg",
    service: "FOR HIM · HAIR & GROOMING",
    quote: "Good service without the fuss.",
    description: "The stylist listened, offered helpful suggestions and I left looking sharp — quick, easy appointment and a great finish.",
    name: "Arjun",
  }
];

const galleryItems = [
  { src: "/images/gallery-1.jpg", category: "Hair" },
  { src: "/images/gallery-2.jpg", category: "Skin" },
  { src: "/images/gallery-3.jpg", category: "Nails" },
  { src: "/images/gallery-4.jpg", category: "Beauty & Grooming" },
  { src: "/images/gallery-5.jpg", category: "For Him" },
  { src: "/images/gallery-6.jpg", category: "Body & Wellness" },
  { src: "/images/gallery-7.jpg", category: "Hair" },
  { src: "/images/gallery-8.jpg", category: "Skin" },
];

const SLIDE_GROW = [5, 2.7, 2.2, 1.6];
const SLIDE_BRIGHTNESS = [1, 0.7, 0.5, 0.35];

export default function GalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [current, setCurrent] = useState(0);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);
  const n = filtered.length;
  const half = Math.min(3, Math.floor((n - 1) / 2));
  const offsets = n === 0 ? [] : Array.from({ length: half * 2 + 1 }, (_, i) => i - half);
  const go = (d: number) => n > 0 && setCurrent((c) => (c + d + n) % n);

  const activeIndex = n > 0 ? current % n : 0;

  return (
    <main className="overflow-hidden bg-[#090909] text-[#F6F2EC]">
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <section className="relative flex min-h-[80vh] flex-col justify-center px-6 py-12 sm:px-10 lg:min-h-[90vh] lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/galllery.png')" }}
        />
        
        {/* Reduced the solid black overlay from 40% to 15% */}
        <div className="absolute inset-0 bg-black/15" />
        
        {/* Softened the gradient: 90% dark on the far left for the text, fading to 40% in the middle, completely transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/90 via-[#090909]/40 to-transparent" />
        
        <div className="absolute inset-x-0 top-0 z-20">
          <Header />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl pt-20">
          <div className="max-w-2xl">
            <div className={cormorant.className}>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center rounded-md border border-[#E7C988]/60 bg-black/20 px-4 py-2 backdrop-blur-sm">
                <span
                  className="text-[16px] text-[#E7C988]"
                  style={{
                    fontWeight: 500,
                    fontStyle: "italic",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  The GLAM Gallery
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-[48px] leading-[1.05] text-[#F6F2EC] sm:text-[64px] md:text-[80px] lg:text-[96px]"
                style={{
                  fontWeight: 500,
                  fontStyle: "normal",
                  textTransform: "none",
                  letterSpacing: "-0.01em",
                  wordSpacing: "0.05em",
                  fontVariantLigatures: "common-ligatures discretionary-ligatures",
                }}
              >
                A closer look
                <br />
                at <span className="text-[#F5D9A0]">GLAM.</span>
              </h1>
            </div>

            <p className="mt-6 max-w-lg font-body text-[15px] leading-relaxed text-white/90 sm:text-[17px]">
              Real work. Personal style. Beautiful details. Explore the looks and moments that bring the GLAM experience to life.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#gallery-grid"
                className="inline-flex items-center justify-center gap-3 bg-[#F2E6CB] px-8 py-4 text-[11px] font-bold tracking-[0.15em] !text-black transition hover:bg-[#C5A059]"
              >
                EXPLORE OUR EXPERIENCE <span aria-hidden="true" className="text-sm">↘</span>
              </a>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 border border-white/50 bg-black/20 px-8 py-4 text-[11px] font-bold tracking-[0.15em] text-white backdrop-blur-sm transition hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                BOOK AN APPOINTMENT
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className={cormorant.className}>
              <p
                className="mt-10 text-[20px] text-white/80"
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  textTransform: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Hair · Skin · Beauty · Nails · Wellness · Men
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
  id="gallery-grid"
  className="relative overflow-hidden border-t border-white/5 bg-black px-5 py-10 sm:px-8 sm:py-14 lg:bg-[#090909] lg:px-12 lg:py-20"
>
  {/* Desktop background */}
  <div
    className="absolute inset-0 hidden scale-110 bg-cover bg-center blur-[6px] lg:block"
    style={{ backgroundImage: "url('/images/galllery.png')" }}
  />
  <div className="absolute inset-0 hidden bg-black/80 lg:block" />

  <div className="relative z-10 mx-auto max-w-6xl">
    {/* MOBILE HEADING */}
    <div className={`${cormorant.className} mb-5 text-left lg:hidden`}>
      <p
        className="text-[15px] text-[#D9BF7E]"
        style={{ fontWeight: 500, fontStyle: "italic", textTransform: "uppercase", letterSpacing: "0.04em" }}
      >
        The GLAM Approach
      </p>
      <h2
        className="mt-1 text-[32px] leading-[1.05] text-[#F6F2EC]"
        style={{ fontWeight: 500, textTransform: "none", letterSpacing: "-0.01em" }}
      >
        Beauty should feel
        <br />
        <span className="italic text-[#B8935A]" style={{ fontWeight: 300 }}>personal.</span>
      </h2>
    </div>

    {/* FILTER PILLS (scroll sideways on mobile) */}
    <div
      className={`${cormorant.className} flex items-center justify-start gap-2 overflow-x-auto whitespace-nowrap pb-2 lg:flex-wrap lg:justify-center lg:gap-3 lg:overflow-visible`}
      style={{ scrollbarWidth: "none" }}
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => {
            setActiveFilter(category);
            setCurrent(0);
          }}
          className={`shrink-0 rounded-full border px-4 py-1.5 text-[14px] transition-all lg:px-6 lg:py-2 lg:text-[18px] ${
            activeFilter === category
              ? "border-[#B8935A] bg-[#9C7A2B] text-[#F6F2EC]"
              : "border-[#B8935A]/60 bg-transparent text-[#D9BF7E] hover:border-[#D9BF7E] hover:text-[#F6F2EC]"
          }`}
          style={{ fontWeight: 500, fontStyle: "italic", textTransform: "none", letterSpacing: "0.01em" }}
        >
          {category}
        </button>
      ))}
    </div>

    {/* MOBILE GALLERY */}
    <div className="mt-6 lg:hidden">
      {n > 0 ? (
        <>
          <div className="flex h-[380px] w-full gap-2 overflow-hidden sm:h-[460px]">
            {/* Main image */}
            <div className="relative h-full shrink-0 overflow-hidden rounded-md bg-[#1A1A1A]" style={{ width: "86%" }}>
              <img
                src={filtered[activeIndex].src}
                alt={`${filtered[activeIndex].category} gallery image`}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />
            </div>

            {/* Next image peeking in */}
            {n > 1 && (
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Show next gallery image"
                className="relative h-full min-w-0 flex-1 overflow-hidden rounded-md bg-[#1A1A1A]"
              >
                <img
                  src={filtered[(activeIndex + 1) % n].src}
                  alt={`${filtered[(activeIndex + 1) % n].category} gallery preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                />
              </button>
            )}
          </div>

          {/* Counter, progress line, arrows */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex flex-1 items-center gap-3">
              <span
                className={`${cormorant.className} shrink-0 text-[16px] text-[#F6F2EC]`}
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                {String(activeIndex + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </span>
              <div className="relative h-px flex-1 bg-white/15">
                <div
                  className="absolute left-0 top-0 h-px bg-[#B8935A] transition-all duration-500"
                  style={{ width: `${((activeIndex + 1) / n) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[16px] text-white/70 transition hover:bg-[#B8935A] hover:text-black"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[16px] text-white/70 transition hover:bg-[#B8935A] hover:text-black"
              >
                ›
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="py-10 text-center text-sm text-white/50">No images in this category.</p>
      )}
    </div>

    {/* DESKTOP CAROUSEL (unchanged) */}
    <div className="mt-12 hidden h-[580px] w-full items-stretch gap-1.5 lg:mt-16 lg:flex">
      {offsets.map((offset) => {
        const item = filtered[(current + offset + n) % n];
        const dist = Math.abs(offset);
        return (
          <button
            key={item.src}
            type="button"
            onClick={() => go(offset)}
            aria-label={`Show image ${offset === 0 ? "(current)" : ""}`}
            className="relative min-w-0 overflow-hidden rounded-md bg-[#1A1A1A] transition-all duration-700 ease-out"
            style={{
              flexGrow: SLIDE_GROW[dist],
              flexBasis: 0,
              filter: `brightness(${SLIDE_BRIGHTNESS[dist]})`,
              cursor: offset === 0 ? "default" : "pointer",
            }}
          >
            <img
              src={item.src}
              alt={`${item.category} gallery image`}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
          </button>
        );
      })}
    </div>

    {/* DESKTOP ARROWS (unchanged) */}
    <div className="mt-8 hidden items-center justify-center gap-3 lg:flex">
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 backdrop-blur-sm transition hover:border-[#B8935A] hover:text-[#D9BF7E]"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 backdrop-blur-sm transition hover:border-[#B8935A] hover:text-[#D9BF7E]"
      >
        ›
      </button>
    </div>
  </div>
</section>

       <section className="hidden bg-[#090909] px-6 py-20 sm:px-10 lg:block lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          
          {/* Header Area */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-heading text-sm italic tracking-widest text-[#C5A059]">
                THE GLAM COMMUNITY
              </p>
              <h2 className="mt-3 font-accent text-4xl normal-case leading-tight tracking-normal text-[#F6F2EC] sm:text-5xl lg:text-[56px]">
                GLAM, Through your eyes.
              </h2>
            </div>
            
            <a
              href="https://www.instagram.com/theglamsalon_preetvihar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#C5A059] bg-transparent px-6 py-2.5 text-[10px] font-bold tracking-[0.15em] text-[#C5A059] transition hover:bg-[#C5A059] hover:text-black"
            >
              EXPLORE MORE <span aria-hidden="true" className="text-sm">↘</span>
            </a>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col overflow-hidden rounded-md border border-white/5 bg-[#111111]"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src={item.image}
                    alt={`Testimonial from ${item.name}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      // Fallback just in case images aren't there yet
                      const target = e.target as HTMLImageElement;
                      target.style.opacity = '0.5';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Service & Stars */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold tracking-wider text-white/60">
                      {item.service}
                    </span>
                    <div className="flex gap-0.5 text-[#C5A059]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <h3 className="mt-4 font-accent text-xl leading-snug text-[#F6F2EC]">
                    "{item.quote}"
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 font-body text-[11px] leading-relaxed text-white/50">
                    {item.description}
                  </p>

                  {/* Footer (Treatments & Name) */}
                  <div className="mt-5 border-t border-white/10 pt-4">
                    {item.treatments && (
                      <p className="text-[9px] italic text-white/40">
                        Treatments: {item.treatments}
                      </p>
                    )}
                    <p className="mt-1.5 text-[10px] italic text-white/70">
                      — {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS: MOBILE */}
      <section className="bg-[#090909] py-14 lg:hidden">
        {/* Heading */}
        <div className={`${cormorant.className} px-6`}>
          <p
            className="text-[15px] text-[#D9BF7E]"
            style={{ fontWeight: 500, fontStyle: "italic", textTransform: "uppercase", letterSpacing: "0.05em" }}
          >
            The GLAM Community
          </p>
          <h2
            className="mt-1 text-[32px] leading-[1.1] text-[#B8935A]"
            style={{ fontWeight: 300, fontStyle: "italic", textTransform: "none", letterSpacing: "0" }}
          >
            GLAM, Through your eyes.
          </h2>
        </div>

        {/* Swipeable cards */}
        <div
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[10%] py-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const first = el.children[0] as HTMLElement | undefined;
            if (!first) return;
            const step = first.offsetWidth + 16;
            setActiveTestimonial(Math.round(el.scrollLeft / step));
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`flex w-[80%] shrink-0 snap-center flex-col overflow-hidden rounded-xl border bg-black transition-all duration-500 ${
                activeTestimonial === idx
                  ? "border-[#D9A860]/70 opacity-100 shadow-[0_0_32px_rgba(217,168,96,0.45)]"
                  : "border-white/10 opacity-60 shadow-none"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[5/6] w-full bg-[#1A1A1A]">
                <img
                  src={item.image}
                  alt={`Testimonial from ${item.name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0.5";
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-4 pb-5 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-medium tracking-wider text-white/60">
                    {item.service}
                  </span>
                  <div className="flex gap-0.5 text-[#E0B84E]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <h3
                  className={`${cormorant.className} mt-3 text-[22px] leading-snug text-[#F6F2EC]`}
                  style={{ fontWeight: 500, textTransform: "none", letterSpacing: "0" }}
                >
                  “{item.quote}”
                </h3>

                <p className="mt-2 font-body text-[11px] leading-relaxed text-white/75">
                  {item.description}
                </p>

                {item.treatments && (
                  <p className="mt-2 font-body text-[10px] italic text-white/50">
                    Treatments: {item.treatments}
                  </p>
                )}

                <p
                  className={`${cormorant.className} mt-2 text-[14px] text-white/80`}
                  style={{ fontWeight: 500, fontStyle: "italic", textTransform: "none" }}
                >
                  — {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center px-6">
          {/* Button */}
        <div className="mt-8 flex justify-center px-6">
          <a
            href="https://www.instagram.com/theglamsalon_preetvihar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-[300px] items-center justify-center gap-2 rounded-sm border border-[#D9A860]/60 bg-[#8F6A24] px-6 py-3.5 font-body text-[11px] font-medium tracking-[0.18em] text-[#F6F2EC] transition hover:bg-[#B8935A]"
          >
            EXPLORE MORE <span aria-hidden="true">↗</span>
          </a>
        </div>
        </div>
      </section>

      {/* BOTTOM CTA: MOBILE */}
<section className="bg-[#090909] px-6 py-20 text-center sm:px-10 lg:hidden">
  <div className={`${cormorant.className} mx-auto flex max-w-md flex-col items-center`}>
    {/* Eyebrow */}
    <p
      className="text-[17px] text-[#B8935A] sm:text-[20px]"
      style={{
        fontWeight: 500,
        fontStyle: "italic",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
      }}
    >
      Your GLAM Moment Awaits
    </p>

    {/* Heading */}
    <h2
      className="mt-4 leading-[1.5]"
      style={{
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.02em",
        fontSize: "clamp(17px, 5.4vw, 28px)",
      }}
    >
      <span className="block whitespace-nowrap text-[#F6F2EC]">Let&apos;s make your</span>
      <span className="block whitespace-nowrap text-[#B8935A]">Next appointment personal.</span>
    </h2>

    {/* Button */}
    <button
      type="button"
      onClick={() => setIsModalOpen(true)}
      className="mt-12 inline-flex w-full max-w-[320px] items-center justify-center gap-3 bg-[#F6F2EC] px-6 py-5 text-[15px] !text-black transition hover:bg-[#C5A059]"
      style={{ fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.16em" }}
    >
      Make time for yourself
      <svg
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 12h16M14 6l6 6-6 6" />
      </svg>
    </button>

    {/* Category line */}
    <p
      className="mt-9 text-[17px] text-white/85 sm:text-[19px]"
      style={{ fontWeight: 500, fontStyle: "italic", textTransform: "none", letterSpacing: "0.01em" }}
    >
      Hair · Skin · Beauty · Nails · Wellness · Men
    </p>
  </div>
</section>

      {/* BOTTOM CTA SECTION */}
      <section className="hidden bg-[#090909] px-6 py-24 text-center sm:px-10 lg:block lg:px-16 lg:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          
          <p className="font-heading text-sm italic tracking-widest text-[#C5A059]">
            YOUR GLAM MOMENT AWAITS
          </p>
          
          <h2 className="mt-5 font-accent text-4xl uppercase leading-[1.15] tracking-normal sm:text-5xl md:text-6xl lg:text-[64px]">
            <span className="block text-[#F6F2EC]">LET'S MAKE YOUR</span>
            <span className="mt-2 block text-[#C5A059]">NEXT APPOINTMENT PERSONAL.</span>
          </h2>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 border border-white/50 bg-black/20 px-8 py-4 text-[11px] font-bold tracking-[0.15em] text-white backdrop-blur-sm transition hover:border-[#C5A059] hover:text-[#C5A059]"
          >
            BOOK AN APPOINTMENT
            <span aria-hidden="true">→</span>
          </button>

          <p className="mt-6 font-heading text-base italic tracking-wide text-white/50">
            Hair · Skin · Beauty · Nails · Wellness · Men
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}