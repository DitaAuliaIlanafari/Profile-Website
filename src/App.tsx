import "./App.css";
import Experience from "./components/Experince";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Testimoni from "./components/Testimoni";
import About from "./components/Aboutme";
import Portofolio from "./components/Portofolio";
import Hero from "./components/hero";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portofolio />
      <Experience />
      <Testimoni />
      <Contact />
    </>
  );
}

export default App;
