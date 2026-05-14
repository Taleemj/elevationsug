import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] overflow-hidden bg-[linear-gradient(90deg,rgba(35,8,35,0.82)_0%,rgba(68,18,55,0.72)_42%,rgba(7,9,45,0.82)_100%),linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.48)_100%),url('/brand/event-hero.webp')] bg-cover bg-center px-5 pb-20 pt-[132px] md:min-h-[760px] md:px-[clamp(24px,6vw,170px)] md:pb-24 md:pt-[176px] xl:min-h-[780px] xl:pt-[188px]"
      aria-label="Elevation Events introduction"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 top-[76px] z-[1] w-[64vw] opacity-40 md:top-[88px] md:w-[min(33vw,440px)] xl:top-[104px]"
        aria-hidden="true"
      >
        <span className="absolute left-[72px] top-[34px] block rotate-[24deg] border-x-[78px] border-b-[124px] border-l-[48px] border-x-transparent border-b-white/45" />
        <span className="absolute left-[-22px] top-[188px] block -rotate-12 border-y-[86px] border-r-[136px] border-b-[24px] border-y-transparent border-r-primary/40" />
        <span className="absolute bottom-[180px] left-[50px] block -rotate-[31deg] border-x-[58px] border-b-[94px] border-l-[72px] border-x-transparent border-b-white/35" />
        <span className="absolute bottom-[52px] left-[-18px] block rotate-[18deg] border-x-[44px] border-t-[148px] border-l-[86px] border-x-transparent border-t-white/25" />
      </div>

      <div className="relative z-[2] max-w-[980px] text-white">
        <p className="mb-7 text-[clamp(1rem,1.4vw,1.42rem)] text-white/60">
          Based in Kampala. Operating across East Africa.
        </p>
        <h1 className="m-0 text-[clamp(3.3rem,18vw,5.2rem)] font-normal uppercase leading-[0.92] tracking-normal md:text-[clamp(4.3rem,8.1vw,9.8rem)]">
          <span className="block font-medium text-primary">We Create</span>
          <em className="mt-4 block text-[clamp(2.35rem,12vw,3.7rem)] font-light not-italic text-white md:mt-[22px] md:text-[clamp(3.25rem,6.2vw,7.4rem)] md:italic">
            Experiences That Matter
          </em>
        </h1>
        <p className="mt-4 max-w-[720px] text-base leading-normal text-white/90 md:mt-[20px] md:text-[clamp(1.08rem,1.6vw,1.58rem)] md:leading-normal">
          Event production, experiential marketing, expos, festivals and
          strategic forums.
        </p>
        <Link
          href="/events"
          className="mt-[54px] inline-flex min-h-[58px] w-full items-center justify-center bg-white px-8 text-[clamp(0.95rem,1.1vw,1.16rem)] uppercase tracking-[0.02em] !text-[#292929] transition hover:-translate-y-0.5 hover:bg-primary hover:!text-white md:min-h-16 md:w-auto md:min-w-[222px]"
        >
          Explore Our Events
        </Link>
      </div>
    </section>
  );
}
