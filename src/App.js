import React, { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000) //after 3s setLoading will be false
  }, [])  //runs for first time of render

  return (
    <>
      {
        loading ? <Preloader /> :
          <>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/services" element={<Services />} />
              <Route path="*" element={<Navigate replace to="/" />} /> {/* redirect to home page */}
            </Routes>
            <Footer />
          </>
      }
    </>
  );
};

export default App;