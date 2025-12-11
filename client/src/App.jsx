import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer";

const App = () => {
 
 

  return (
    <div>

      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

