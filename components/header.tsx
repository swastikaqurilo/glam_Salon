
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/#home", path: "/" },
  { label: "SERVICES", href: "/services", path: "/services" },
  { label: "SALON", href: "/salon", path: "/salon" },
  { label: "OUR GALLERY", href: "/gallery", path: "/gallery" },
];

export default function Header({
  onBookClick,
}: {
  onBookClick?: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-50 border-b border-white/15 bg-black/15">
      <div className="flex min-h-16 w-full items-center justify-between gap-3 px-5 sm:min-h-20 sm:px-0">

        {/* Logo */}
        <Link
          href="/"
          aria-label="The Glam Salon home"
          onClick={closeMenu}
          className="ml-0 shrink-0 sm:ml-20 lg:ml-24"
        >
          <img
            src="/images/logo.png"
            alt="The Glam Salon"
            className="h-10 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-12 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-['Cinzel',serif] text-[13px] font-medium tracking-[0.15em] transition-colors duration-300 ${
                pathname === link.path
                  ? "!text-[#F6F2EC]"
                  : "!text-[#B4B4B4] hover:!text-[#F6F2EC]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden shrink-0 items-center gap-3 pr-8 lg:flex">
          <Link
            href="/academy"
            className="inline-flex items-center gap-2.5 rounded-md border border-[#C5A059] bg-[#2b0505] px-5 py-2.5 font-heading text-[11px] font-medium tracking-[0.15em] text-[#C5A059] transition hover:bg-[#3a0606]"
          >
            ALPS ACADEMY
          </Link>

          <button
            onClick={onBookClick}
            className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-md bg-[#B58F55] px-5 py-2.5 font-heading text-xs font-medium tracking-[0.15em] text-[#090909] transition hover:bg-[#C5A059]"
          >
            BOOK APPOINTMENT
            <span aria-hidden="true" className="text-sm">→</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-sidebar"
          className="flex h-10 w-10 items-center justify-center text-[#F6F2EC] transition hover:text-[#C5A059] lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/70 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <aside
        id="mobile-sidebar"
        aria-label="Mobile navigation menu"
        aria-hidden={!isMenuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(82vw,340px)] flex-col border-l border-[#C5A059]/30 bg-[#100D0A] px-7 py-8 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="mb-14 flex items-center justify-between">
          <img
            src="/images/logo.png"
            alt="The Glam Salon"
            className="h-11 w-auto object-contain"
          />

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-[#C5A059]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <p className="mb-7 font-heading text-[10px] tracking-[0.3em] text-[#C5A059]">
          EXPLORE THE GLAM
        </p>

        <nav className="flex flex-col">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-white/10 py-5 font-['Cinzel',serif] text-sm tracking-[0.12em] transition-colors duration-300 hover:text-[#C5A059] ${
                  pathname === "/"
                    ? "text-white/90"
                    : isActive
                      ? "text-white"
                      : "text-white/40"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[#C5A059]">→</span>
              </Link>
            );
          })}

          <Link
            href="/academy"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-white/10 py-5 font-['Cinzel',serif] text-sm tracking-[0.12em] text-[#C5A059] transition hover:text-white"
          >
            <span>ALPS ACADEMY</span>
            <span>→</span>
          </Link>
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-auto border-t border-white/10 pt-6">
          <p className="font-heading text-sm italic text-white/55">
            Hair · Skin · Beauty · Nails · Wellness · Men
          </p>
        </div>
      </aside>
    </header>
  );
}
