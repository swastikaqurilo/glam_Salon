
"use client";

import { useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
}: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm sm:px-6">

      {/* Click outside to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl">

        <div className="p-6 sm:p-10 md:p-12">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white/50 transition hover:text-white"
            aria-label="Close modal"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-8 pr-8">
            <h2 className="font-accent text-3xl leading-[1.1] text-[#F6F2EC] sm:text-4xl md:text-[44px]">
              CHOOSE YOUR SERVICE,
              <br />
              YOUR TIME.
            </h2>

            <p className="mt-3 font-body text-xs text-white/70 sm:text-sm">
              Four quick steps. Your expert will confirm by WhatsApp.
            </p>
          </div>

          {/* Form Box */}
          <div className="rounded-xl border border-white/5 bg-[#141414] p-5 sm:p-8">

            <div className="mb-6 flex items-center">
              <h3 className="font-heading text-lg text-[#F6F2EC]">
                Customer Details
              </h3>
              <div className="ml-4 h-px flex-1 bg-white/10" />
            </div>

            <form
              className="space-y-4 sm:space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Booking submitted!");
                onClose();
              }}
            >

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">

                {/* Full Name */}
                <div>
                  <label className="mb-1.5 block font-body text-[11px] text-white/60">
                    Full Name <span className="text-[#C5A059]">*</span>
                  </label>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>

                    <input
                      type="text"
                      placeholder="Rahul Kumar"
                      required
                      className="w-full rounded-md border border-white/10 bg-[#0a0a0a] py-3 pl-10 pr-4 font-body text-sm text-white placeholder-white/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="mb-1.5 block font-body text-[11px] text-white/60">
                    Mobile Number <span className="text-[#C5A059]">*</span>
                  </label>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>

                    <input
                      type="tel"
                      placeholder="9876543210"
                      required
                      className="w-full rounded-md border border-white/10 bg-[#0a0a0a] py-3 pl-10 pr-4 font-body text-sm text-white placeholder-white/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="mb-1.5 block font-body text-[11px] text-white/60">
                    Email Address (Optional)
                  </label>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>

                    <input
                      type="email"
                      placeholder="rahul@gmail.com"
                      className="w-full rounded-md border border-white/10 bg-[#0a0a0a] py-3 pl-10 pr-4 font-body text-sm text-white placeholder-white/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F6F2EC] px-8 py-3.5 font-body text-[11px] font-bold tracking-[0.15em] text-[#090909] transition hover:bg-[#C5A059]"
                >
                  BOOK APPOINTMENT
                  <span aria-hidden="true" className="text-sm">→</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
