import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import FeatureCards from "../components/home/FeatureCards";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FeatureCards />
      <Footer />
    </>
  );
}