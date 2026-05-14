import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { LandingSections } from "@/components/landing-sections";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <LandingSections />
      </main>
    </>
  );
}
