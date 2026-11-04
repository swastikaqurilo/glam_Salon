"use client";

import { useState, useEffect } from "react"; 
import Header from "@/components/header";
import Footer from "@/components/footer";
import BookingModal from "@/components/bookingmodal";

const services = [
  {
    title: "BEAUTY & GROOMING",
    description: "Thoughtful beauty services tailored to you.",
    image: "/images/beautyngrom.png",
    number: "01",
  },
  {
    title: "SKIN",
    description: "Personalised care for healthy, radiant skin.",
    image: "/images/careskin.png",
    number: "02",
  },
  {
    title: "HAIR",
    description: "Cuts, colour and styling made for you.",
    image: "/images/hairrr.png",
    number: "03",
  },
  {
    title: "NAILS",
    description: "Beautiful details, finished to perfection.",
    image: "/images/nailss.png",
    number: "04",
  },
  {
    title: "BODY & WELLNESS",
    description: "Take a moment to relax and recharge.",
    image: "/images/bodynwell.png",
    number: "05",
  },
  {
    title: "FOR HIM",
    description: "Modern grooming with a personal touch.",
    image: "/images/forhim.png",
    number: "06",
  },
];

const serviceFinderOptions = [
  "Refresh my hair",
  "Change my colour",
  "Improve my skin",
  "Look my best for an occasion",
  "Hair removal",
  "Grooming",
  "Relaxation",
  "I'm not sure",
];

const serviceRecommendations: Record<
  string,
  { title: string; description: string }[]
> = {
  "Refresh my hair": [
    {
      title: "Haircut & Styling",
      description: "Recommended for refreshing your look",
    },
    {
      title: "Hair Spa",
      description: "Recommended for nourishment and shine",
    },
    {
      title: "Blow-Dry & Finish",
      description: "Recommended for a polished everyday style",
    },
  ],
  "Change my colour": [
    {
      title: "Root Touch-up (Majirel)",
      description: 'Recommended for "Change my colour"',
    },
    {
      title: "Global Colour",
      description: 'Recommended for "Change my colour"',
    },
    {
      title: "Streaks (per streak)",
      description: 'Recommended for "Change my colour"',
    },
  ],
  "Improve my skin": [
    {
      title: "Personalised Facial",
      description: "Recommended for your skin goals",
    },
    {
      title: "Skin Rejuvenation",
      description: "Recommended for a refreshed appearance",
    },
    {
      title: "Clean-up",
      description: "Recommended for a simple skin refresh",
    },
  ],
  "Look my best for an occasion": [
    {
      title: "Party Makeup",
      description: "Recommended for your special occasion",
    },
    {
      title: "Professional Hairstyling",
      description: "Recommended to complete your look",
    },
    {
      title: "Nail Styling",
      description: "Recommended for the finishing touches",
    },
  ],
  "Hair removal": [
    {
      title: "Face Waxing",
      description: "A grooming option for facial areas",
    },
    {
      title: "Body Waxing",
      description: "Choose treatment areas to suit your needs",
    },
    {
      title: "Threading",
      description: "For precise facial grooming",
    },
  ],
  Grooming: [
    {
      title: "Men's Haircut",
      description: "For a clean, refreshed look",
    },
    {
      title: "Beard Styling",
      description: "For a well-defined finish",
    },
    {
      title: "Skin Clean-up",
      description: "For a fresh, groomed appearance",
    },
  ],
  Relaxation: [
    {
      title: "Relaxing Body Massage",
      description: "For a moment of rest and relaxation",
    },
    {
      title: "Hair Spa",
      description: "A nourishing hair-care experience",
    },
    {
      title: "Rejuvenating Facial",
      description: "A refreshing addition to your self-care routine",
    },
  ],
  "I'm not sure": [
    {
      title: "Personalised Consultation",
      description: "Start with a conversation about your goals",
    },
    {
      title: "Hair & Beauty Assessment",
      description: "Explore suitable services with our team",
    },
    {
      title: "Discover Our Services",
      description: "Find an experience that feels right for you",
    },
  ],
};

