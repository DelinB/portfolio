import { useState } from 'react'
import { Routes, Route } from "react-router-dom"; import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from './pages/Footer.jsx';
import Portfolio from './pages/Portfolio.jsx';
import InvoicePage from './pages/invoice/pages/InvoicePage.jsx';
import InvoicePreview from './pages/invoice/pages/InvoicePreview.jsx';

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

      <Routes>
        <Route path="/" element={<Portfolio lang={lang} />} />
        <Route path="/invoice" element={<InvoicePage  lang={lang} />} />
                <Route path="/invoice/preview" element={<InvoicePreview  lang={lang} />} />

      </Routes>

    </>
  )
}

export default App