import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./site-footer";

const services = [
  {
    label: "01",
    title: "Original Event Properties",
    description:
      "We conceive and own recurring event brands, from festivals and social evenings to industry platforms that grow in value edition after edition.",
  },
  {
    label: "02",
    title: "Corporate & Government Events",
    description:
      "We manage high-stakes events for companies, ministries, agencies, regulators and development partners that need polished execution.",
  },
  {
    label: "03",
    title: "Expos & Exhibitions",
    description:
      "We design and deliver large-scale trade expos, exhibitor programmes, pavilions, delegate journeys and B2B engagement formats.",
  },
  {
    label: "04",
    title: "Brand Activations & Sponsorship",
    description:
      "We connect brands with the right audiences through sponsorship strategy, on-ground activations and measurable event partnerships.",
  },
];

const stats = [
  ["5+", "Years producing events"],
  ["3,000+", "Guests at flagship consumer events"],
  ["4,000", "Expected visitors at Wood Expo 2026"],
  ["120", "Exhibiting organisations"],
];

const events = [
  {
    title: "East African Meat Carnival",
    tag: "Food, culture and live music",
    image: "/brand/about-event.webp",
    href: "/events/east-african-meat-carnival",
  },
  {
    title: "4th Floor",
    tag: "Quarterly corporate social evening",
    image: "/brand/networking-event.webp",
    href: "/events/4th-floor",
  },
  {
    title: "Uganda Wood Expo 2026",
    tag: "Industry expo and innovation showcase",
    image: "/brand/conference-event.webp",
    href: "/events/wood-expo",
  },
  {
    title: "Regulators' Roundtable",
    tag: "Monthly public policy dialogue",
    image: "/brand/awards-event.webp",
    href: "/events/regulators-roundtable",
  },
];

const news = [
  {
    title: "5 Key Trends Shaping Corporate Events in 2026",
    meta: "Events",
    image: "/brand/news-event.webp",
    href: "/news/corporate-event-trends-2024",
  },
  {
    title: "How GRC Can Drive Business Success in Uganda",
    meta: "Insights",
    image: "/brand/conference-event.webp",
    href: "/news/grc-business-success-uganda",
  },
  {
    title: "The Evolution of Corporate Trivia Events in East Africa",
    meta: "Culture",
    image: "/brand/networking-event.webp",
    href: "/news/evolution-corporate-trivia-east-africa",
  },
];

export function LandingSections() {
  return (
    <>
      <ServicesSection />
      <NumbersAndRegisterSection />
      <EventsSection />
      <SponsorSection />
      <NewsSection />
      <NewsletterSection />
      <ContactMapSection />
      <SiteFooter />
    </>
  );
}

