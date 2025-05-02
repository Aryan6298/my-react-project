import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import Pic1 from "./pages/pic1";
import Pic2 from "./pages/pic2";
import Pic3 from "./pages/pic3";
import Pic4 from "./pages/pic4";
import Pic5 from "./pages/pic5";
import Pic6 from "./pages/pic6";
import Pic7 from "./pages/pic7";
import Pic8 from "./pages/pic8";
import Pic9 from "./pages/pic9";
import Pic10 from "./pages/pic10";
import Pic11 from "./pages/pic11";
import Pic12 from "./pages/pic12";
import Pic13 from "./pages/pic13";
import Pic14 from "./pages/pic14";
import Pic15 from "./pages/pic15";
import Pic16 from "./pages/pic16";
import Pic17 from "./pages/pic17";
import Pic18 from "./pages/pic18";
import LegalPage from "./pages/TermsOfServices";
import NotFound from "./pages/NotFound";  // Add a 404 page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pic1" element={<Pic1 />} />
        <Route path="/pic2" element={<Pic2 />} />
        <Route path="/pic3" element={<Pic3 />} />
        <Route path="/pic4" element={<Pic4 />} />
        <Route path="/pic5" element={<Pic5 />} />
        <Route path="/pic6" element={<Pic6 />} />
        <Route path="/pic7" element={<Pic7 />} />
        <Route path="/pic8" element={<Pic8 />} />
        <Route path="/pic9" element={<Pic9 />} />
        <Route path="/pic10" element={<Pic10 />} />
        <Route path="/pic11" element={<Pic11/>} />
        <Route path="/pic12" element={<Pic12/>} />
        <Route path="/pic13" element={<Pic13 />} />
        <Route path="/pic14" element={<Pic14 />} />
        <Route path="/pic15" element={<Pic15 />} />
        <Route path="/pic16" element={<Pic16 />} />
        <Route path="/pic17" element={<Pic17 />} />
        <Route path="/pic18" element={<Pic18 />} />
        <Route path="/termsofservices" element={<LegalPage />} />
 
        <Route path="*" element={<NotFound />} /> {/* 404 Route */}
      </Routes>
    </Router>
  );
};

export default App;
