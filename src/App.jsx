import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      {/* FEAT: LOGO SHOWCASE */}
      <FeatureCards />
    </>
  );
};

export default App;
