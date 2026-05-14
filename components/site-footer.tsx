import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#292936] px-5 py-16 text-white md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <Link
          href="/"
          className="flex min-h-20 w-full max-w-[300px] items-center justify-center bg-white px-8 shadow-[0_18px_48px_rgba(0,0,0,0.18)]"
          aria-label="Elevation Events home"
        >
          <Image
            src="/brand/elevation-logo.webp"
            alt="Elevation Events"
            width={240}
            height={39}
            className="h-auto w-full"
          />
        </Link>
        <p className="mt-8 max-w-xl text-sm leading-7 text-white/70">
          Event Production & Experiential Marketing from Kampala to East Africa.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {["in", "x", "ig", "fb"].map((item) => (
            <Link
              key={item}
              href="#"
              className="flex h-11 w-11 items-center justify-center bg-white text-xs font-semibold uppercase text-[#292936] transition hover:bg-primary hover:!text-white"
            >
              {item}
            </Link>
          ))}
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.12em] text-white/50">
          Copyright {currentYear} Elevation Events Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
