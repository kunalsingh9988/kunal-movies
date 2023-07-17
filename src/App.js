// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import SingleMovie from "./pages/SingleMovie";
import Error from "./pages/Error";

// import Footer from "./components/Footer";

function App() {
  return (
    <Router className="router-container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />

      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;

