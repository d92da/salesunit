import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Model from "./components/Model";
import SalesSystem from "./components/SalesSystem";
import DigitalHygiene from "./components/DigitalHygiene";
import Cases from "./components/Cases";
import Management from "./components/Management";
import FinalStatement from "./components/FinalStatement";
import About from "./components/About";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";


export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <Hero />

      <div className="h-px bg-white/10" />

      <Problem />

      <Model />

      <SalesSystem />

      <DigitalHygiene />

      <Management />

      <Cases />

      <About />

      <FinalStatement />

      <FinalCta />

      <Footer />
    </main>
  );
}
