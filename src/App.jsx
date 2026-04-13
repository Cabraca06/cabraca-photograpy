import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './App.css'
import Footer from './components/Footer';


function App() {


  return (
      <> 
    <BrowserRouter basename="/cabraca-photograpy">
    <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  
 </>
);
 
     
  
}

export default App
