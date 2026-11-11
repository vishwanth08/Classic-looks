import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import EventTypes from "@/sections/EventTypes";
import Portfolio from "@/sections/Portfolio";
import Packages from "@/sections/Packages";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";
import Instagram from "@/sections/Instagram";
import GetQuote from "@/sections/GetQuote";
import Location from "@/sections/Location";
import Contact from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <EventTypes />
      <Portfolio />
      <Packages />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Instagram />
      <GetQuote />
      <Location />
      <Contact />
    </>
  );
}
