import { createFileRoute } from "@tanstack/react-router";
import Hero from "../lib/components/Hero";
import About from "../lib/components/About";
import Services from "../lib/components/Services";
import Testimonials from "../lib/components/Testimonials";
import FAQ from "../lib/components/FAQ";
import Footer from "../lib/components/Footer";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
