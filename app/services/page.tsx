import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    title: "Expos & Trade Fairs",
    description:
      "End-to-end management of industry expos and trade fairs, from floor planning and exhibitor management to programme design, delegate registration, B2B matchmaking and reporting.",
  },
  {
    title: "Government & MDA Events",
    description:
      "Policy forums, stakeholder consultations, public engagement events, regulatory dialogues and inter-ministerial conferences delivered with the professionalism public sector work demands.",
  },
  {
    title: "Corporate Events",
    description:
      "Product launches, annual dinners, staff events, investor briefings, client hospitality and award ceremonies produced to a standard that reflects well on your organisation.",
  },
  {
    title: "Conferences & Symposia",
    description:
      "Multi-day knowledge events with speaker programmes, breakout sessions, sponsor activations and delegate management handled end to end.",
  },
  {
    title: "Exhibition Management",
    description:
      "Design and management of exhibition stands, pavilions and branded spaces at third-party expos and events.",
  },
  {
    title: "Brand Activations & Sponsorship",
    description:
      "Strategic sponsorship partnerships and on-ground activations that connect brands with the right audiences.",
  },
];

const process = [
  ["01", "Understand", "We clarify objectives, audience, stakeholders and outcomes."],
  ["02", "Design", "We shape the concept, programme, site plan and commercial model."],
  ["03", "Deliver", "We execute the event day details while keeping teams and partners aligned."],
];

const recentWork = [
  "Uganda Sustainable Wood Value Chain & Innovation Expo 2026",
  "Regulators' Roundtable",
  "Christmas in the Sky",
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-[#292936] px-5 pb-20 pt-[132px] text-white md:px-10 md:pb-24 md:pt-[176px]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-primary">What We Do</p>
            <h1 className="mt-5 text-4xl font-light uppercase leading-tight md:text-6xl">
              Expos, exhibitions and corporate events
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75">
              Beyond our own event properties, Elevation Events provides full-service event management for expos,
              exhibitions, trade fairs and corporate events across Uganda and East Africa.
            </p>
          </div>
        </section>

        <section className="bg-[#f7f7f9] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[#24242c] md:text-4xl">
              What We <span className="font-light italic text-primary">Deliver</span>
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-14 bg-primary" />
            <p className="mt-6 text-base leading-8 text-[#696a72]">
              We work with ministries, development partners, professional associations, corporates and industry bodies
              to deliver events that achieve objectives, not just fill rooms.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="border border-[#e7e7ea] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              >
                <p className="text-sm font-semibold text-primary">0{index + 1}</p>
                <h3 className="mt-6 text-xl font-semibold text-[#24242c]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#696a72]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[#24242c] md:text-4xl">
                Our <span className="font-light italic text-primary">Approach</span>
              </h2>
              <div className="mt-4 h-0.5 w-14 bg-primary" />
              <p className="mt-6 text-base leading-8 text-[#696a72]">
                The process is simple, but disciplined: understand the goal, design the experience and deliver the
                details.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {process.map(([step, title, desc]) => (
                <article key={step} className="bg-[#292936] p-7 text-white">
                  <p className="text-primary">{step}</p>
                  <h3 className="mt-10 text-xl font-light">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f9] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-semibold text-[#24242c] md:text-4xl">
              Recent <span className="font-light italic text-primary">Work</span>
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-14 bg-primary" />
            <div className="mt-12 space-y-4">
              {recentWork.map((item) => (
                <div key={item} className="border-l-4 border-primary bg-white p-6 text-[#24242c] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-5 py-16 text-center text-white md:px-10">
          <h2 className="text-3xl font-light md:text-4xl">Let's work together</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Tell us what you need to achieve and we will shape the right event route.
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
