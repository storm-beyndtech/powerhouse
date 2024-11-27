import AboutSec1 from "../components/AboutSec1";
import AboutSec2 from "../components/AboutSec2";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Map from "../components/Map";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import OurTeam from "../components/OurTeam";
import Reviews from "../components/Reviews";
import Services from "../components/Services";

export default function page() {
  return (
    <div className="bg-bg relative">
      <Navbar />
      <Hero />
      <AboutSec1 />
      <AboutSec2 />
      <Services />
      <Map />
      <Benefits />
      <Mission />
      <Reviews />
      <OurTeam />
      <FAQ />
      <Footer />
    </div>
  )
}
