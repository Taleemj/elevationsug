import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const articles = [
  {
    title: "How GRC Can Drive Business Success in Uganda",
    excerpt:
      "Explore the impact of strong Governance, Risk and Compliance practices on business growth and sustainability.",
    image: "/brand/conference-event.webp",
    href: "/news/grc-business-success-uganda",
    tag: "Insights",
  },
  {
    title: "The Evolution of Corporate Trivia Events in East Africa",
    excerpt:
      "How corporate trivia nights are becoming networking and knowledge-sharing platforms for professional audiences.",
    image: "/brand/networking-event.webp",
    href: "/news/evolution-corporate-trivia-east-africa",
    tag: "Culture",
  },
  {
    title: "5 Key Trends Shaping Corporate Events in 2026",
    excerpt:
      "From AI-powered networking to policy-driven formats, these trends are shaping the corporate event industry.",
    image: "/brand/news-event.webp",
    href: "/news/corporate-event-trends-2024",
    tag: "Events",
  },
];

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-[#292936] px-5 pb-20 pt-[132px] text-white md:px-10 md:pb-24 md:pt-[176px]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-primary">Updates</p>
            <h1 className="mt-5 text-4xl font-light uppercase leading-tight md:text-6xl">News & insights</h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75">
              Stay updated on corporate events, industry trends, sponsorship opportunities and the conversations around
              public engagement in Uganda.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[#24242c] md:text-4xl">
              Latest <span className="font-light italic text-primary">Articles</span>
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-14 bg-primary" />
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-7 md:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group border border-[#e5e5e8] bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute bottom-4 left-6 bg-primary px-5 py-3 text-sm uppercase tracking-[0.04em] text-white">
                    {article.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold leading-7 text-[#24242c]">{article.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#696a72]">{article.excerpt}</p>
                  <p className="mt-6 border-t border-[#e7e7ea] pt-5 text-sm uppercase tracking-[0.06em] text-[#77787f]">
                    Read More
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#5a536d] px-5 py-16 text-center text-white md:px-10">
          <h2 className="text-3xl font-light md:text-4xl">
            Stay <span className="italic text-primary">Informed</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Subscribe for event announcements, industry notes and partnership updates.
          </p>
          <Link
            href="/subscribe"
            className="mt-8 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-sm uppercase tracking-[0.02em] text-white transition hover:bg-white hover:text-[#24242c]"
          >
            Subscribe Now
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
