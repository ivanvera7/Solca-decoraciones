import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Process />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
