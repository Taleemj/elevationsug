import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const events = [
  {
    title: "East African Meat Carnival",
    tagline: "Where East Africa Eats, Drinks & Celebrates",
    description:
      "Kampala's premier quarterly food and culture festival, celebrating East Africa's culinary traditions, live music and community spirit.",
    meta: ["Quarterly", "Tales Bar & Lounge, Bukoto", "3,000+ guests"],
    image: "/brand/about-event.webp",
    href: "/events/east-african-meat-carnival",
  },
  {
    title: "4th Floor",
    tagline: "Good Music. Good People. Good Evening.",
    description:
      "A quarterly corporate social evening for Kampala's professional class, curated for conversation, music and relaxed networking.",
    meta: ["Quarterly", "Bukoto", "250-300 professionals"],
    image: "/brand/networking-event.webp",
    href: "/events/4th-floor",
  },
  {
    title: "Uganda Wood Expo 2026",
    tagline: "Showcasing Progress. Driving Value Addition.",
    description:
      "A national industry expo hosted by the Ministry of Water and Environment and co-hosted by the Ministry of Trade, Industry and Cooperatives.",
    meta: ["June 2026", "Speke Resort Munyonyo", "120 exhibitors"],
    image: "/brand/conference-event.webp",
    href: "/events/wood-expo",
  },
  {
    title: "Regulators' Roundtable",
    tagline: "Bridging Regulation, Investment and Employment",
    description:
      "Uganda's monthly platform for open dialogue between regulatory institutions and the public, broadcast on UBC TV.",
    meta: ["Monthly", "Kampala", "25+ regulatory bodies"],
    image: "/brand/awards-event.webp",
    href: "/events/regulators-roundtable",
  },
  {
    title: "Christmas in the Sky",
    tagline: "An Evening Above the City",
    description:
      "A premium live concert experience at Skyz Hotel Protea, Naguru, produced for Kampala's music lovers.",
    meta: ["December 2025", "Skyz Hotel Protea", "Live concert"],
    image: "/brand/news-event.webp",
    href: "/events/christmas-in-the-sky",
  },
];

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-[#292936] px-5 pb-20 pt-[132px] text-white md:px-10 md:pb-24 md:pt-[176px]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-primary">Portfolio</p>
            <h1 className="mt-5 text-4xl font-light uppercase leading-tight md:text-6xl">Our events</h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75">
              Our portfolio spans consumer lifestyle, government and public sector, industry and entertainment. Attend,
              exhibit, sponsor or partner.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl space-y-8">
            {events.map((event, index) => (
              <article
                key={event.title}
                className="grid cursor-pointer overflow-hidden border border-[#e5e5e8] bg-white shadow-sm md:grid-cols-[0.42fr_0.58fr]"
              >
                <div className="relative min-h-[280px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute left-6 top-6 bg-primary px-4 py-3 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                </div>
                <div className="p-7 md:p-10">
                  <p className="text-sm italic text-primary">{event.tagline}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#24242c] md:text-3xl">{event.title}</h2>
                  <p className="mt-5 text-base leading-8 text-[#64656d]">{event.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {event.meta.map((item) => (
                      <span
                        key={item}
                        className="border border-[#e5e5e8] px-4 py-2 text-xs uppercase tracking-[0.05em] text-[#77787f]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div
                    className="mt-8 inline-flex min-h-12 items-center justify-center bg-primary px-7 text-sm uppercase tracking-[0.02em] !text-white transition hover:bg-[#24242c]"
                  >
                    Learn More
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-primary px-5 py-16 text-center text-white md:px-10">
          <h2 className="text-3xl font-light md:text-4xl">Attend, exhibit, sponsor or partner</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            There is a place for you in what we do.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center bg-white px-8 text-sm uppercase tracking-[0.02em] text-[#24242c] transition hover:bg-[#24242c] hover:text-white"
          >
            Get in Touch
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
