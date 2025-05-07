import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <React.StrictMode>
      <NavBar />
      <Hero />
      <Showcase />
      {/* FEAT: LOGO SHOWCASE */}
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
    </React.StrictMode>
  );
};

export default App;
