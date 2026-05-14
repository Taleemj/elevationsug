"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: enquiryTypes[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          enquiry: enquiryTypes[0],
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-[#292936] px-5 pb-20 pt-[132px] text-white md:px-10 md:pb-24 md:pt-[176px]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-primary">
              Contact
            </p>
            <h1 className="mt-5 text-4xl font-light uppercase leading-tight md:text-6xl">
              Talk to us
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75">
              Sponsor an event, book a table, exhibit at an expo, brief us on a
              managed event or ask about what we do.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[#24242c] md:text-4xl">
                Send Us a <span className="font-light italic text-primary">Message</span>
              </h2>
              <div className="mt-4 h-0.5 w-14 bg-primary" />
              <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    id="name"
                    label="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <label
                  className="grid gap-2 text-sm font-medium text-[#24242c]"
                  htmlFor="enquiry"
                >
                  Enquiry Type
                  <select
                    id="enquiry"
                    required
                    value={formData.enquiry}
                    onChange={handleChange}
                    className="h-14 border border-[#d9d9df] bg-white px-4 text-sm text-[#64656d] outline-none focus:border-primary"
                  >
                    {enquiryTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label
                  className="grid gap-2 text-sm font-medium text-[#24242c]"
                  htmlFor="message"
                >
                  Message
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border border-[#d9d9df] bg-white p-4 text-sm text-[#64656d] outline-none focus:border-primary"
                  />
                </label>

                {status === "success" && (
                  <p className="text-sm font-medium text-green-600">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium text-red-600">
                    Failed to send message. Please try again or contact us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="min-h-14 bg-primary px-8 text-sm uppercase tracking-[0.02em] !text-white transition hover:bg-[#24242c] disabled:opacity-50 md:w-max"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <aside className="bg-[#f7f7f9] p-7 md:p-10">
              <h3 className="text-2xl font-semibold text-[#24242c]">
                Enquiry Types
              </h3>
              <div className="mt-7 space-y-4">
                {enquiryTypes.map((type) => (
                  <div
                    key={type}
                    className="border-l-4 border-primary bg-white p-5 text-sm text-[#64656d]"
                  >
                    {type}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-7 text-[#77787f]">
                We aim to respond to all enquiries within 24 hours on business
                days.
              </p>
            </aside>
          </div>
        </section>

        <section className="relative min-h-[680px] overflow-hidden bg-[#dfe2e6] md:min-h-[520px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7469453074673!2d32.589945611577356!3d0.3427163996524771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbae151de3a7%3A0xb691a00fa06cca39!2sAfrica%20Elevation!5e0!3m2!1sen!2sug!4v1778766465477!5m2!1sen!2sug"
            title="Africa Elevation location map"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 bg-white/15" />
          <div className="pointer-events-none relative mx-auto flex min-h-[680px] max-w-6xl items-end px-5 pb-8 md:min-h-[520px] md:items-center md:px-10 md:py-16">
            <div className="pointer-events-auto w-full max-w-sm bg-primary p-6 text-white shadow-[0_28px_70px_rgba(0,0,0,0.18)] md:p-10">
              <h2 className="text-xl font-light md:text-2xl">Elevation Events Limited</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed md:mt-6 md:space-y-4 md:leading-6">
                <p>Plot 83, Bukoto Street, Kampala, Uganda</p>
                <div className="flex flex-col gap-2 md:block md:space-y-4">
                  <a
                    href="tel:+256782164714"
                    className="text-white hover:text-white/75"
                  >
                    +256 782 164 714
                  </a>
                  <a
                    href="mailto:info@elevationevents.co.ug"
                    className="text-white hover:text-white/75"
                  >
                    info@elevationevents.co.ug
                  </a>
                </div>
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
                className="mt-6 inline-flex min-h-11 items-center justify-center bg-white px-6 text-xs uppercase tracking-[0.02em] !text-[#24242c] transition hover:bg-[#24242c] hover:!text-white md:mt-8 md:min-h-12 md:px-8 md:text-sm"
              >
                Get Direction
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label
      className="grid gap-2 text-sm font-medium text-[#24242c]"
      htmlFor={id}
    >
      {label}
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="h-14 border border-[#d9d9df] bg-white px-4 text-sm text-[#64656d] outline-none focus:border-primary"
      />
    </label>
  );
}
