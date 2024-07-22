import { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.style.overflow = "auto";
      setLoading(false);
    }, 2250);
  }, []);

  return (
    <div className="mx-auto max-w-[2560px] overflow-hidden">
      {/* {loading && <Preloader />}
      {!loading && ( */}
        <>
          <Nav />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
