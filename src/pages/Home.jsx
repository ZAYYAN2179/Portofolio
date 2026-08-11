import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Certificates from "../sections/Certificates";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </>
  );
};

export default Home;
