import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import WallArt from "./pages/WallArt.jsx";
import EventsAndWeddings from "./pages/EventsAndWeddings.jsx";
import InteriorDesign from "./pages/InteriorDesign.jsx";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GoToTop from "./components/GoToTop";
import useScrollToTop from "./hooks/useScrollToTop";
import useLenis from "./hooks/useLenis";

const App = () => {

  const lenisRef = useLenis({
    lerp: 0.08,
    wheelMultiplier: 0.6,
    disableOnTouch: true,
  });

  useScrollToTop(lenisRef);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <GoToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/wall-art" element={<WallArt />} />
        <Route path="/events-and-weddings" element={<EventsAndWeddings />} />
        <Route path="/interior-design" element={<InteriorDesign />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
