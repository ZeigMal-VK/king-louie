import Hero from "./components/Hero";
import About from "./components/About";
import BioSection from "./components/BioSection";
import FullBleedPhoto from "./components/FullBleedPhoto";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BioSection />
      <FullBleedPhoto />
      <Services />
      <Portfolio />
      <Testimonials />
    </main>
  );
}
