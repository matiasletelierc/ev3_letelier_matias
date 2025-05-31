import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import QuienesSomos from "./components/QuienesSomos";
import Productos from "./components/Productos";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}

export default App;

