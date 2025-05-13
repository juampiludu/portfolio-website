import React from "react";
import Hero from "./sections/hero/Hero";
import Showcase from "./sections/projects/Showcase";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/work/FeatureCards";
import Experience from "./sections/work/Experience";
import TechStack from "./sections/skills/TechStack";
import Contact from "./sections/contact/Contact";
import Footer from "./components/Footer";
import DeviceProvider from "./context/DeviceContext";

const App = () => {
  return (
    <DeviceProvider>
      <NavBar />
      <Hero />
      <Showcase />
      {/* FEAT: LOGO SHOWCASE */}
      <FeatureCards />
      <Experience />
      <TechStack />
      {/* FEAT: TESTIMONIALS */}
      <Contact />
      <Footer />
    </DeviceProvider>
  );
};

export default App;
