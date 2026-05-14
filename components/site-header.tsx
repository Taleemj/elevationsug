"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Services", href: "/services" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 grid h-[76px] grid-cols-[1fr_auto] items-stretch border-b border-[#e8e8e8] bg-white md:h-[88px] md:grid-cols-[1fr_auto_auto] xl:h-[104px] xl:grid-cols-[minmax(260px,420px)_1fr_minmax(210px,310px)]">
      <div className="flex items-center px-5 md:border-r md:border-[#dedede] md:px-6 xl:px-[clamp(24px,4vw,62px)]">
        <Link
          href="/"
          className="block w-full max-w-[170px] leading-none md:max-w-[190px] xl:max-w-[250px]"
          aria-label="Elevation Events home"
        >
          <Image
            src="/brand/elevation-logo.webp"
            alt="Elevation Events"
            width={384}
            height={62}
            priority
          />
        </Link>
      </div>

      <nav
        className="hidden items-center justify-center gap-[clamp(16px,2vw,32px)] px-6 xl:flex"
        aria-label="Primary navigation"
      >
        {navItems.map((item, index) => (
          <span
            className="inline-flex items-center gap-[clamp(16px,2vw,30px)] whitespace-nowrap text-[clamp(0.92rem,1vw,1.08rem)] text-[#17171b]"
            key={item.href}
          >
            <Link
              className={`transition hover:-translate-y-px hover:text-primary ${
                index === 0 ? "text-primary" : ""
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
            {index < navItems.length - 1 && <span aria-hidden="true">/</span>}
          </span>
        ))}
      </nav>

      <Link
        href="/contact"
        className="hidden items-center justify-center gap-6 bg-primary px-8 text-[clamp(0.95rem,1.2vw,1.25rem)] uppercase tracking-[0.02em] text-white md:flex md:min-w-[162px]"
      >
        <span
          className="hidden h-10 items-center border-r border-white/40 pr-6 xl:flex"
          aria-hidden="true"
        >
          <span className="relative block h-[22px] w-[34px] -rotate-[35deg] border-2 border-white before:absolute before:left-[-7px] before:top-[5px] before:h-2 before:w-2 before:rounded-full before:border-2 before:border-white before:bg-primary before:content-[''] after:absolute after:right-[-7px] after:top-[5px] after:h-2 after:w-2 after:rounded-full after:border-2 after:border-white after:bg-primary after:content-['']" />
        </span>
        <span>Book Event</span>
      </Link>

      <button
        className="flex w-[74px] cursor-pointer flex-col items-center justify-center gap-[5px] border-0 border-l border-[#e5e5e5] bg-white p-0 md:w-[82px] xl:hidden"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="block h-0.5 w-7 bg-[#24242c]" />
        <span className="block h-0.5 w-7 bg-[#24242c]" />
        <span className="block h-0.5 w-7 bg-[#24242c]" />
      </button>

      <nav
        id="mobile-nav"
        className={`col-span-full border-t border-[#e8e8e8] bg-white px-5 pb-6 pt-2 shadow-[0_20px_32px_rgba(0,0,0,0.08)] ${
          isOpen ? "grid" : "hidden"
        } xl:hidden`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-b border-[#eeeeee] py-3.5 text-[#232327]"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="mt-4 bg-primary px-5 py-4 text-center uppercase text-white"
          href="/contact"
          onClick={() => setIsOpen(false)}
        >
          Book Event
        </Link>
      </nav>
    </header>
  );
}
