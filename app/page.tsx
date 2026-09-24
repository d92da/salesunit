import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfitCalc from "./components/ProfitCalc";
import Problem from "./components/Problem";
import Model from "./components/Model";
import SalesSystem from "./components/SalesSystem";
import DigitalHygiene from "./components/DigitalHygiene";
import Management from "./components/Management";
import Cases from "./components/Cases";
import FinalStatement from "./components/FinalStatement";
import About from "./components/About";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#474766]">
      <Navbar />

      <Hero />

      <ProfitCalc />

      <Problem />

      <Model />

      <SalesSystem />

      <DigitalHygiene />

      <Management />

      <Cases />

      <FinalStatement />

      <About />

      <FinalCta />

      <Footer />
    </main>
  );
}
