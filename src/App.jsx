import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
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