const signatureExperiences = [
  {
    title: "THE COLOUR EDIT",
    subtitle: "Colour, considered.",
    description: "From precision balayage to bespoke colour, tailored to your features, style and individuality.",
    link: "EXPLORE EXPERIENCE",
    image: "/images/colour-edit.jpg", // replace with your image
  },
  {
    title: "THE GLOW RITUAL",
    subtitle: "Skin in its best light.",
    description: "Advanced facials, gentle resurfacing, and serene rituals to restore your natural radiance.",
    link: "DISCOVER SKIN",
    image: "/images/glow-ritual.jpg", // replace with your image
  },
  {
    title: "THE RESET",
    subtitle: "Time for calm to yourself.",
    description: "From a quick trim to a deeply restorative massage — total reset, restore and reset.",
    link: "DISCOVER WELLNESS",
    image: "/images/the-reset.jpg", // replace with your image
  },
  {
    title: "THE GENTLEMEN'S EDIT",
    subtitle: "Grooming, with intention.",
    description: "Precision cuts, refined grooming and nourishing care designed for the modern gentleman.",
    link: "DISCOVER MEN'S",
    image: "/images/gents-edit.jpg", // replace with your image
  },
];

const newTestimonials = [
  {
    quote: "The best salon experience I've ever had. The attention to detail made me feel so looked after.",
    name: "Priya Sharma",
  },
  {
    quote: "Absolutely love how they take care of every detail. I walked out feeling completely renewed.",
    name: "Aditi Verma",
  },
  {
    quote: "I'm always a bit nervous with my hair, but the team here understood exactly what I wanted and the result was perfect.",
    name: "Neha Kapoor",
  },
  {
    quote: "Truly amazing service and luxurious environment. The staff here are skilled and genuinely kind.",
    name: "Ritu Malhotra",
  },
];

const sectionLabel =
  "mb-4 text-xs font-semibold tracking-[0.3em] text-[#B58F55]";

const sectionHeading =
  "font-heading text-4xl font-medium leading-tight text-[#27231F] sm:text-5xl lg:text-6xl";

const primaryButton =
  "inline-flex items-center justify-center gap-3 bg-[#B58F55] px-7 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition hover:bg-[#96713F]";

const outlineButton =
  "inline-flex items-center justify-center gap-3 border border-[#B58F55] px-7 py-4 text-[11px] font-semibold tracking-[0.18em] text-[#27231F] transition hover:bg-[#B58F55] hover:text-white";

