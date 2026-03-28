import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home.jsx";
import ServicesDetails from "./pages/ServicesDetails.jsx"
import CaseStudyDetails from "./pages/CaseStudyDetails.jsx"
import Gallery from "./pages/Gallery.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Blog from "./pages/Blog.jsx"
import Navbar from './componts/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import ScrollToTop from './componts/ScrollToTop.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Navbarnew from './pages/section/Navbarnew.jsx';

const App = () => {
    const location = useLocation();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>      
    {/* <ScrollToTop /> */}

      {/* <Navbar lang={lang} setLang={setLang} /> */}
      {/* <Navbarnew/> */}
      {/* <div className='mt-10'/> */}
   {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services-details/:slug" element={<ServicesDetails />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
      

      </Routes> */}
      <Routes>
        <Route path="/" element={<Portfolio lang={lang}/>} />
          <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
   
      <Footer />
    </>
  )
}

export default App