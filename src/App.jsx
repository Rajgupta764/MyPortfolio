import React from "react";
import Navbars from "./assets/components/Navbar/Navbars";
import About from "./assets/components/About/About";
import Home from "./assets/components/Home/Home";
import Skills from "./assets/components/Skills/Skills";
import Projects from "./assets/components/Projects/Projects";
import Rajcontact from "./assets/components/Contact/Rajcontact";
import MagicCursor from "./assets/components/Magic/MagicCursor";


function App() {
  return (
    <>
      <MagicCursor/>
      <Navbars />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Rajcontact />
    </>
  );
}

export default App;