function SectionHeading({
  title,
  accent,
  description,
  align = "center",
  tone = "light",
}: {
  title: string;
  accent: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2
        className={`text-3xl font-semibold tracking-normal md:text-4xl ${
          tone === "dark" ? "text-white" : "text-[#24242c]"
        }`}
      >
        {title} <span className="font-light italic text-primary">{accent}</span>
      </h2>
      <div
        className={`mt-4 h-0.5 w-14 bg-primary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`mt-6 text-sm leading-7 md:text-base ${
            tone === "dark" ? "text-white/75" : "text-[#77787f]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="bg-[#f6f6f8] px-5 py-20 md:px-10 md:py-28">
      <SectionHeading
        title="What We"
        accent="Deliver"
        description="We produce events that bring people, institutions and brands together with clear purpose: stronger communities, better conversations, visible partners and memorable guest experiences."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="group border border-[#e7e7ea] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center bg-[#24242c] text-sm font-semibold text-white transition group-hover:bg-primary">
              {service.label}
            </div>
            <h3 className="text-xl font-semibold text-[#24242c]">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#696a72]">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NumbersAndRegisterSection() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative bg-primary px-5 py-20 text-white md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,90,0,0.92),rgba(255,90,0,0.92)),url('/brand/event-hero.webp')] bg-cover bg-center" />
        <div className="relative mx-auto grid max-w-xl grid-cols-2 gap-px bg-white/20">
          {stats.map(([value, label]) => (
            <div key={label} className="min-h-40 bg-primary/70 p-8 text-center">
              <p className="text-4xl font-light">{value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.04em]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-[#252535] px-5 py-20 text-white md:px-10 lg:px-16">
        <Image
          src="/brand/awards-event.webp"
          alt="Corporate awards event"
          fill
          className="object-cover opacity-25"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="relative mx-auto max-w-xl">
          <SectionHeading
            title="Start Your"
            accent="Brief"
            align="left"
            tone="dark"
            description="Looking to sponsor, exhibit, launch, host or produce an event? Share the essentials and our team will help shape the right event plan."
          />
          <form className="mt-8 grid gap-5 sm:grid-cols-2">
            <input
              aria-label="Your name"
              className="h-14 border border-white/35 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/70 focus:border-primary"
              placeholder="Your Name"
              type="text"
            />
            <input
              aria-label="Email"
              className="h-14 border border-white/35 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/70 focus:border-primary"
              placeholder="Email"
              type="email"
            />
            <input
              aria-label="Phone"
              className="h-14 border border-white/35 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/70 focus:border-primary"
              placeholder="Phone"
              type="tel"
            />
            <select
              aria-label="Enquiry type"
              className="h-14 border border-white/35 bg-transparent px-5 text-sm text-white outline-none focus:border-primary"
              defaultValue=""
            >
              <option value="" disabled className="text-[#24242c]">
                Enquiry Type
              </option>
              <option className="text-[#24242c]">Sponsorship</option>
              <option className="text-[#24242c]">Exhibition</option>
              <option className="text-[#24242c]">Managed Event</option>
            </select>
            <button className="h-14 bg-white px-8 text-sm uppercase tracking-[0.02em] text-[#24242c] transition hover:bg-primary hover:!text-white sm:w-max">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-28">
      <SectionHeading
        title="Our"
        accent="Events"
        description="From Kampala lifestyle audiences to national industry stakeholders and public policy conversations, our event properties are built for real participation and lasting value."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-7 md:grid-cols-2 xl:grid-cols-4">
        {events.map((event) => (
          <div
            key={event.title}
            className="group cursor-pointer border border-[#e5e5e8] bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-sm italic text-primary">{event.tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-[#24242c]">{event.title}</h3>
              <p className="mt-5 text-sm uppercase tracking-[0.06em] text-[#77787f]">
                Learn More
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SponsorSection() {
  const sponsors = ["GCIC", "UBC TV", "MoTIV", "Tales Bar", "Skyz Hotel", "Wood Expo"];

  return (
    <section className="bg-[#f7f7f9] px-5 py-20 md:px-10 md:py-28">
      <SectionHeading
        title="Our"
        accent="Partners"
        description="We work with institutions, venues, media platforms and brands that want credible visibility, engaged audiences and well-produced public experiences."
      />
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-3">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor}
            className="flex h-28 items-center justify-center bg-white px-6 text-center text-lg font-semibold tracking-[0.04em] text-[#24242c] shadow-sm"
          >
            {sponsor}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center bg-primary px-8 text-sm uppercase tracking-[0.02em] !text-white transition hover:-translate-y-0.5 hover:bg-[#e64f00]"
        >
          Become a Partner
        </Link>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-28">
      <SectionHeading
        title="Elevation"
        accent="News"
        description="Updates, ideas and industry notes from the events, corporate engagement and public sector spaces we work in."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-7 md:grid-cols-3">
        {news.map((item) => (
          <div
            key={item.title}
            className="group cursor-pointer border border-[#e5e5e8] bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute bottom-4 left-6 bg-primary px-5 py-3 text-center text-sm uppercase tracking-[0.04em] text-white">
                {item.meta}
              </div>
            </div>
            <div className="px-6 pb-7 pt-6">
              <h3 className="text-lg font-medium leading-7 text-[#24242c]">{item.title}</h3>
              <p className="mt-6 border-t border-[#e7e7ea] pt-5 text-sm uppercase tracking-[0.06em] text-[#77787f]">
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="bg-[#5a536d] px-5 py-14 text-white md:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-light md:text-4xl">
            Subscribe to Our <span className="italic text-primary">Newsletter</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/80">
            Get event announcements, partnership opportunities and industry updates.
          </p>
        </div>
        <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <input
            aria-label="Email address"
            className="h-14 border-0 bg-white px-5 text-[#24242c] outline-none placeholder:text-[#8a8a92]"
            placeholder="Email"
            type="email"
          />
          <button className="h-14 bg-primary px-10 text-sm uppercase tracking-[0.02em] !text-white transition hover:bg-[#e64f00]">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactMapSection() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#dfe2e6]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7469453074673!2d32.589945611577356!3d0.3427163996524771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbae151de3a7%3A0xb691a00fa06cca39!2sAfrica%20Elevation!5e0!3m2!1sen!2sug!4v1778766465477!5m2!1sen!2sug"
        title="Africa Elevation location map"
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute inset-0 bg-white/15" />

      <div className="relative mx-auto flex min-h-[520px] max-w-6xl items-center px-5 py-16 md:px-10">
        <div className="w-full max-w-sm bg-primary p-8 text-white shadow-[0_28px_70px_rgba(0,0,0,0.18)] md:p-10">
          <h2 className="text-2xl font-light">Elevation Events Limited</h2>
          <div className="mt-6 space-y-4 text-sm leading-6">
            <p>Plot 83, Bukoto Street, Kampala, Uganda</p>
            <p>
              <a href="tel:+256782164714" className="text-white hover:text-white/75">
                +256 782 164 714
              </a>
            </p>
            <p>
              <a
                href="mailto:info@elevationevents.co.ug"
                className="text-white hover:text-white/75"
              >
                info@elevationevents.co.ug
              </a>
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center bg-white px-8 text-sm uppercase tracking-[0.02em] !text-[#24242c] transition hover:bg-[#24242c] hover:!text-white"
          >
            Get Direction
          </Link>
        </div>
      </div>
    </section>
  );
}
