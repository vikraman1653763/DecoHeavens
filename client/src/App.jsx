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

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
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
