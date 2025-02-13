import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="main px-4 overflow-x-hidden">
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