export default function Home() {
  const [activeFeedback, setActiveFeedback] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main id="home" className="overflow-hidden bg-black text-[#F6F2EC]">

       <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <section
        id="home"
        className="relative flex min-h-[690px] flex-col overflow-hidden bg-[#17130F] text-white sm:min-h-[780px] lg:min-h-[760px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.png')",
            filter: "brightness(1.2)",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-black/25" />

        {/* Header */}
        <div className="relative z-20">
          <Header onBookClick={() => setIsModalOpen(true)} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-start px-6 pt-[58px] pb-12 sm:items-center sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="grid w-full grid-cols-1 items-start gap-0 lg:grid-cols-[minmax(0,1fr)_250px] lg:items-center lg:gap-12">

            {/* Left content */}
            <div className="w-full min-w-0 max-w-3xl">
              <div className="mb-4 inline-flex items-center rounded-md border border-[#F1E2CC] px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2">
                <span className="font-heading text-sm italic text-[#E7C988]">
                  Unisex salon
                </span>
              </div>

              <h1
                className="font-heading text-[clamp(2rem,7vw,96px)] font-normal uppercase leading-none tracking-[-1.12px]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                <span className="whitespace-nowrap">BEAUTY, TAILORED</span>
                <br />
                TO <span className="italic text-[#B58F55]">YOU</span>.
              </h1>

              <p className="mt-5 whitespace-nowrap font-heading text-[15px] italic text-white/90 sm:mt-6 sm:text-2xl">
                Expert care. Personalised experiences.
              </p>

            {/* Buttons */}
            <div className="mt-[70px] flex w-full flex-col items-start gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-start sm:gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex min-h-[52px] w-full max-w-[300px] items-center justify-center gap-2 bg-[#F5EBDE] px-6 py-4 text-[12px] font-bold tracking-[0.12em] !text-black transition hover:bg-[#E7C988] sm:min-h-[42px] sm:w-auto sm:max-w-none sm:px-7 sm:py-3 sm:text-[10px] sm:font-medium sm:tracking-[0.14em]"
              >
                BOOK AN APPOINTMENT <span aria-hidden="true">→</span>
              </button>

              <a
                href="#services"
                className="inline-flex min-h-[52px] w-full max-w-[200px] items-center justify-center gap-1.5 border border-white/60 bg-black/20 px-2 py-4 text-center text-[10px] font-bold leading-tight tracking-[0.08em] text-white transition hover:border-[#E7C988] hover:text-[#E7C988] sm:min-h-[42px] sm:w-auto sm:max-w-none sm:gap-2 sm:bg-transparent sm:px-7 sm:py-3 sm:text-[10px] sm:font-medium sm:leading-normal sm:tracking-[0.14em]"
              >
                EXPLORE SERVICES <span aria-hidden="true">→</span>
              </a>
            </div>
            </div>

            {/* Feature cards – icons & desktop completely unchanged */}
            <div className="absolute bottom-[50px] left-1/2 z-20 grid w-[calc(100%-40px)] max-w-[320px] -translate-x-1/2 grid-cols-2 gap-3 lg:bottom-7 lg:left-auto lg:right-[2%] lg:w-[210px] lg:max-w-none lg:translate-x-0 lg:grid-cols-1">
              {[
                { icon: "♧", title: "Expert Stylists" },
                { icon: "♙", title: "Premium Products" },
                { icon: "✣", title: "Hygiene First" },
                { icon: "♧", title: "Personalized Care" },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex h-[76px] flex-col items-center justify-center gap-1 rounded-lg border border-white/20 bg-[#211B16]/80 px-2 backdrop-blur-sm transition hover:border-[#B58F55] lg:h-[76px] lg:flex-row lg:justify-start lg:gap-3 lg:rounded-xl lg:px-4"
                >
                  <span className="shrink-0 text-lg text-[#B58F55] lg:text-xl">
                    {feature.icon}
                  </span>
                  <span className="whitespace-nowrap text-[10px] text-[#D6AD67] lg:text-[14px]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="salon"
        className="bg-[#090909] px-8 py-12 text-white sm:px-10 sm:py-[120px] lg:px-12 lg:py-[160px]"
        >
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-0 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">

          <h2 className="order-1 mb-3 whitespace-nowrap font-accent text-[clamp(1.45rem,6.8vw,1.9rem)] font-normal leading-[1.1] tracking-[-0.01em] text-[#E9C69F] normal-case sm:order-none sm:mb-6 sm:text-5xl sm:tracking-[0.02em] lg:text-[50px] md:col-start-2 md:row-start-1">
            BEAUTY IS PERSONAL
          </h2>

          <h3 className="order-2 mb-7 font-heading text-lg font-medium italic leading-[1.4] tracking-normal text-white normal-case sm:order-none sm:mb-6 sm:text-xl sm:not-italic lg:text-[28px] md:col-start-2 md:row-start-2">
            Because The Right Experience
            <br className="sm:hidden" />
            {" "}Begins
            <br className="hidden sm:block" />
            With Understanding You.
          </h3>

          {/* Image */}
          <div className="order-3 mb-7 w-full overflow-hidden rounded-[28px] md:order-none md:col-start-1 md:row-start-1 md:row-span-3 md:mb-0 md:rounded-[28px]">
            <img
              src="/images/about.png"
              alt="The Glam Salon interior"
              className="block aspect-[16/9] h-auto w-full object-cover object-center md:aspect-auto"
            />
          </div>

          {/* Description */}
          <p className="order-4 font-heading text-[17px] leading-[1.4] tracking-wide text-white/85 sm:order-none sm:text-[17px] sm:leading-[1.6] lg:text-lg md:col-start-2 md:row-start-3">
            From the way your hair moves to the way you want to feel when you leave,
            every detail matters. We bring together considered expertise, refined
            technique and genuine attention — creating beauty experiences that feel
            as individual as you are.
          </p>

        </div>
      </section>

      {/* SERVICES + INTERACTIVE SERVICE FINDER */}
      <section
        id="services" 
        className="bg-[#090909] px-5 py-16 text-[#F6F2EC] sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mb-10 text-center">
            <h2 className="font-heading text-4xl font-medium tracking-wide sm:text-5xl">
              FIND YOUR EXPERIENCE
            </h2>

            <p className="mx-auto mt-4 max-w-4xl font-body text-sm leading-7 text-white/70 sm:text-base">
              From everyday grooming to transformative colour, restorative skin
              rituals and occasion beauty, every service is delivered with expertise,
              attention and a personal understanding of you.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.number}
                href="#service-finder"
                className="group relative block overflow-hidden rounded-md bg-[#201C18]"
              >
                <div className="relative aspect-[1.25/1] overflow-hidden sm:aspect-[1.45/1]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-[15px] leading-tight text-white sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 text-[8px] uppercase leading-[1.5] tracking-[0.1em] text-white/80 sm:mt-2 sm:text-xs sm:leading-5 sm:tracking-[0.12em]">
                        {service.description}
                      </p>
                    </div>

                    <span className="mb-1 shrink-0 text-sm text-[#E7C988] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Interactive service finder */}
           <ServiceFinder onOpenModal={() => setIsModalOpen(true)} />
        </div>
      </section>

      {/* SIGNATURE EXPERIENCES */}
      <section className="bg-black px-6 py-20 text-[#F6F2EC] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-accent text-4xl font-normal uppercase leading-[1.1] tracking-[0.02em] sm:text-5xl">
              SIGNATURE <br /> EXPERIENCES
            </h2>
            <p className="max-w-xs font-body text-sm text-white/70 md:text-right">
              Curated treatments for lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            {signatureExperiences.map((exp, idx) => (
              <div key={idx} className="group relative aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="mb-2 font-accent text-2xl uppercase tracking-wider text-white sm:text-3xl">
                    {exp.title}
                  </h3>
                  <p className="mb-1 font-heading text-lg italic text-[#C5A059]">
                    {exp.subtitle}
                  </p>
                  <p className="mb-5 max-w-md font-body text-xs leading-relaxed text-white/70 sm:text-sm">
                    {exp.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-[10px] font-semibold tracking-[0.2em] text-white transition hover:border-[#C5A059] hover:text-[#C5A059]">
                    {exp.link} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ CTA */}
      <section className="bg-black px-6 py-16 text-[#F6F2EC] sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-white/10 bg-[#161616]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
            
            {/* Image */}
            <div className="relative min-h-[300px] lg:min-h-full">
              <img
                src="/images/consultation.jpg" 
                alt="Salon consultation"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
                Our Quiz: What You Book Today?
              </p>
              <h2 className="mb-4 font-accent text-3xl font-normal uppercase leading-[1.15] tracking-[0.02em] sm:text-4xl lg:text-[42px]">
                LET US HELP YOU FIND <br />
                <span className="italic text-[#C5A059]">WHAT'S RIGHT FOR YOU.</span>
              </h2>
              <p className="mb-8 font-body text-sm leading-relaxed text-white/70">
                Answer a few quick questions and we will recommend the perfect services for your needs.
              </p>
              
              <a
                href="#appointment"
                className="mb-8 inline-flex w-fit items-center justify-center bg-[#F6F2EC] px-8 py-3.5 text-[10px] font-bold tracking-[0.15em] !text-black transition hover:bg-[#C5A059]"
              >
                BOOK A CONSULTATION
              </a>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-body text-xs text-white/80">
                  <svg className="h-4 w-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  Personalised Recommendations
                </li>
                <li className="flex items-center gap-3 font-body text-xs text-white/80">
                  <svg className="h-4 w-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  Expert Guidance
                </li>
                <li className="flex items-center gap-3 font-body text-xs text-white/80">
                  <svg className="h-4 w-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  Find Available Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
   
      <section className="overflow-hidden bg-black py-20 text-[#F6F2EC] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-6 text-[10px] font-semibold tracking-[0.3em] text-[#C5A059] uppercase">
            What Our Clients Say
          </p>

          <h2 className="mb-12 font-accent text-4xl font-normal uppercase leading-[1.2] tracking-[0.02em] sm:mb-16 sm:text-5xl">
            <span className="block sm:inline">Loved By </span>
            <span className="block sm:inline">Thousands</span>
          </h2>

          {/* Mobile testimonial carousel */}
          <div
            className="overflow-x-auto pb-5 snap-x snap-mandatory sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={(e) => {
              const el = e.currentTarget;
              const first = el.querySelector("[data-feedback-card]") as HTMLElement | null;
              if (!first) return;

              const cardWidth = first.offsetWidth;
              const gap = 20;
              const index = Math.round(el.scrollLeft / (cardWidth + gap));

              setActiveFeedback(Math.min(index, newTestimonials.length - 1));
            }}
          >
            <div className="flex w-max gap-5 px-[calc((100vw-228px)/2)]">
              {newTestimonials.map((item, idx) => (
                <div
                  key={idx}
                  data-feedback-card
                  className={`flex h-[294px] w-[228px] shrink-0 snap-center flex-col rounded-xl border p-6 text-left transition-all duration-500 ${
                    activeFeedback === idx
                      ? "scale-100 border-[#C5A059]/70 bg-[#34312F] opacity-100 shadow-[0_0_28px_rgba(197,160,89,0.4)]"
                      : "scale-[0.96] border-white/20 bg-[#34312F] opacity-50 shadow-none"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#6A5949] font-accent text-lg text-white">
                      {item.name.split(" ").map((part) => part[0]).join("")}
                    </div>

                    <div className="flex gap-0.5 text-[#C5A059]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="mb-6 flex-1 font-heading text-sm leading-[1.65] text-white/90">
                    "{item.quote}"
                  </p>

                  <p className="font-body text-sm font-semibold text-[#C5A059]">
                    {item.name}
                  </p>

                  <p className="mt-1 font-body text-[11px] text-white/45">
                    Verified Client
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop testimonial grid */}
          <div className="hidden grid-cols-2 gap-5 sm:grid lg:grid-cols-4">
            {newTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex min-h-[270px] flex-col rounded-xl border border-white/10 bg-[#34312F] p-6 text-left"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6A5949] font-accent text-white">
                    {item.name.split(" ").map((part) => part[0]).join("")}
                  </div>

                  <div className="flex gap-0.5 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="mb-6 flex-1 font-heading text-sm italic leading-relaxed text-white/80">
                  "{item.quote}"
                </p>

                <p className="font-body text-xs font-semibold text-[#C5A059]">
                  {item.name}
                </p>
                <p className="mt-1 font-body text-[11px] text-white/45">
                  Verified Client
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#090909] px-6 pt-24 pb-20 text-[#F6F2EC] sm:px-10 lg:px-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          
          {/* Centered Text Content */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-accent text-4xl font-normal uppercase leading-[1.1] tracking-[0.02em] text-[#F6F2EC] sm:text-5xl lg:text-[56px]">
              YOUR NEXT EXPERIENCE <br />
              <span className="mt-2 block italic text-[#C5A059]">
                STARTS HERE.
              </span>
            </h2>

            <p className="mt-6 font-body text-base text-white/90 sm:text-lg">
              Choose your service, your expert and your time.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 inline-flex items-center justify-center gap-3 bg-[#F6F0E5] px-8 py-4 text-xs font-semibold tracking-[0.15em] !text-black transition hover:bg-[#E7C988] hover:!text-black"
            >
              MAKE TIME FOR YOURSELF <span aria-hidden="true" className="!text-black">→</span>
            </button>

            <p className="mt-6 font-heading text-lg italic tracking-wide text-[#C5A059] sm:text-xl">
              Hair · Skin · Beauty · Nails · Wellness · Men
            </p>
          </div>

          <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 overflow-hidden">
            <img
              src="/images/cta.png"
              alt="GLAM Salon Experience"
              className="block h-auto w-full"
            />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceFinder({ onOpenModal }: { onOpenModal: () => void }) {
  const [selectedGoal, setSelectedGoal] = useState("Change my colour");

  const recommendations =
    serviceRecommendations[selectedGoal] ??
    serviceRecommendations["I'm not sure"];

  return (
    <div
      id="service-finder"
      className="mt-16 grid gap-12 border-t border-white/10 pt-16 sm:mt-20 sm:pt-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16"
    >
      {/* Left side */}
      <div className="flex flex-col items-start pt-2">
        <p className="mb-6 text-[10px] font-medium tracking-[0.25em] text-[#B58F55] uppercase">
          Service Finder
        </p>

        <h3 className="mb-6 font-accent text-4xl uppercase leading-[1.1] tracking-[0.02em] text-[#F6F2EC] sm:text-5xl lg:text-[52px]">
          NOT SURE WHAT
          <br />
          TO BOOK?
        </h3>

        <p className="font-body text-sm tracking-wide text-white/70">
          Start with what you'd like to achieve.
        </p>
      </div>

      {/* Right side */}
      <div>
        <p className="mb-6 font-heading text-2xl text-[#F6F2EC] normal-case sm:text-3xl">
          What brings you in today?
        </p>

        {/* Selectable goals */}
        <div className="flex flex-wrap gap-3">
          {serviceFinderOptions.map((option) => {
            const isSelected = selectedGoal === option;

            return (
              <button
                key={option}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedGoal(option)}
                className={`border px-5 py-3 text-sm transition duration-200 ${
                  isSelected
                    ? "border-[#F6F2EC] bg-[#F6F2EC] text-[#111]"
                    : "border-white/40 bg-transparent text-[#F6F2EC] hover:border-white"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* CTA Button positioned above the box */}
        <button
          onClick={onOpenModal}
          className="mt-8 inline-flex items-center justify-center gap-3 bg-[#F6F2EC] px-8 py-4 text-xs font-bold tracking-[0.15em] !text-black transition hover:bg-[#E7C988] hover:!text-black"
        >
          FIND MY EXPERIENCE <span aria-hidden="true" className="!text-black">→</span>
        </button>

        {/* Recommendations Box */}
        <div
          aria-live="polite"
          className="mt-8 overflow-hidden rounded-[16px] border border-white/25 bg-[#1A1A1A] px-6 py-2 sm:px-8 sm:py-4"
        >
          {recommendations.map((item, index) => (
            <div
              key={`${selectedGoal}-${item.title}`}
              className={`py-6 ${
                index !== recommendations.length - 1
                  ? "border-b border-white/15"
                  : ""
              }`}
            >
              <h4 className="font-heading text-xl text-[#F6F2EC] normal-case sm:text-2xl">
                {item.title}
              </h4>

              <p className="mt-1 font-body text-[11px] tracking-wide text-white/50 sm:text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}