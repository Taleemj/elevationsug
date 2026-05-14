import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const approach = [
  {
    title: "Purpose first.",
    description:
      "Every event starts with a clear answer to what it is supposed to achieve: entertainment, commerce, policy change, community building or brand growth.",
  },
  {
    title: "Details win.",
    description:
      "Lighting, flow, guest arrival, stage timing and partner visibility all shape how the room feels. We treat those details as the work.",
  },
  {
    title: "Commercial discipline.",
    description:
      "Events are also businesses. We build sustainable revenue models, sponsor propositions and cost structures that make sense.",
  },
  {
    title: "Partnerships that last.",
    description:
      "We build long-term relationships with venues, sponsors, government partners and clients so every edition gets sharper.",
  },
];

const values = ["Excellence", "Integrity", "Innovation", "Community"];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Who We Are"
          title="Purpose-driven event production from Kampala"
          description="Elevation Events Limited designs, produces and manages consumer lifestyle events, corporate engagements, government forums, industry expos and entertainment experiences across East Africa."
        />

        <section className="bg-white px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src="/brand/conference-event.webp"
                alt="Elevation Events conference audience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211529]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-primary px-6 py-4 text-white">
                <p className="text-3xl font-light">5+</p>
                <p className="text-xs uppercase tracking-[0.08em]">
                  Years producing events
                </p>
              </div>
            </div>

            <div>
              <SectionTitle title="Our" accent="Story" align="left" />
              <div className="mt-8 space-y-5 text-base leading-8 text-[#64656d]">
                <p>
                  Elevation Events Limited was established with a conviction
                  that Uganda deserved better events: not just better organised
                  events, but experiences with purpose behind them and real
                  value for the people in the room.
                </p>
                <p>
                  We started with consumer events for Kampala's growing urban
                  audience, then expanded into policy forums, public engagement,
                  trade expos and live entertainment. That range now defines how
                  we work.
                </p>
                <p>
                  We can produce a food and culture festival for thousands on
                  one hand, and a national industry expo hosted by government
                  ministries on the other. That range is intentional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f9] px-5 py-20 md:px-10 md:py-28">
          <SectionTitle
            title="Our"
            accent="Approach"
            description="The work starts before the event day. We clarify objectives, design the guest journey, build the commercial model and execute the details."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
            {approach.map((item) => (
              <article
                key={item.title}
                className="border-l-4 border-primary bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#24242c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#696a72]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionTitle title="Mission &" accent="Vision" align="left" />
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                <InfoPanel
                  label="Mission"
                  text="To create dynamic, purpose-driven events that deliver real value for attendees, clients, sponsors and the communities and industries we serve."
                />
                <InfoPanel
                  label="Vision"
                  text="To be a leading event production company in East Africa, known for original event properties, professional execution and events that matter beyond the night they happen."
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="flex min-h-36 flex-col justify-between bg-[#292936] p-6 text-white"
                >
                  <span className="text-sm text-primary">0{index + 1}</span>
                  <h3 className="text-xl font-light">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}

function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#292936] px-5 pb-20 pt-[132px] text-white md:px-10 md:pb-24 md:pt-[176px]">
      <Image
        src="/brand/event-hero.webp"
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.16em] text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-light uppercase leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75">
          {description}
        </p>
      </div>
    </section>
  );
}

function SectionTitle({
  title,
  accent,
  description,
  align = "center",
}: {
  title: string;
  accent: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <h2 className="text-3xl font-semibold text-[#24242c] md:text-4xl">
        {title} <span className="font-light italic text-primary">{accent}</span>
      </h2>
      <div
        className={`mt-4 h-0.5 w-14 bg-primary ${align === "center" ? "mx-auto" : ""}`}
      />
      {description && (
        <p className="mt-6 text-sm leading-7 text-[#77787f] md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoPanel({ label, text }: { label: string; text: string }) {
  return (
    <article className="border border-[#e7e7ea] bg-white p-7 shadow-sm">
      <p className="text-sm uppercase tracking-[0.12em] text-primary">
        {label}
      </p>
      <p className="mt-4 text-base leading-8 text-[#64656d]">{text}</p>
    </article>
  );
}

function CTASection() {
  return (
    <section className="bg-primary px-5 py-16 text-center text-white md:px-10">
      <h2 className="text-3xl font-light md:text-4xl">Let's work together</h2>
      <p className="mx-auto mt-4 max-w-2xl text-white/85">
        Tell us what you need to achieve and we will tell you how we can make it
        happen.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-flex min-h-12 items-center justify-center bg-white px-8 text-sm uppercase tracking-[0.02em] !text-[#24242c] transition hover:bg-[#24242c] hover:text-white"
      >
        Get in Touch
      </Link>
    </section>
  );
}
