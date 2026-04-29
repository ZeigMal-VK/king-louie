import Hero from "./components/Hero";
import About from "./components/About";
import BioSection from "./components/BioSection";
import FullBleedPhoto from "./components/FullBleedPhoto";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import NewsAchievements from "./components/NewsAchievements";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

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
      <NewsAchievements />
      <Footer />
    </main>
  );
}
