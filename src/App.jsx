import { useEffect } from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2000);
  }, []);

  return (
    <div className="mx-auto max-w-[2560px] overflow-hidden">
      <Preloader />
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
