import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import map from "./assets/map.jpg"
function App() {
  return (
    <>
      <div className="main overflow-x-hidden">
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Contact />
        <div className="mt-0 px-2">
            <img src={map} alt="" className="w-full h-fit"></img>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
