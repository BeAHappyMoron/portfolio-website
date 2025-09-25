import React, { useState, useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import "./index.css";
import Skills from "./Components/Skills/Skills";

const App = () => {
  const [darkBg, setDarkBg] = useState(false);

  useEffect(() => {
    const aboutSection = document.querySelector(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setDarkBg(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <div className={`bg-layer light`}></div>
      <div className={`bg-layer dark ${darkBg ? "active" : ""}`}></div>
        <Navbar />
        <Hero />
        <About />
        <Skills/>
    </div>

  );
};

export default App;
