import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeatureCards from "../components/home/FeatureCards";
import HowItWorks from "../components/home/HowItWorks";
import WhyChoose from "../components/home/WhyChoose";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeatureCards />

      <HowItWorks />

      <WhyChoose />

      <CTA />

      <Footer />
    </>
  );
}