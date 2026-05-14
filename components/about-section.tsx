import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto aspect-square w-full max-w-[360px]">
          <div className="absolute -left-8 top-8 hidden h-[78%] w-[78%] bg-[radial-gradient(#d9d9d9_1px,transparent_1px)] [background-size:8px_8px] md:block" />
          <div className="relative h-full overflow-hidden rounded-full bg-zinc-100 shadow-[0_28px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/brand/about-event.webp"
              alt="Prepared event food at an Elevation Events experience"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 320px, 360px"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-normal text-[#24242c] md:text-4xl">
            About The{" "}
            <span className="font-light italic text-primary">Elevation Events</span>
          </h2>
          <div className="mt-4 h-0.5 w-14 bg-primary" />

          <p className="mt-7 text-base leading-7 text-[#55565c]">
            Elevation Events Limited is a Kampala-based event production and
            experiential marketing company. We design, produce and manage
            consumer lifestyle events, corporate engagements, government forums,
            industry expos and entertainment experiences.
          </p>
          <p className="mt-5 text-sm leading-7 text-[#77787f] md:text-base">
            From the East African Meat Carnival to national industry expos and
            policy roundtables, our work is built around strong production,
            clear audience strategy and memorable guest experiences across East
            Africa.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-primary px-8 text-sm uppercase tracking-[0.02em] text-white transition hover:-translate-y-0.5 hover:bg-[#e64f00]"
            >
              Work With Us
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center border border-[#dedede] px-8 text-sm uppercase tracking-[0.02em] text-[#24242c] transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
