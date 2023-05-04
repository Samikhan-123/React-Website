import React from 'react';
import './Components/custom.css'
import 'react-bootstrap';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router-dom';
import MyNav from './Components/MyNav';
const App = () => {
  return (
    <div>
      <MyNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
