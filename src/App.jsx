import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./sections/contact/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Masthead from "./sections/Masthead";
import Stack from "./sections/Stack";
import Work from "./sections/Work";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Masthead />
        <Experience />
        <Work />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
