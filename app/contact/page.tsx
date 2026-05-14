import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const enquiryTypes = [
  "Sponsorship & Brand Partnership",
  "Table Bookings",
  "Exhibitor & Booth Bookings",
  "Corporate & Managed Events",
  "General Enquiries",
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-[#292936] px-5 pb-20 pt-[132px] text-white md:px-10 md:pb-24 md:pt-[176px]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-primary">Contact</p>
            <h1 className="mt-5 text-4xl font-light uppercase leading-tight md:text-6xl">Talk to us</h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75">
              Sponsor an event, book a table, exhibit at an expo, brief us on a managed event or ask about what we do.
            </p>
          </div>
        </section>

        <section className="relative min-h-[520px] overflow-hidden bg-[#dfe2e6]">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_0_47%,rgba(255,255,255,0.72)_47%_50%,transparent_50%_100%),linear-gradient(120deg,transparent_0_44%,rgba(255,255,255,0.62)_44%_48%,transparent_48%_100%),linear-gradient(0deg,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[length:520px_520px,620px_620px,58px_58px,58px_58px]" />
          <div className="absolute left-[58%] top-[44%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
            <div className="relative h-10 w-10 rounded-full bg-primary before:absolute before:left-1/2 before:top-[28px] before:h-5 before:w-5 before:-translate-x-1/2 before:rotate-45 before:bg-primary before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white after:content-['']" />
          </div>
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
                  <a href="mailto:info@elevationevents.co.ug" className="text-white hover:text-white/75">
                    info@elevationevents.co.ug
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.elevationevents.co.ug"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-white/75"
                  >
                    www.elevationevents.co.ug
                  </a>
                </p>
              </div>
              <Link
                href="https://maps.google.com/?q=Plot%2083%20Bukoto%20Street%20Kampala%20Uganda"
                className="mt-8 inline-flex min-h-12 items-center justify-center bg-white px-8 text-sm uppercase tracking-[0.02em] text-[#24242c] transition hover:bg-[#24242c] hover:text-white"
              >
                Get Direction
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[#24242c] md:text-4xl">
                Send Us a <span className="font-light italic text-primary">Message</span>
              </h2>
              <div className="mt-4 h-0.5 w-14 bg-primary" />
              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field id="name" label="Name" />
                  <Field id="email" label="Email" type="email" />
                </div>
                <label className="grid gap-2 text-sm font-medium text-[#24242c]" htmlFor="enquiry">
                  Enquiry Type
                  <select
                    id="enquiry"
                    className="h-14 border border-[#d9d9df] bg-white px-4 text-sm text-[#64656d] outline-none focus:border-primary"
                  >
                    {enquiryTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#24242c]" htmlFor="message">
                  Message
                  <textarea
                    id="message"
                    rows={6}
                    className="border border-[#d9d9df] bg-white p-4 text-sm text-[#64656d] outline-none focus:border-primary"
                  />
                </label>
                <button className="min-h-14 bg-primary px-8 text-sm uppercase tracking-[0.02em] text-white transition hover:bg-[#24242c] md:w-max">
                  Send Message
                </button>
              </form>
            </div>

            <aside className="bg-[#f7f7f9] p-7 md:p-10">
              <h3 className="text-2xl font-semibold text-[#24242c]">Enquiry Types</h3>
              <div className="mt-7 space-y-4">
                {enquiryTypes.map((type) => (
                  <div key={type} className="border-l-4 border-primary bg-white p-5 text-sm text-[#64656d]">
                    {type}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-7 text-[#77787f]">
                We aim to respond to all enquiries within 24 hours on business days.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[#24242c]" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        className="h-14 border border-[#d9d9df] bg-white px-4 text-sm text-[#64656d] outline-none focus:border-primary"
      />
    </label>
  );
}
