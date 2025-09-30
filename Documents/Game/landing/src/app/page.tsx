import Hero from "@/components/Hero";
import AboutGame from "@/components/AboutGame";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Trailer from "@/components/Trailer";
import CTA from "@/components/CTA";
// import Characters from "@/components/Characters";
import LoreTimeline from "@/components/LoreTimeline";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutGame />
      <Features />
      <Gallery />
      {/* <Characters /> */}
      <LoreTimeline />
      <Trailer />
      <CTA />
    </>
  );
}
