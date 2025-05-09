import React, { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });

    return () => {
      window.removeEventListener("load", () => setLoading(false));
    };
  }, []);

  return (
    <React.StrictMode>
      {loading && <Loader />}

      {!loading && (
        <>
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
        </>
      )}
    </React.StrictMode>
  );
};

export default App;
