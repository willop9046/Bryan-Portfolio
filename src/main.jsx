import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>

  </React.StrictMode>,
)
