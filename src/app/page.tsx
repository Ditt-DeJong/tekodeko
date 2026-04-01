import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Instagram from "@/components/Instagram";
import Events from "@/components/Events";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Menu />
      <Events />
      <Testimonials />
      <Instagram />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
