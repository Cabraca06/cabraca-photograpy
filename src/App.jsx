import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './App.css'


function App() {


  return (
      <> 
    <Navbar />
    <Router> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  
 </>
);
 
     
  
}

export default App
